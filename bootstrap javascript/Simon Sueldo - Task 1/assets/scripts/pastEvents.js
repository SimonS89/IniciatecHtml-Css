import { datos, renderizar } from "./data.js";
let cardsHome = document.getElementById("cards__past");
const eventos = datos.eventos;
let template = "";

eventos.forEach((evento) => {
  let date = evento.date;
  let anioActual = datos.fechaActual;
  if (date < anioActual) {
    template += renderizar(evento);
  }
});

cardsHome.innerHTML = template;
