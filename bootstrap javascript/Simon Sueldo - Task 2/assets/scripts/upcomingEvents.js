import { datos, renderizar } from "./data.js";

let cardsHome = document.getElementById("cards__upcoming");
const eventos = datos.eventos;

eventos.forEach((evento) => {
  let date = evento.date;
  let anioActual = datos.fechaActual;
  if (date > anioActual) {
    renderizar(evento, cardsHome);
  }
});
