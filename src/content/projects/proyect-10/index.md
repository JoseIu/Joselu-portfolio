---
title: 'Prueba técnica por @Midudev'
image: '../images/project/reading-list.webp'
summary: 'Prueba técnica propuesta por Midudev'
draft: false
isInConstruction: false
isFeatured: false
tags:
  - HTML
  - SASS
  - Angular
  - TypeScript
  - SASS
  - JavaScript
  - RxJs

demoUrl: https://reading-list-angular.vercel.app/books
repoUrl: https://github.com/JoseIu/reading-list-angular
---

Prueba técnica propuesta por @Midudev, en la que se pone a prueba los conocimientos de Angular, TypeScript, RxJs, HTML y Sass. En este proyecto se pone en práctica el uso de la librería RxJs para el manejo de los datos

- Creación de Lista de Lectura: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.
- Filtrado de Libros por Género: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.
- Implementar una funcionalidad de búsqueda en la lista de libros disponibles.
- Filtro para filtrar los libros por número de páginas.',
- Diseño responsive.
- Sincronización de Estado: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.',
- Persistencia de Datos: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.
- Sincronización entre pestañas: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.
- Despliegue: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.
