import { v4 as uuidv4 } from 'uuid';
export const PROYECTS = [
  {
    id: uuidv4(),
    img: '/react/shop_jl.webp',
    title: 'SHOP JL',
    tegnologies: ['NEXT.JS', 'TypeScript', 'Tailwind', 'Docker', 'PostgreSQL', 'Zustand'],
    description:
      'Este proyecto de eCommerce está construido con Next.js, utilizando React y TypeScript para crear una interfaz dinámica, rápida y con tipado robusto. El diseño de la plataforma es moderno y completamente responsivo, gracias a Tailwind CSS, lo que garantiza una experiencia de usuario fluida en cualquier dispositivo. Para la infraestructura, se emplea Docker para gestionar contenedores y asegurar una implementación eficiente y consistente, mientras que PostgreSQL actúa como base de datos, proporcionando una solución confiable y escalable para manejar grandes volúmenes de datos. Esta combinación de tecnologías crea una plataforma de compra y venta en línea altamente optimizada y lista para escalar.',
    descriptionList: [
      'Construido con Next.js, React y TypeScript.',
      'Diseño moderno y responsive utilizando Tailwind CSS.',
      'Implementación de Docker para la gestión de contenedores y PostgreSQL como base de datos.'
    ],
    isInConstruction: true,

    demo: 'https://github.com/JoseIu/joselu-shop',
    repo: 'https://github.com/JoseIu/joselu-shop'
  },
  {
    id: uuidv4(),
    img: '/react/miranda.webp',
    title: 'Hotel Miranda',
    tegnologies: ['HTML', 'CSS', 'SASS', 'JavaScript'],
    description:
      'Para el proyecto Hotel Miranda, me sumergí en el desarrollo de una página web para un hotel, utilizando HTML, CSS y JavaScript. Implementé un diseño responsivo y atractivo, asegurando que la página fuera accesible en distintos dispositivos. Además,utilize SASS y la metodología BEM para estructurar el código de manera eficiente y mantenible. Este proyecto me permitió demostrar mi habilidad para crear interfaces de usuario efectivas y atractivas.',
    descriptionList: [
      'Desarrollado con HTML, CSS, SASS y JavaScript.',
      'Diseño responsivo y accesible en diferentes dispositivos.',
      'Uso de metodología BEM para un código CSS eficiente y mantenible.'
    ],

    demo: 'https://hotel-miranda-nu.vercel.app/',
    repo: 'https://github.com/JoseIu/hotel-miranda'
  },
  {
    id: uuidv4(),
    img: '/react/dasboard_miranda.webp',
    title: 'Dashboard Hotel Miranda',
    tegnologies: ['React', 'TypeScript', 'Redux', 'Styled Modules'],
    description:
      'Proyecto de Dashboard para el Hotel Miranda. En este proyecto se pone en práctica el uso de React, TypeScript, Redux y Styled Modules. El Dashboard esta conectado a la API del Hotel Miranda, permitiendo la gestión de los datos de los usuarios y las habitaciones del hotel.',

    descriptionList: [
      'Desarrollado con React , TypeScript y Redux.',
      'Uso de Styled Modules para un diseño modular.',
      'Conexión a la API del Hotel Miranda para gestión de datos.'
    ],
    demo: 'https://hotel-miranda-dash-board.vercel.app/',
    repo: 'https://github.com/JoseIu/hotel-miranda-dashBoard'
  },
  {
    id: uuidv4(),
    img: '/react/dasboard_images.webp',
    title: 'Dashboard de imágenes',
    tegnologies: ['React', 'TypeScript', 'SASS', 'Redux'],
    description:
      'Aplicacion que nos permite realizar una busqueda de imagenes, utilizando la API de Unsplash. En este proyecto se pone en práctica el uso de React, TypeScript, Redux y SASS. Se implementa el patron CRUD para la gestión de las imagenes.',
    descriptionList: [
      'Desarrollado con React, TypeScript y SASS.',
      'Uso de la API de Unsplash y gestión de imágenes con CRUD.',
      'Implementación de Redux para manejo de estado en la aplicación.'
    ],

    demo: 'https://dashboard-images.vercel.app/search',
    repo: 'https://github.com/JoseIu/dashboard-images'
  },
  {
    id: uuidv4(),
    img: '/react/miranda_api.webp',
    title: 'Hotel Miranda API',
    tegnologies: ['Node.JS', 'Express', 'TypeScript', 'MongoDB', 'JWT'],
    description:
      'Proyecto de API RESTful para el Hotel Miranda. En este proyecto se pone en práctica el uso de Node.js, Express, TypeScript, MongoDB y JWT. La API gestiona la utenticación gracias a JWT y realizar operaciones CRUD sobre los datos de los usuarios y las habitaciones del hotel.',
    descriptionList: [
      'Desarrollado con Node.js, Express y TypeScript. API RESTful.',
      'Gestión de autenticación con JWT y operaciones CRUD.',
      'Conexión a MongoDB para datos de usuarios y habitaciones.'
    ],

    demo: 'https://github.com/JoseIu/dashboard_api',
    repo: 'https://github.com/JoseIu/dashboard_api'
  },
  {
    id: uuidv4(),
    img: '/react/oxygen-shop.webp',
    title: 'Oxygen Shop',
    tegnologies: ['HTML', 'CSS', 'SASS', 'JavaScript'],
    description:
      'Página web para Oxygen Shop, una tienda de ropa. En este proyecto, utilicé HTML, CSS y JavaScript para desarrollar una interfaz de usuario atractiva y funcional. Implementé un diseño responsivo y atractivo, asegurando que la página fuera accesible en distintos dispositivos. Además, utilicé SASS y la metodología BEM para estructurar el código de manera eficiente y mantenible. Este proyecto me permitió demostrar mi habilidad para crear interfaces de usuario efectivas y atractivas.',
    descriptionList: [
      'Desarrollado con HTML, CSS, SASS y JavaScript.',
      'Diseño responsivo y accesible en diferentes dispositivos.',
      'Uso de metodología BEM para un código limpio y mantenible.'
    ],
    demo: 'https://joseiu.github.io/Oxygen-shop/',
    repo: 'https://github.com/JoseIu/Oxygen-shop'
  },
  {
    id: uuidv4(),
    img: '/react/al-andalus.webp',
    title: 'Al-Andalus Doner Kebab',
    tegnologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      "Durante la ejecución del proyecto Al-Andalus Doner Kebab Demo, empleé HTML, JavaScript y Sass para desarrollar una página web con un enfoque 'Mobile First', asegurando así su adaptabilidad a distintos dispositivos. Para estructurar el código de manera eficiente y mantenible, implementé la metodología BEM. Uno de los objetivos clave fue la creación de un menú interactivo que abarcara todas las opciones de la carta, proporcionando a los usuarios una experiencia completa y accesible. Este proyecto representó un compromiso integral con el diseño responsivo y las prácticas de desarrollo que garantizan una interfaz de usuario efectiva y atractiva.",

    descriptionList: [
      'Desarrollado con HTML, CSS y JavaScript.',
      'Enfoque "Mobile First" y menú interactivo completo.',
      'Uso de metodología BEM para un código eficiente y mantenible.'
    ],
    demo: 'https://al-andalus-doner-kebab.netlify.app/',
    repo: 'https://github.com/JoseIu/al-andalus-kebab.github.io'
  },
  {
    id: uuidv4(),
    img: '/react/jabiertzo-web.webp',
    title: 'Landing Page - Jabiertzo',
    tegnologies: ['HTML', 'SASS', 'TypeScript', 'Astro'],
    description:
      'Esta es una landing page diseñada para el canal de YouTube Jabiertzo, desarrollada con Astro, TypeScript y SASS. La página es completamente responsiva, garantizando una experiencia de usuario óptima en cualquier dispositivo. Los vídeos de YouTube se cargan de manera eficiente, permitiendo que solo se reproduzcan al hacer clic, lo que mejora el rendimiento de la página. Además, se incluye un enlace destacado al canal de Twitch, facilitando a los usuarios la conexión con todo el contenido del creador.',

    descriptionList: [
      'Desarrollada con Astro, TypeScript y SASS.',
      'Interfaz totalmente responsiva, optimizada para todos los dispositivos y tamaños de pantalla.',
      'Carga de vídeos de YouTube bajo demanda, mejorando la velocidad de carga.'
    ],
    demo: 'https://jabiertzo-web.vercel.app/',
    repo: 'https://github.com/JoseIu/jabiertzo-web'
  },
  {
    id: uuidv4(),
    img: '/proyects/reading-list.webp',
    title: 'Prueba técnica por @Midudev',
    tegnologies: ['Angular', 'TypeScript', 'RxJs', 'HTML', 'SASS'],
    description:
      'Prueba técnica propuesta por @Midudev, en la que se pone a prueba los conocimientos de Angular, TypeScript, RxJs, HTML y Sass. En este proyecto se pone en práctica el uso de la librería RxJs para el manejo de los datos',

    descriptionList: [
      'Lista de libros y filtros, desarrollado con Angular y RxJs.',
      'Incluye filtros y Sincronización de estado',
      'Diseño responsive con persistencia de datos'
    ],
    features: [
      'Creación de Lista de Lectura: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.',
      'Filtrado de Libros por Género: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.',
      'Implementar una funcionalidad de búsqueda en la lista de libros disponibles.',
      'Filtro para filtrar los libros por número de páginas.',
      'Diseño responsive.',
      'Sincronización de Estado: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.',
      'Persistencia de Datos: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.',
      'Sincronización entre pestañas: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.',
      'Despliegue: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.'
    ],

    demo: 'https://reading-list-angular.vercel.app/books',
    repo: 'https://github.com/JoseIu/reading-list-angular'
  },
  {
    id: uuidv4(),
    img: '/proyects/chat-openAi.webp',
    title: 'Asistente virtual con OpenAi ',
    tegnologies: ['Angular', 'TypeScript', 'HTML', 'Tailwind ', 'NestJS'],
    description:
      '¡Este proyecto fue toda una aventura! Aprendí un montón mientras desarrollaba un asistente virtual para ayudar a la gente a encontrar información sobre cómo comprar productos Samsung en México. En el frontend, me sumergí en Tailwind CSS, creando una interfaz de usuario que es tanto bonita como funcional. Por otro lado, en el backend, utilicé Nest.js y Multer para manejar archivos y gestionar la lógica de la aplicación. ¡Fue genial ver cómo todo se unía para ofrecer respuestas útiles a las consultas de los usuarios!',

    descriptionList: [
      'Asistente virtual desarrollado con Angular y Tailwind.',
      'Manejo de archivos. Interfaz funcional y atractiva.',
      'Api Backend con NestJS.'
    ],
    demo: 'https://angular-gpt-gilt.vercel.app/orthography',
    repo: ' https://github.com/JoseIu/angular-gpt'
  },
  {
    id: uuidv4(),
    img: '/proyects/space.webp',
    title: 'Space tourism multi-page ',
    tegnologies: ['Angular', 'TypeScript', 'HTML', 'SASS '],
    description: 'Un proyecto de FRONTENDMENTOR en colaboraciçon between us, Scrimba, and Kevin Powell.',
    descriptionList: [
      'Desarrollado con Angular, TypeScript y SASS',
      'Desafío de Frontendmentor.',
      'Colaboración con Scrimba y Kevin Powell. Proyecto frontend completo.'
    ],
    demo: 'https://space-turism-web-sigma.vercel.app/home',
    repo: 'https://github.com/JoseIu/space-turism-web'
  },

  {
    id: uuidv4(),
    img: '/proyects/pomodoro.webp',
    title: 'Pomodoro',
    tegnologies: ['Angular', 'TypeScript', 'HTML', 'SASS'],
    description:
      'PomoDoro con tareas es una aplicación que permite al usuario organizar su tiempo de trabajo y descanso. El usuario puede añadir tareas. La aplicación cuenta con un temporizador que avisa al usuario cuando el tiempo de trabajo o descanso ha terminado. Además, la aplicación cuenta con acciones sobre cada tareas como el de terminar la tarea, editar y eliminar.',
    descriptionList: [
      'Desarrollado con Angular y TypeScript.',
      'Incluye temporizador Pomodoro para trabajo y descanso.',
      'Acciones sobre tareas: añadir, editar, eliminar y marcar como completadas.'
    ],
    demo: 'https://pomodoro-rho-weld.vercel.app/',
    repo: 'https://github.com/JoseIu/pomodoro'
  },
  {
    id: uuidv4(),
    img: '/proyects/map-box.webp',
    title: 'Map-Box',
    tegnologies: ['Angular', 'TypeScript', 'HTML', 'SASS'],
    description:
      'Durante mi tiempo trabajando en el proyecto Map-box Demo con Angular 16, logré aplicar y poner en práctica de manera efectiva conceptos avanzados como standalone components, signals y la estrategia de componentización. Este proyecto se centró en la potenciación de la API de Map-box, donde mi objetivo era incorporar funcionalidades, tales como la implementación de características como la adición de marcadores, personalización de los mismos y la capacidad de desplazarlos por el mapa, manteniendo los datos persistentes.',
    descriptionList: [
      'Desarrollado con Angular y TypeScript.',
      'Implementación de marcadores en el mapa con funcionalidad de desplazamiento.',
      'Uso de standalone components, signals y persistencia de datos.'
    ],

    demo: 'https://mapbox-app-lemon.vercel.app/maps/markers',
    repo: 'https://github.com/JoseIu/mapbox-app'
  },
  {
    id: uuidv4(),
    img: '/proyects/github-profile.webp',
    title: 'Buscador perfil GitHub',
    tegnologies: ['Angular', 'TypeScript', 'HTML', 'SASS'],
    description:
      'Applicacion que permite buscar perfiles de GitHub, utilizando la API de GitHub. En este proyecto se pone en práctica el uso HttpClient para el manejo de los datos y debouncer para la busqueda.',
    descriptionList: [
      'Desarrollado con Angular y TypeScript.',
      'Uso de la API de GitHub y HttpClient para manejo de datos.',
      'Funcionalidad de búsqueda con debouncer para mejorar la experiencia.'
    ],

    demo: 'https://angular-github-profile-one.vercel.app/user-profile',
    repo: 'https://github.com/JoseIu/angular-github-profile'
  },
  {
    id: uuidv4(),
    img: '/proyects/recetas.webp',
    title: 'Buscador de recetas',
    tegnologies: ['HTML', 'SASS', 'JavaScript'],
    description:
      'Desarrollé una aplicación para buscar recetas que incorpora un modal para visualizar los ingredientes. Además, los usuarios tienen la capacidad de añadir recetas a la lista de favoritos, proporcionando una experiencia interactiva y funcional. Este proyecto destaca mi habilidad para trabajar con tecnologías web clave y crear aplicaciones prácticas y atractivas.',
    descriptionList: [
      'Desarrollado con HTML, Sass y JavaScript.',
      'Funcionalidad de favoritos y visualización de ingredientes en modal.',
      'Aplicación interactiva y práctica con tecnologías web clave.'
    ],

    demo: 'https://buscad0r-recetas-api.netlify.app/',
    repo: 'https://github.com/JoseIu/buscador_recetas_API'
  }
  // {
  //   id: uuidv4(),
  //   img: '/proyects/search-gifs.webp',
  //   title: 'Buscador de gifs',
  //   tegnologies: ['Angular', 'TypeScript', 'HTML', 'SASS'],
  //   description:
  //     "En la creación de este proyecto, utilicé Angular 16, HTML, SASS y TypeScript, empleando específicamente Angular's HttpClient para consumir eficientemente la API de Giphy a través de peticiones HTTP. Destaco tambien la implementación de un historial de búsquedas, permitiendo a los usuarios repetir búsquedas anteriores con un clic. Aseguré la eficiencia del historial al evitar duplicación de nombres. Este proyecto resalta mi capacidad para desarrollar aplicaciones interactivas y mi habilidad en el uso de herramientas avanzadas como Angular's HttpClient para optimizar la comunicación con la API.",

  //   descriptionList: [
  //     'Desarrollado con Angular, TypeScript y SCSS.',
  //     'Historial de búsquedas implementado con control de duplicados.',
  //     'Uso de HttpClient para optimizar la comunicación con la API.'
  //   ],

  //   demo: 'https://angular-search-gifs.vercel.app/',
  //   repo: 'https://github.com/JoseIu/Angular-searchGifs'
  // },
  // {
  //   id: uuidv4(),
  //   img: '/proyects/chat-openAi-back.webp',
  //   title: 'Asistente virtual API',
  //   tegnologies: ['NestJS', 'OpenAi', 'Multer'],
  //   description:
  //     '¡Este proyecto fue toda una aventura! Aprendí un montón mientras desarrollaba un asistente virtual para ayudar a la gente a encontrar información sobre cómo comprar productos Samsung en México. En el frontend, me sumergí en Tailwind CSS, creando una interfaz de usuario que es tanto bonita como funcional. Por otro lado, en el backend, utilicé Nest.js y Multer para manejar archivos y gestionar la lógica de la aplicación. ¡Fue genial ver cómo todo se unía para ofrecer respuestas útiles a las consultas de los usuarios!',
  //   descriptionList: [
  //     'Desarrollado con NestJS y OpenAI.',
  //     'Manejo de archivos con Multer.',
  //     'Asistente virtual con OpenAI. Lógica y archivos gestionados en backend.'
  //   ],
  //   demo: 'https://angular-gpt-gilt.vercel.app/orthography',
  //   repo: 'https://github.com/JoseIu/nest-gpt'
  // },
];
