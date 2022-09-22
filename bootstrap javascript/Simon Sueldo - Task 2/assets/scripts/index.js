import { datos, renderizar, renderizarCategorias } from "./data.js";
window.addEventListener("load", () => {
  const eventos = datos.eventos;

  //verson 1 js
  let formContainer = document.querySelector(".form__categories");
  let cardsHome = document.getElementById("cards__home");
  let anioActual = datos.fechaActual;
  let cardsPast = document.getElementById("cards__past");
  let cardsUpcoming = document.getElementById("cards__upcoming");

  if (cardsHome != null) {
    eventos.forEach((evento) => {
      renderizar(evento, cardsHome);
    });
    renderizarCategorias(formContainer);
  } else if (cardsPast != null) {
    eventos.forEach((evento) => {
      let date = evento.date;
      if (date < anioActual) {
        renderizar(evento, cardsPast);
      }
    });
    renderizarCategorias(formContainer);
  } else {
    eventos.forEach((evento) => {
      let date = evento.date;
      if (date > anioActual) {
        renderizar(evento, cardsUpcoming);
      }
    });
    renderizarCategorias(formContainer);
  }

  //   const botonBook = document.querySelectorAll("input[name=categorias]");
  //   console.log(botonBook);
  //   botonBook.addEventListener("click", function () {
  //     console.log(this.checked);
  //   });
  //version varios js
  // eventos.forEach((evento) => {
  //   renderizar(evento, cardsHome);
  // });
  //   let myStr = "Hello World";
  //   let firstWord = myStr.split(" ")[0];
  //   console.log(firstWord);
});
