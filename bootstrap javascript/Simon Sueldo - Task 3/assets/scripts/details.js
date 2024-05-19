let cadenaParametrosUrl = location.search;
let parametros = new URLSearchParams(cadenaParametrosUrl);
let id = parametros.get("id");
import { datos } from "./data.js";
const eventos = datos.events;
const fechaActual = datos.currentDate;
const detailContainer = document.getElementById("detailContainer");
let eventoEncontrado = eventos.find((evento) => evento._id == id);
renderizarDetail(eventoEncontrado);
function renderizarDetail(evento) {
  let div = document.createElement("div");
  div.className =
    "card shadow-lg rounded text-bg-secondary text-center d-flex flex-wrap";
  div.innerHTML = `    
                                  <div class="row g-0">
                                    <div class="col-md-8">
                                          <img src=${evento.image}
                                                class="img-fluid rounded-start" alt=imagen de ${
                                                  evento.name
                                                }>
                                    </div>
                                    <div class="col-md-4 d-flex">
                                          <div class="card-body  d-flex flex-column justify-content-center">
                                                <h3 class="card-title fs-3 fw-bold mb-3">
                                                      ${evento.name}</h3>
                                                <p class="card-text fs-5 mb-5">${
                                                  evento.description
                                                } ${
    fechaActual > evento.date
      ? " This event was celebrated at "
      : " This event will be celebrated at"
  } ${evento.place.split(" ").join(" ")}, this setting has a capacity for ${
    evento.capacity
  } people and ${
    fechaActual > evento.date
      ? " we had an attendance of "
      : " we estimate an attendance of "
  }${fechaActual > evento.date ? evento.assistance : evento.capacity}.<strong>${
    fechaActual > evento.date
      ? " We hope to see you in our next edition of this event!"
      : " Join us, you are gonna enjoy it!"
  }</strong>
                                                </p>
                                                <p class="card-text"><small class="text-warning fw-bold">Event Date : ${
                                                  evento.date
                                                }</small>
                                                </p>
                                          </div>
                                    </div>
                              </div>`;
  detailContainer.appendChild(div);
}
