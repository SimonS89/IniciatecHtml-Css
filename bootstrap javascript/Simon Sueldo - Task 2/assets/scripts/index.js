import { datos, renderizar, renderizarCategorias } from "./data.js";
window.addEventListener("load", () => {
  const eventos = datos.eventos;

  //verson 1 js
  const formContainer = document.querySelector(".form__categories");
  const cardsHome = document.getElementById("cards__home");
  const anioActual = datos.fechaActual;
  const cardsPast = document.getElementById("cards__past");
  const cardsUpcoming = document.getElementById("cards__upcoming");
  let eventosPast = [];
  let eventosUpcoming = [];
  let categoriasFiltradas = [];
  let eventosPorCategoria = [];
  let eventosPorTexto = [];

  //HOME
  if (cardsHome != null) {
    eventos.forEach((evento) => {
      renderizar(evento, cardsHome);
    });
    renderizarCategorias(formContainer);
    let inputBusqueda = document.querySelector("#inputSearch");
    inputBusqueda.addEventListener("keyup", function () {
      mostrarFiltradosPorTexto(cardsHome, eventos, this.value);
    });
    let checkboxCategorias = document.querySelectorAll(
      "input[name=categorias]"
    );
    checkboxCategorias.forEach((checkbox) => {
      checkbox.addEventListener("click", function () {
        mostrarFiltradosPorCategoria(cardsHome, this, eventos);
      });
    });
    //PAST EVENTS
  } else if (cardsPast != null) {
    eventos.forEach((evento) => {
      let date = evento.date;
      if (date < anioActual) {
        eventosPast.push(evento);
        renderizar(evento, cardsPast);
      }
    });
    renderizarCategorias(formContainer);
    let inputBusqueda = document.querySelector("#inputSearch");
    inputBusqueda.addEventListener("keyup", function () {
      mostrarFiltradosPorTexto(cardsPast, eventosPast, this.value);
    });
    let checkboxCategorias = document.querySelectorAll(
      "input[name=categorias]"
    );
    checkboxCategorias.forEach((checkbox) => {
      checkbox.addEventListener("click", function () {
        mostrarFiltradosPorCategoria(cardsPast, this, eventosPast);
      });
    });
    //UPCOMING EVENTS
  } else {
    eventos.forEach((evento) => {
      let date = evento.date;
      if (date > anioActual) {
        eventosUpcoming.push(evento);
        renderizar(evento, cardsUpcoming);
      }
    });
    renderizarCategorias(formContainer);
    let inputBusqueda = document.querySelector("#inputSearch");
    inputBusqueda.addEventListener("keyup", function () {
      mostrarFiltradosPorTexto(cardsUpcoming, eventosUpcoming, this.value);
    });
    let checkboxCategorias = document.querySelectorAll(
      "input[name=categorias]"
    );
    checkboxCategorias.forEach((checkbox) => {
      checkbox.addEventListener("click", function () {
        mostrarFiltradosPorCategoria(cardsUpcoming, this, eventosUpcoming);
      });
    });
  }

  //FUNCIONES AYUDA
  function mostrarFiltradosPorCategoria(container, checkbox, eventos) {
    container.innerHTML = "";
    let eventosCategorias = filtrarEventosPorCategoria(eventos, checkbox);
    eventosCategorias.forEach((evento) => {
      renderizar(evento, container);
    });
  }

  function mostrarFiltradosPorTexto(container, eventos, inputValue) {
    container.innerHTML = "";
    eventosPorTexto = filtrarPorTexto(eventos, inputValue);
    eventosPorTexto.forEach((evento) => {
      renderizar(evento, container);
    });
  }

  function filtrarPorTexto(eventos, texto) {
    let eventosValidosSearch = [];
    eventosValidosSearch = eventos.filter((evento) => {
      return evento.name.toLowerCase().includes(texto.toLowerCase());
    });
    return eventosValidosSearch;
  }

  function filtrarEventosPorCategoria(eventos, checkbox) {
    if (checkbox.checked) {
      categoriasFiltradas.push(checkbox.value);
    } else if (
      !checkbox.checked &&
      categoriasFiltradas.includes(checkbox.value)
    ) {
      categoriasFiltradas.splice(
        categoriasFiltradas.indexOf(checkbox.value),
        1
      );
    }
    eventosPorCategoria = [];
    categoriasFiltradas.forEach(function (categoria) {
      eventos.forEach(function (evento) {
        if (evento.category.split(" ")[0] == categoria) {
          eventosPorCategoria.push(evento);
        }
      });
    });
    if (eventosPorCategoria.length < 1) {
      return eventos;
    }
    return eventosPorCategoria;
  }
});

//version varios js
// eventos.forEach((evento) => {
//   renderizar(evento, cardsHome);
// });
