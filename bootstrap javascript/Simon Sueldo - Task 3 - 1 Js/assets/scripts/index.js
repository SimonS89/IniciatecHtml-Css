window.addEventListener("load", () => {
  const formContainer = document.querySelector(".form__categories");
  const cards_container = document.getElementById("cards_container");
  const inputBusqueda = document.getElementById("inputSearch");
  const URI = "https://amazing-events.herokuapp.com/api/events";
  let eventos = [];
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
      label.classList.add("col-12", "col-md-12", "col-lg-auto", "ms-2", "me-2");
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

  function cargarDatos(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        eventos = data.events;
        if (document.title == "MDHL Home") {
          eventos = data.events;
        } else if (document.title == "MDHL Upcoming Events") {
          eventos = eventos.filter((evento) => evento.date >= data.currentDate);
        } else {
          eventos = eventos.filter((evento) => evento.date < data.currentDate);
        }
        renderizarCards(eventos);
        let categoriasFiltradas = categorias(eventos);
        renderizarCategorias(categoriasFiltradas);
      })
      .catch((err) => console.warn(err));
  }
});
