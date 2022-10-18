window.addEventListener("load", () => {
  const formContainer = document.querySelector(".form__categories");
  const cards_container = document.getElementById("cards_container");
  const inputBusqueda = document.getElementById("inputSearch");
  const detailContainer = document.getElementById("detailContainer");
  const eventsStatisticsContainer = document.getElementById("eventsStatistics");
  const upcomingStatistics = document.getElementById("upcomingStatistics");
  const pastStatistics = document.getElementById("pastStatistics");
  const URI = "https://amazing-events.herokuapp.com/api/events";
  let eventos = [];
  let fechaActual = "";
  let assistOrEst;
  cargarDatos(URI);

  //filtrar las cards por texto ingresado
  inputBusqueda.addEventListener("keyup", superFiltroCondicional);

  //filtrar las cards por checkbox
  formContainer.addEventListener("change", superFiltroCondicional);

  //Funciones de ayuda
  //Funcion para filtrar por texto ingresado por el usuario
  function filtrarPorTexto(eventos) {
    let texto = inputBusqueda.value.toLowerCase();
    let eventosValidosSearch = eventos.filter((evento) =>
      evento.name.toLowerCase().includes(texto)
    );
    return eventosValidosSearch;
  }

  // funcion para filtrar por checkbox presionados por el usuario
  function filtrarEventosPorCategoria(eventos) {
    let checkboxCategorias = Array.from(
      document.querySelectorAll("input[name=categorias]")
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkboxChecked) => checkboxChecked.value);
    if (checkboxCategorias.length == 0) {
      return eventos;
    }
    let eventosFiltrados = eventos.filter((evento) =>
      checkboxCategorias.includes(evento.category)
    );
    return eventosFiltrados;
  }

  //funcion que muestra los eventos por pantalla
  function renderizarCards(eventos) {
    cards_container.innerHTML = "";
    if (eventos.length == 0) {
      cards_container.innerHTML = `<h3 class="text-center text-light">There are no events with those specifications</h3>
      <h4 class="text-center text-light">Suggestions:</h3>
      <ul class="text-center text-light fw-bold" style="list-style-type: none ">
      <li >Make sure that all the words are correctly written.</li>
      <li>Try using other words.</li>
      <li>Try more general keywords.</li>
      <li>Try another category.</li>
      </ul>
      `;
    } else {
      eventos.forEach((evento) => {
        let card = document.createElement("div");
        card.classList.add(
          "card",
          "text-center",
          "col-12",
          "col-md-4",
          "col-lg-3",
          "col-xl-2",
          "text-bg-secondary"
        );
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-duration", "1500");
        card.innerHTML = `
                <div class="inner">
                    <img src=${evento.image} class="card-img-top" alt=${
          evento.name
        }>
                 </div>
                 <div class="card-body d-flex flex-column">
                     <h5 class="card-title">${evento.name}</h5>
                     <p class="card-text">${evento.description} </p>
                     <div class="d-flex justify-content-center" style="margin-top:auto">
                     <a href=${
                       document.title == "MDHL Home"
                         ? "./assets/pages/details.html?id=" + evento._id
                         : "./../pages/details.html?id=" + evento._id
                     } class="btn btn-dark fw-bolder pb-2 pt-2" >Buy Now
                     </a>
                     </div>
                 </div>`;
        cards_container.appendChild(card);
      });
    }
  }

  //function que muestra las categorias por pantalla
  function renderizarCategorias(categorias) {
    categorias.forEach(function (categoria) {
      let label = document.createElement("label");
      label.classList.add(
        "col-12",
        "col-md-12",
        "col-lg-auto",
        "ms-2",
        "me-2",
        "underline-hover-effect"
      );
      label.setAttribute("for", categoria.replace(" ", "__"));
      label.innerHTML = ` <input id=${categoria.replace(
        " ",
        "__"
      )} name="categorias" type="checkbox" value="${categoria}">
                                        ${categoria} 
    `;
      formContainer.prepend(label);
    });
  }

  //funcion para obtener las categorias no duplicadas
  function categorias(eventos) {
    let categorias = [];
    eventos.forEach((evento) => {
      if (!categorias.includes(evento.category)) {
        categorias.push(evento.category);
      }
    });
    return categorias;
  }

  //Funcion super filtro con condicionales dependiendo la pagina en la que estoy ubicado
  function superFiltroCondicional() {
    let filtradosPorTexto;
    filtradosPorTexto = filtrarPorTexto(eventos);
    let eventosFiltrados = filtrarEventosPorCategoria(filtradosPorTexto);
    renderizarCards(eventosFiltrados);
  }

  //Funcion para pintar detalles
  function renderizarDetail(evento) {
    let div = document.createElement("div");
    div.className =
      "card shadow-lg rounded text-bg-secondary text-center d-flex flex-wrap";
    div.setAttribute("data-aos", "flip-left");
    div.setAttribute("data-aos-easing", "ease-out-cubic");
    div.setAttribute("data-aos-duration", "1500");
    div.innerHTML = `    
                                  <div class="row g-0">
                                    <div class="col-md-8">
                                          <img src=${evento.image}
                                                class="img-fluid rounded-start" alt=imagen de ${
                                                  evento.name
                                                }>
                                    </div>
                                    <div class="col-md-4 d-flex">
                                          <div class="card-body  d-flex flex-column justify-content-center">
                                                <h3 class="card-title fs-3 fw-bold mb-3">
                                                      ${evento.name}</h3>
                                                <p class="card-text fs-5 mb-5">${
                                                  evento.description
                                                } ${
      fechaActual > evento.date
        ? " This event was celebrated at "
        : " This event will be celebrated at"
    } ${evento.place.split(" ").join(" ")}, this setting has a capacity for ${
      evento.capacity
    } people and ${
      fechaActual > evento.date
        ? " we had an attendance of "
        : " we estimate an attendance of "
    }${assistOrEst}.<strong>${
      fechaActual > evento.date
        ? " We hope to see you in our next edition of this event!"
        : " Join us, you are gonna enjoy it!"
    }</stron>
                                                </p>
                                                <p class="card-text"><small class="text-warning fw-bold">Event Date : ${
                                                  evento.date
                                                }</small>
                                                </p>
                                                
                     <span class="d-flex align-items-center justify-content-center text-center badge text-bg-light p-2 fs-5">Price: $${
                       evento.price
                     }</span>
                                          </div>
                                    </div>
                              </div>`;
    detailContainer.appendChild(div);
  }

  // Codigo para las tablas

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
        .toLocaleString();
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

  // Fetch obtener informacion

  function cargarDatos(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        eventos = data.events;
        if (document.title == "MDHL Home") {
          eventos = data.events;
        } else if (document.title == "MDHL Upcoming Events") {
          eventos = eventos.filter((evento) => evento.date >= data.currentDate);
        } else if (document.title == "MDHL Past Events") {
          eventos = eventos.filter((evento) => evento.date < data.currentDate);
        } else if (document.title == "MDHL Event Detail") {
          let cadenaParametrosUrl = location.search;
          let parametros = new URLSearchParams(cadenaParametrosUrl);
          let id = parametros.get("id");
          fechaActual = data.currentDate;
          let eventoEncontrado = eventos.find((evento) => evento._id == id);
          assistOrEst = eventoEncontrado.assistance
            ? eventoEncontrado.assistance
            : eventoEncontrado.estimate;
          renderizarDetail(eventoEncontrado);
        } else if ((document.title = "MDHL Stadistics")) {
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
        }
        renderizarCards(eventos);
        let categoriasFiltradas = categorias(eventos);
        renderizarCategorias(categoriasFiltradas);
      })
      .catch((err) => console.warn(err));
  }
});
