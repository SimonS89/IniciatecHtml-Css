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
        let filaStatistics = eventsStatistics(eventos);
        pintarTabla(filaStatistics);
        pintarStatisticCategory(eventosUpcoming, upcomingStatistics);
        pintarStatisticCategory(eventosPast, pastStatistics);
      })
      .catch((err) => console.warn(err));
  }

  function eventsStatistics(eventos) {
    let mayorPorcentaje = 0;
    let eventoMayor = {};
    let menorPorcentaje = 100;
    let eventoMenor = {};
    let capacidadMayor = eventos
      .map((evento) => evento.capacity)
      .sort((a, b) => b - a)[0];
    let eventoCapacidadMayor = eventos.find(
      (evento) => evento.capacity == capacidadMayor
    );
    eventos.forEach((evento) => {
      if (eventComparator(evento) > mayorPorcentaje) {
        mayorPorcentaje = eventComparator(evento);
        eventoMayor = evento;
      }
      if (eventComparator(evento) < menorPorcentaje) {
        menorPorcentaje = eventComparator(evento);
        eventoMenor = evento;
      }
    });
    return [eventoMayor, eventoMenor, eventoCapacidadMayor];
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
        .reduce((accu, ele) => accu + ele);
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
