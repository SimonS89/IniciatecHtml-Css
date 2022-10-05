const cardsContainer = document.getElementById("cardsContainer");
const URI = "https://hp-api.herokuapp.com/api/characters";
const search = document.getElementById("search");
const checkContainer = document.getElementById("checks");
let personajes = [];
let casas = [];
traerDatos(URI);

search.addEventListener("keyup", superFiltro);

checkContainer.addEventListener("change", superFiltro);

function pintarPersonajes(personajes) {
  cardsContainer.innerHTML = "";
  personajes.forEach((personaje) => {
    let card = document.createElement("div");
    card.className = "card p-0 bg-dark text-light";
    card.style.width = "18rem";
    card.innerHTML = `
            <img src="${personaje.image}" class="card-img-top" alt="${
      "photo of " + personaje.name
    }"/>
            <div class="card-body">
            <p class="card-text">Name: ${personaje.name}</p>
                        <p class="card-text">House: ${personaje.house}</p>
            </div>
            `;
    cardsContainer.appendChild(card);
  });
}

function traerDatos(URI) {
  fetch(URI)
    .then((response) => response.json())
    .then((data) => {
      personajes = data.filter((personaje) => personaje.image != "");
      casas = filtrarPorCategoria(data);
      crearCheckboxs(casas);
      pintarPersonajes(personajes);
    })
    .catch((error) => console.warn(error));
}

function filtrarPorNombre(personajes) {
  let texto = search.value.toLowerCase();
  let personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(texto)
  );
  return personajesFiltrados;
}

function filtrarPorCategoria(personajes) {
  let categorias = [];
  personajes.forEach((personaje) => {
    if (!categorias.includes(personaje.house)) {
      if (personaje.house != "") {
        categorias.push(personaje.house);
      }
    }
  });
  return categorias;
}

function crearCheckboxs(casas) {
  casas.forEach((casa) => {
    let div = document.createElement("div");
    div.className = "form-check form-switch";
    div.innerHTML = `
               <input class="form-check-input" type="checkbox" role="switch" id="${casa}" value="${casa}">
            <label class="form-check-label" for="${casa}">${casa}</label>
            `;
    checkContainer.appendChild(div);
  });
}

function filtrarPorCasa(personajes) {
  let casas = Array.from(document.querySelectorAll("input[type=checkbox]"))
    .filter((checkbox) => checkbox.checked)
    .map((checkboxChecked) => checkboxChecked.value);
  let personajesFiltrados = personajes.filter((personaje) =>
    casas.includes(personaje.house)
  );
  return casas.length == 0 ? personajes : personajesFiltrados;
}

function superFiltro() {
  let filtradosPorTexto = filtrarPorNombre(personajes);
  let filtradosPorCasa = filtrarPorCasa(filtradosPorTexto);
  pintarPersonajes(filtradosPorCasa);
}
