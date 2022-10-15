window.addEventListener("load", () => {
  const URI = "https://amazing-events.herokuapp.com/api/events";
  const eventsStatisticsContainer = document.getElementById("eventsStatistics");
  const upcomingStatistics = document.getElementById("upcomingStatistics");
  const pastStatistics = document.getElementById("pastStatistics");
  cargarDatos(URI);

  function cargarDatos(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let eventos = data.events;
        let eventosUpcoming = eventos.filter(
          (evento) => evento.date >= data.currentDate
        );
        let eventosPast = eventos.filter(
          (evento) => evento.date < data.currentDate
        );
        let filaStatistics = eventsStatistics(data);
        pintarTabla(filaStatistics);
        pintarStatisticCategory(eventosUpcoming, upcomingStatistics);
        pintarStatisticCategory(eventosPast, pastStatistics);
        agruparCategoria(eventosUpcoming);
      })
      .catch((err) => console.warn(err));
  }

  function eventsStatistics(data) {
    let eventosOrdenados = data.events
      .filter((evento) => evento.date < data.currentDate)
      .sort((a, b) => {
        return (
          (parseInt(b.assistance) * 100) / parseInt(b.capacity) -
          (parseInt(a.assistance) * 100) / parseInt(a.capacity)
        );
      });
    let eventoMayor = eventosOrdenados[0];
    let eventoMenor = eventosOrdenados[eventosOrdenados.length - 1];
    let mayorCapacidad = data.events.sort((a, b) => b.capacity - a.capacity)[0];
    return [eventoMayor, eventoMenor, mayorCapacidad];
  }

  function eventComparator(evento) {
    return evento.assistance
      ? (evento.assistance / evento.capacity) * 100
      : (evento.estimate / evento.capacity) * 100;
  }

  function pintarTabla(eventos) {
    let tr = document.createElement("tr");
    eventos.forEach((evento) => {
      tr.innerHTML += `
            <td>${evento.name}</td>
            `;
      eventsStatisticsContainer.appendChild(tr);
    });
  }

  function categorias(eventos) {
    let categorias = [];
    eventos.forEach((evento) => {
      if (!categorias.includes(evento.category)) {
        categorias.push(evento.category);
      }
    });
    return categorias;
  }

  function pintarStatisticCategory(eventos, container) {
    let categoriasFiltradas = categorias(eventos);
    categoriasFiltradas.forEach((categoria) => {
      let filtradosCategoria = eventos.filter(
        (evento) => evento.category == categoria
      );
      let revenuesCategoria = filtradosCategoria
        .map(
          (evento) =>
            evento.price *
            (evento.assistance ? evento.assistance : evento.estimate)
        )
        .reduce((accu, ele) => accu + ele)
        .toString()
        .split(/(?=(?:...)*$)/)
        .join(".");
      let revenuesAttendance =
        filtradosCategoria
          .map((evento) => eventComparator(evento))
          .reduce((accu, ele) => accu + ele) / filtradosCategoria.length;
      let tr = document.createElement("tr");
      tr.innerHTML = `
         <td>${categoria}</td>
         <td>$ ${revenuesCategoria}
        </td>
        <td >${revenuesAttendance.toFixed(2)} %</td> `;
      container.appendChild(tr);
    });
  }
});
