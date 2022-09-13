import { datos, renderizar } from "./data.js";

let cardsHome = document.getElementById("cards__home");
const eventos = datos.eventos;
let template = "";

eventos.forEach((evento) => {
  template += renderizar(evento);
});

cardsHome.innerHTML = template;
