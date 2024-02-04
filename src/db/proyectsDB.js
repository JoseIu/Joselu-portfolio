export const PROYECTS = [
  {
    id: "1",
    img: "/proyects/reading-list.webp",
    title: "Reading book - Prueba técnica por @Midudev",
    tegnologies: ["Angular 17", "TypeScript", "RxJs", "HTML", "Sass"],
    description:
      "Prueba técnica desarrollada por @Midudev, en la que se pone a prueba los conocimientos de Angular, TypeScript, RxJs, HTML y Sass. En este proyecto se pone en práctica el uso de la librería RxJs para el manejo de los datos",
    features: [
      "Creación de Lista de Lectura: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.",
      "Filtrado de Libros por Género: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.",
      "Implementar una funcionalidad de búsqueda en la lista de libros disponibles.",
      "Filtro para filtrar los libros por número de páginas.",
      "Diseño responsive.",
      "Sincronización de Estado: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.",
      "Persistencia de Datos: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.",
      "Sincronización entre pestañas: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.",
      "Despliegue: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.",
    ],

    demo: "https://reading-list-angular.vercel.app/books",
    repo: "https://github.com/JoseIu/reading-list-angular",
  },
  {
    id: "2",
    img: "/proyects/pomodoro.webp",
    title: "PomoDoro con tareas",
    tegnologies: ["Angular 17", "TypeScript", "HTML", "Sass"],
    description:
      "PomoDoro con tareas es una aplicación que permite al usuario organizar su tiempo de trabajo y descanso. El usuario puede añadir tareas. La aplicación cuenta con un temporizador que avisa al usuario cuando el tiempo de trabajo o descanso ha terminado. Además, la aplicación cuenta con acciones sobre cada tareas como el de terminar la tarea, editar y eliminar.",
    demo: "https://pomodoro-rho-weld.vercel.app/",
    repo: "https://github.com/JoseIu/pomodoro",
  },
  {
    id: "3",
    img: "/proyects/al-andalus.webp",
    title: "Al-Andalus Doner Kebab",
    tegnologies: ["HTML", "CSS", "JS"],
    description:
      "Durante la ejecución del proyecto Al-Andalus Doner Kebab Demo, empleé HTML, JavaScript y Sass para desarrollar una página web con un enfoque 'Mobile First', asegurando así su adaptabilidad a distintos dispositivos. Para estructurar el código de manera eficiente y mantenible, implementé la metodología BEM. Uno de los objetivos clave fue la creación de un menú interactivo que abarcara todas las opciones de la carta, proporcionando a los usuarios una experiencia completa y accesible. Este proyecto representó un compromiso integral con el diseño responsivo y las prácticas de desarrollo que garantizan una interfaz de usuario efectiva y atractiva.",
    demo: "https://al-andalus-doner-kebab.netlify.app/",
    repo: "https://github.com/JoseIu/al-andalus-kebab.github.io",
  },
  {
    id: "4",
    img: "/proyects/mab-box2.webp",
    title: "Map-Box",
    tegnologies: ["Angular", "TypeScript", "HTML", "SCSS"],
    description:
      "Durante mi tiempo trabajando en el proyecto Map-box Demo con Angular 16, logré aplicar y poner en práctica de manera efectiva conceptos avanzados como standalone components, signals y la estrategia de componentización. Este proyecto se centró en la potenciación de la API de Map-box, donde mi objetivo era incorporar funcionalidades, tales como la implementación de características como la adición de marcadores, personalización de los mismos y la capacidad de desplazarlos por el mapa, manteniendo los datos persistentes.",
    demo: "https://mapbox-app-lemon.vercel.app/maps/markers",
    repo: "https://github.com/JoseIu/mapbox-app",
  },

  {
    id: "5",
    img: "/proyects/github-profile.webp",
    title: "Buscador perfil GitHub",
    tegnologies: ["Angular 16", "TypeScript", "HTML", "Sass"],
    description:
      "Applicacion que permite buscar perfiles de GitHub, utilizando la API de GitHub. En este proyecto se pone en práctica el uso HttpClient para el manejo de los datos y debouncer para la busqueda.",
    demo: "https://angular-github-profile-one.vercel.app/user-profile",
    repo: "https://github.com/JoseIu/angular-github-profile",
  },

  {
    id: "6",
    img: "/proyects/search-gifs.webp",
    title: "Buscador de gifs",
    tegnologies: ["Angular 16", "TypeScript", "HTML", "SCSS"],
    description:
      "En la creación de este proyecto, utilicé Angular 16, HTML, SASS y TypeScript, empleando específicamente Angular's HttpClient para consumir eficientemente la API de Giphy a través de peticiones HTTP. Destaco tambien la implementación de un historial de búsquedas, permitiendo a los usuarios repetir búsquedas anteriores con un clic. Aseguré la eficiencia del historial al evitar duplicación de nombres. Este proyecto resalta mi capacidad para desarrollar aplicaciones interactivas y mi habilidad en el uso de herramientas avanzadas como Angular's HttpClient para optimizar la comunicación con la API.",
    demo: "https://angular-search-gifs.vercel.app/",
    repo: "https://github.com/JoseIu/Angular-searchGifs",
  },

  {
    id: "7",
    img: "/proyects/rec-j.webp",
    title: "Recording web",
    tegnologies: ["Angular 17", "TypeScript", "HTML", "Sass"],
    description:
      "Pequeño proyecto que permite grabar audio y video, utilizando la API de MediaRecorder. En este proyecto se pone en práctica el uso de la API de MediaRecorder.",
    demo: "https://rec-j.vercel.app/",
    repo: "https://github.com/JoseIu/rec-j",
  },
  {
    id: "8",
    img: "/proyects/recetas.webp",
    title: "Buscador de recetas",
    tegnologies: ["HTML", "Sass", "JavaScript"],
    description:
      "Desarrollé una aplicación para buscar recetas que incorpora un modal para visualizar los ingredientes. Además, los usuarios tienen la capacidad de añadir recetas a la lista de favoritos, proporcionando una experiencia interactiva y funcional. Este proyecto destaca mi habilidad para trabajar con tecnologías web clave y crear aplicaciones prácticas y atractivas.",
    demo: "https://buscad0r-recetas-api.netlify.app/",
    repo: "https://github.com/JoseIu/buscador_recetas_API",
  },
  {
    id: "9",
    img: "/proyects/users-filter.webp",
    title: "Users Filter",
    tegnologies: ["Angular 17", "TypeScript", "HTML", "SCSS"],
    description:
      "Desarrollé un filtro de usuarios que permite la clasificación por activos o inactivos. Los usuarios pueden desactivar o activar el filtro, incluso con filtros específicos en funcionamiento, proporcionando una experiencia versátil y fácil de usar",
    demo: "https://mapbox-app-lemon.vercel.app/maps/markers",
    repo: "https://github.com/JoseIu/mapbox-app",
  },
];
