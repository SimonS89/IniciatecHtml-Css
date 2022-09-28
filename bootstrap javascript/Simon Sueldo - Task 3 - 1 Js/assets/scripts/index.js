import { datos, renderizarCards, renderizarCategorias } from "./data.js";
window.addEventListener("load", () => {
  const formContainer = document.querySelector(".form__categories");
  const cards_container = document.getElementById("cards_container");
  const eventos = datos.events;
  const pastEvents = eventosPast();
  const upcomingEvents = eventosUpcoming();
  //ingresar dinamicamente las cards y categorias
  if (document.title == "MDHL Home") {
    renderizarCards(eventos, cards_container);
  } else if (document.title == "MDHL Upcoming Events") {
    renderizarCards(upcomingEvents, cards_container);
  } else {
    renderizarCards(pastEvents, cards_container);
  }
  renderizarCategorias(formContainer);
  const inputBusqueda = document.getElementById("inputSearch");
  const checkboxCategorias = document.querySelectorAll(
    "input[name=categorias]"
  );

  //filtrar las cards por texto ingresado
  inputBusqueda.addEventListener("keyup", function () {
    let categoriasFiltradasCheckbox = filtrarPorCheckbox(checkboxCategorias);
    let filtradosPorTexto;
    if (document.title == "MDHL Home") {
      filtradosPorTexto = filtrarPorTexto(eventos);
    } else if (document.title == "MDHL Upcoming Events") {
      filtradosPorTexto = filtrarPorTexto(upcomingEvents);
    } else {
      filtradosPorTexto = filtrarPorTexto(pastEvents);
    }
    let eventosFiltrados = filtrarEventosPorCategoria(
      filtradosPorTexto,
      categoriasFiltradasCheckbox
    );
    renderizarCards(eventosFiltrados, cards_container);
  });

  //filtrar las cards por checkbox
  checkboxCategorias.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      let categoriasFiltradasCheckbox = filtrarPorCheckbox(checkboxCategorias);
      let filtradosPorTexto;
      if (document.title == "MDHL Home") {
        filtradosPorTexto = filtrarPorTexto(eventos);
      } else if (document.title == "MDHL Upcoming Events") {
        filtradosPorTexto = filtrarPorTexto(upcomingEvents);
      } else {
        filtradosPorTexto = filtrarPorTexto(pastEvents);
      }
      let eventosFiltrados = filtrarEventosPorCategoria(
        filtradosPorTexto,
        categoriasFiltradasCheckbox
      );
      renderizarCards(eventosFiltrados, cards_container);
    });
  });

  //Funciones de ayuda
  function filtrarPorTexto(eventos) {
    let texto = inputBusqueda.value;
    let eventosValidosSearch = eventos.filter((evento) => {
      return evento.name.toLowerCase().includes(texto.toLowerCase());
    });
    return eventosValidosSearch;
  }

  function filtrarPorCheckbox(checkboxCategorias) {
    let categoriasFiltradas = [];
    checkboxCategorias.forEach((checkbox) => {
      if (checkbox.checked) {
        categoriasFiltradas.push(checkbox.value);
      }
    });
    return categoriasFiltradas;
  }

  function filtrarEventosPorCategoria(eventos, categoriasFiltradas) {
    let eventosPorCategoria = [];
    categoriasFiltradas.forEach(function (categoria) {
      eventos.forEach(function (evento) {
        if (evento.category.split(" ")[0] == categoria) {
          eventosPorCategoria.push(evento);
        }
      });
    });
    return categoriasFiltradas.length < 1
      ? (eventosPorCategoria = eventos)
      : eventosPorCategoria;
  }

  function eventosPast() {
    let eventosPast = eventos.filter(
      (evento) => evento.date < datos.currentDate
    );
    return eventosPast;
  }

  function eventosUpcoming() {
    let eventosUpcoming = eventos.filter(
      (evento) => evento.date >= datos.currentDate
    );
    return eventosUpcoming;
  }
});
