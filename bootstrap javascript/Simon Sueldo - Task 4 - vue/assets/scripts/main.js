const { createApp } = Vue;

createApp({
  data() {
    return {
      eventos: [],
      eventosUpcoming: [],
      eventosPast: [],
      backupEventos: [],
      categorias: [],
      urlApi: "https://amazing-events.herokuapp.com/api/events",
      textoBuscar: "",
      eventosBuscados: [],
      eventosAgendados: [],
      fechaActual: "",
      assistOrEst: "",
      eventoDetail: {},
      statistics: {
        eventoMayor: {},
        eventoMenor: {},
        mayorCapacidad: {},
        estadisticasUpcoming: [],
        estadisticasPast: [],
      },
    };
  },
  created() {
    this.traerData();
    if (JSON.parse(localStorage.getItem("agendados"))) {
      this.eventosAgendados = JSON.parse(localStorage.getItem("agendados"));
    }
  },
  mounted() {
    AOS.init();
  },
  methods: {
    traerData() {
      fetch(this.urlApi)
        .then((response) => response.json())
        .then((data) => {
          this.eventos = data.events;
          this.eventosUpcoming = this.eventos.filter(
            (evento) => evento.date >= data.currentDate
          );
          this.eventosPast = this.eventos.filter(
            (evento) => evento.date < data.currentDate
          );
          this.fechaActual = data.currentDate;
          /*Statistics*/
          this.eventsStatistics();
          /* cargar array de Statistics upcoming*/
          this.cargarEstadisticas(
            this.estadisticasPorCategorias(this.eventosUpcoming),
            this.statistics.estadisticasUpcoming
          );
          /* cargar array de Statistics past*/
          this.cargarEstadisticas(
            this.estadisticasPorCategorias(this.eventosPast),
            this.statistics.estadisticasPast
          );
          /*Eventos segun pagina*/
          if (document.title == "MDHL Home") {
            this.eventos = data.events;
          } else if (document.title == "MDHL Upcoming Events") {
            this.eventos = this.eventosUpcoming;
          } else if (document.title == "MDHL Past Events") {
            this.eventos = this.eventosPast;
          }
          /*Categorias*/
          this.eventos.forEach((evento) => {
            if (!this.categorias.includes(evento.category)) {
              this.categorias.push(evento.category);
            }
          });
          this.backupEventos = this.eventos;
          /*Details */
          let id = new URLSearchParams(location.search).get("id");
          this.eventoDetail = this.eventos.find((evento) => evento._id == id);
          if (this.eventoDetail) {
            this.assistOrEst = this.eventoDetail.assistance
              ? this.eventoDetail.assistance
              : this.eventoDetail.estimate;
          }
        });
    },
    agendarEvento(evento) {
      if (!this.eventosAgendados.includes(evento)) {
        this.eventosAgendados.push(evento);
        localStorage.setItem(
          "agendados",
          JSON.stringify(this.eventosAgendados)
        );
      }
    },
    eliminarFavorito(eventoE) {
      this.eventosAgendados = this.eventosAgendados.filter(
        (evento) => evento != eventoE
      );
      localStorage.setItem("agendados", JSON.stringify(this.eventosAgendados));
    },
    eventsStatistics() {
      let eventosOrdenados = this.eventos
        .filter((evento) => evento.date < this.fechaActual)
        .sort((a, b) => {
          return (
            (parseInt(b.assistance) * 100) / parseInt(b.capacity) -
            (parseInt(a.assistance) * 100) / parseInt(a.capacity)
          );
        });
      this.statistics.eventoMayor.key = eventosOrdenados[0].name;
      this.statistics.eventoMenor.key =
        eventosOrdenados[eventosOrdenados.length - 1].name;
      this.statistics.mayorCapacidad.key = this.eventos.sort(
        (a, b) => b.capacity - a.capacity
      )[0].name;
    },
    estadisticasPorCategorias(eventos) {
      let categoriasFiltradas = this.categoriasStatistics(eventos);
      let revenues = [];
      let percentages = [];
      categoriasFiltradas.forEach((categoria) => {
        let filtradosCategoria = eventos.filter(
          (evento) => evento.category == categoria
        );
        revenues.push(
          filtradosCategoria
            .map(
              (evento) =>
                evento.price *
                (evento.assistance ? evento.assistance : evento.estimate)
            )
            .reduce((accu, ele) => accu + ele)
            .toString()
            .split(/(?=(?:...)*$)/)
            .join(".")
        );
        percentages.push(
          filtradosCategoria
            .map((evento) => this.eventComparator(evento))
            .reduce((accu, ele) => accu + ele) / filtradosCategoria.length
        );
      });
      return {
        categoriasFiltradas,
        revenues,
        percentages,
      };
    },
    categoriasStatistics(eventos) {
      let categorias = [];
      eventos.forEach((evento) => {
        if (!categorias.includes(evento.category)) {
          categorias.push(evento.category);
        }
      });
      return categorias;
    },
    eventComparator(evento) {
      return evento.assistance
        ? (evento.assistance / evento.capacity) * 100
        : (evento.estimate / evento.capacity) * 100;
    },
    cargarEstadisticas(statistics, contenedor) {
      let arrayCategorias = statistics.categoriasFiltradas;
      let arrayRevenues = statistics.revenues;
      let arrayPercentajes = statistics.percentages;
      arrayCategorias.forEach((categoria, i) => {
        contenedor.push({
          category: categoria,
          revenue: arrayRevenues[i],
          percentage: arrayPercentajes[i],
        });
      });
    },
  },
  computed: {
    superFiltro() {
      let filtro1 = this.backupEventos.filter((evento) =>
        evento.name.toLowerCase().includes(this.textoBuscar.toLowerCase())
      );
      let filtro2 = filtro1.filter((evento) =>
        this.eventosBuscados.includes(evento.category)
      );
      if (filtro2.length > 0) {
        this.eventos = filtro2;
      } else {
        this.eventos = filtro1;
      }
    },
  },
}).mount("#app");
