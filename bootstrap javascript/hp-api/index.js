const cardsContainer = document.getElementById("cardsContainer");
const URI = "https://hp-api.herokuapp.com/api/characters";
const search = document.getElementById("search");
const checkContainer = document.getElementById("checks");
const favContainer = document.getElementById("favorites");
let personajes = [];
let casas = [];
let favoritos = [];

window.addEventListener("load", () => {
  let favoritosLocal = JSON.parse(localStorage.getItem("favoritos"));
  if (favoritosLocal) {
    favoritos = favoritosLocal;
    pintarPersonajes(favoritos, favContainer);
  }
});

traerDatos(URI);

search.addEventListener("keyup", superFiltro);

checkContainer.addEventListener("change", superFiltro);

function pintarPersonajes(personajes, container) {
  container.innerHTML = "";
  if (personajes.length == 0) {
    if (container.id == "favorites") {
      container.innerHTML = `<p class="text-white text-center display-5 bolder">No favorite characters selected.</p>`;
    } else {
      container.innerHTML = `<p class="text-white text-center display-5 bolder">No results found</p>`;
    }
  }
  personajes.forEach((personaje) => {
    let card = document.createElement("div");
    card.className = "card p-0 bg-dark text-light";
    card.style.width = "18rem";
    let funciones = "";
    if (container.id == "cardsContainer") {
      funciones = `agregarFavs('${personaje.name}')`;
    } else {
      funciones = `removerFavs('${personaje.name}')`;
    }
    card.innerHTML = `
            <img src=${
              personaje.image == ""
                ? "https://pbs.twimg.com/media/FbrtWIuWYAILVDP.jpg"
                : personaje.image
            } class="card-img-top" style="height:18rem; object-fit:contain;"/>
            <div class="d-flex flex-column justify-content-between card-body fw-bolder">
            <p class="card-text">Name: "${personaje.name}"</p>
                        <p class="card-text">House: "${personaje.house}"</p>
                              <button class="${
                                container.id == "favorites"
                                  ? "btn-outline-danger"
                                  : "btn-outline-success"
                              } btn mb-4 me-2 fw-bolder text-light rounded-pill" onclick="${funciones}" >${
      container.id == "favorites" ? "Remove favorite" : "Add Favorite"
    }</button>
            </div>
            `;
    container.appendChild(card);
  });
}

function traerDatos(URI) {
  fetch(URI)
    .then((response) => response.json())
    .then((data) => {
      personajes = data;
      casas = filtrarPorCategoria(data);
      crearCheckboxs(casas);
      pintarPersonajes(personajes, cardsContainer);
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
  pintarPersonajes(filtradosPorCasa, cardsContainer);
}

function agregarFavs(nombrePersonaje) {
  let personajeEncontrado = personajes.find(
    (personaje) => personaje.name == nombrePersonaje
  );
  if (!favoritos.includes(personajeEncontrado)) {
    favoritos.push(personajeEncontrado);
    pintarPersonajes(favoritos, favContainer);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }
}

function removerFavs(nombrePersonaje) {
  favoritos = favoritos.filter(
    (personaje) => personaje.name != nombrePersonaje
  );
  pintarPersonajes(favoritos, favContainer);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}
