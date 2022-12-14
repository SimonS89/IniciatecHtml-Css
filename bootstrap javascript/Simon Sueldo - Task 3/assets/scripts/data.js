const datos = {
  currentDate: "2022-01-01",
  events: [
    {
      _id: 1,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
      name: "Collectivities Party",
      date: "2021-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
    },
    {
      _id: 2,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
      name: "Korean style",
      date: "2022-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 10,
    },
    {
      _id: 3,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
      name: "Jurassic Park",
      date: "2021-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      assistance: 65892,
      price: 15,
    },
    {
      _id: 4,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
      name: "Parisian Museum",
      date: "2022-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
    },
    {
      _id: 5,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
      name: "Comicon",
      date: "2021-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
    },
    {
      _id: 6,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
      name: "Halloween Night",
      date: "2022-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
    },
    {
      _id: 7,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
      name: "Metallica in concert",
      date: "2022-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
    },
    {
      _id: 8,
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
      name: "Electronic Fest",
      date: "2021-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
    },
    {
      _id: 9,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
      name: "10K for life",
      date: "2021-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
    },
    {
      _id: 10,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
      name: "15K NY",
      date: "2022-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      assistance: 2569800,
      price: 3,
    },
    {
      _id: 11,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
      name: "School's book fair",
      date: "2022-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
    },
    {
      _id: 12,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
      name: "Just for your kitchen",
      date: "2021-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
    },
    {
      _id: 13,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
      name: "Batman",
      date: "2021-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
    },
    {
      _id: 14,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
      name: "Avengers",
      date: "2022-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
    },
  ],
};

function renderizarCards(eventos, cards_container) {
  cards_container.innerHTML = "";
  if (eventos.length == 0) {
    cards_container.innerHTML = `<h3 class="text-center text-light">There are no events with those specifications</h3>
    <h4 class="text-center text-light">Suggestions:</h3>
    <ul class="text-center text-light fw-bold" style="list-style-type: none ">
    <li >Make sure that all the words are correctly written.</li>
    <li>Try using other words.</li>
    <li>Try more general keywords.</li>
    <li>Try another category.</li>
    </ul>
    `;
  } else {
    eventos.forEach((evento) => {
      let card = document.createElement("div");
      card.classList.add(
        "card",
        "text-center",
        "col-12",
        "col-md-5",
        "col-lg-3",
        "pb-2",
        "text-bg-secondary"
      );
      card.innerHTML = `
              <div class="inner">
                  <img src=${evento.image} class="card-img-top" alt=${
        evento.name
      }>
               </div>
               <div class="card-body d-flex flex-column">
                   <h5 class="card-title">${evento.name}</h5>
                   <p class="card-text">${evento.description} </p>
                   <div class="d-flex justify-content-center gap-2" style="margin-top:auto">
                   <span class="d-flex align-items-center  badge text-bg-light p-3 ">Price: $${
                     evento.price
                   }</span>
                   <a href=${
                     document.title == "MDHL Home"
                       ? "./assets/pages/details.html?id=" + evento._id
                       : "./../pages/details.html?id=" + evento._id
                   } class="btn btn-dark fw-bolder pb-2 pt-2" >Buy Now
                   </a>
                   </div>
               </div>`;
      cards_container.appendChild(card);
    });
  }
}

function renderizarCategorias(formContainer) {
  categorias().forEach(function (categoria) {
    let label = document.createElement("label");
    label.classList.add("col-12", "col-md-12", "col-lg-auto");
    label.setAttribute("for", categoria.replace(" ", "__"));
    label.textContent = categoria;
    label.innerHTML = ` <input id=${categoria.replace(
      " ",
      "__"
    )} name="categorias" type="checkbox" value=${categoria}>
                                      ${categoria} 
  `;
    formContainer.prepend(label);
  });
}

function categorias() {
  let categorias = [];
  datos.events.forEach((evento) => {
    if (!categorias.includes(evento.category)) {
      categorias.push(evento.category);
    }
  });
  return categorias;
}

export { datos, renderizarCards, renderizarCategorias };
