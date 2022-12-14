import { datos, renderizarCards, renderizarCategorias } from "./data.js";
window.addEventListener("load", () => {
  const formContainer = document.querySelector(".form__categories");
  const cards_container = document.getElementById("cards_container");
  const eventos = eventosPast();
  //ingresar dinamicamente las cards y categorias
  renderizarCards(eventos, cards_container);
  renderizarCategorias(formContainer);
  const inputBusqueda = document.getElementById("inputSearch");
  const checkboxCategorias = document.querySelectorAll(
    "input[name=categorias]"
  );

  //filtrar las cards por texto ingresado
  inputBusqueda.addEventListener("keyup", function () {
    let categoriasFiltradasCheckbox = filtrarPorCheckbox(checkboxCategorias);
    let filtradosPorTexto = filtrarPorTexto(eventos);
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
      let filtradosPorTexto = filtrarPorTexto(eventos);
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
    let eventosPast = datos.events.filter(
      (evento) => evento.date < datos.currentDate
    );
    return eventosPast;
  }
});
