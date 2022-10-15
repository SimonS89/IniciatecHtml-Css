let cadenaParametrosUrl = location.search;
let parametros = new URLSearchParams(cadenaParametrosUrl);
let id = parametros.get("id");
const detailContainer = document.getElementById("detailContainer");
const URI = "https://amazing-events.herokuapp.com/api/events";
let fechaActual = "";
let assistOrEst;

function renderizarDetail(evento) {
  let div = document.createElement("div");
  div.className =
    "card shadow-lg rounded text-bg-secondary text-center d-flex flex-wrap";
  div.setAttribute("data-aos", "flip-left");
  div.setAttribute("data-aos-easing", "ease-out-cubic");
  div.setAttribute("data-aos-duration", "1500");
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
  }${assistOrEst}.<strong>${
    fechaActual > evento.date
      ? " We hope to see you in our next edition of this event!"
      : " Join us, you are gonna enjoy it!"
  }</stron>
                                                </p>
                                                <p class="card-text"><small class="text-warning fw-bold">Event Date : ${
                                                  evento.date
                                                }</small>
                                                </p>
                                                
                     <span class="d-flex align-items-center justify-content-center text-center badge text-bg-light p-2 fs-5">Price: $${
                       evento.price
                     }</span>
                                          </div>
                                    </div>
                              </div>`;
  detailContainer.appendChild(div);
}

traerDatos(URI);
function traerDatos(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let eventos = data.events;
      fechaActual = data.currentDate;
      let eventoEncontrado = eventos.find((evento) => evento._id == id);
      assistOrEst = eventoEncontrado.assistance
        ? eventoEncontrado.assistance
        : eventoEncontrado.estimate;
      renderizarDetail(eventoEncontrado);
    })
    .catch((err) => console.warn(err));
}
