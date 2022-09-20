import { datos, renderizar } from "./data.js";
const eventos = datos.eventos;
let cardsHome = document.getElementById("cards__home");

//verson 1 js
let anioActual = datos.fechaActual;
let cardsPast = document.getElementById("cards__past");
let cardsUpcoming = document.getElementById("cards__upcoming");

if (cardsHome != null) {
  eventos.map((evento) => {
    renderizar(evento, cardsHome);
  });
} else if (cardsPast != null) {
  eventos.map((evento) => {
    let date = evento.date;
    if (date < anioActual) {
      renderizar(evento, cardsPast);
    }
  });
} else {
  eventos.map((evento) => {
    let date = evento.date;
    if (date > anioActual) {
      renderizar(evento, cardsUpcoming);
    }
  });
}

//version varios js
// eventos.forEach((evento) => {
//   renderizar(evento, cardsHome);
// });
