import { datos, renderizar } from "./data.js";
  const eventos = datos.eventos;
  let cardsHome = document.getElementById("cards__home");
  let template = "";

  eventos.forEach((evento) => {
    template += renderizar(evento);
  });

  cardsHome.innerHTML = template;
