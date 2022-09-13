import { datos, renderizar } from "./data.js";

let cardsHome = document.getElementById("cards__upcoming");
const eventos = datos.eventos;
let template = "";

eventos.forEach((evento) => {
  let date = evento.date;
  let anio = parseInt(date.slice(0, 4));
  if (anio >= 2022) {
    template += renderizar(evento);
  }
});

cardsHome.innerHTML = template;
