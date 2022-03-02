## Cómo Agregar un nuevo Recurso?

Para contribuir se deberán seguir los siguiente pasos:

1. Forkea este repositorio
2. Agrega la imagen de la portada dentro del directorio `/public`, dentro de la categoría correspondiente (Puedes crearla si no existe). El nombre de la imagen serán las iniciales del titulo del libro, seguido por las iniciales de los autores. Ej. *Introducción a la Programación* de *Mario Chan* -> `ialp-mc.png`
3. Agrega tu recurso al archivo `books.ts`, dentro de la constante `BOOKS`, agrega al final un objeto de la siguiente forma:

> Tratar de evitar el uso de acentos

```js
const BOOKS = [
{
   // Otros Libros
},
{
   title: "Título del Libro",
   author: "Autores del Recurso",
   url: "Hipervínculo al Recurso (preferentemente el archivo PDF)",
   cover: "/categoria/nombre-del-archivo.png",
   tags: ["Arreglo", "de", "Tags"],
},
] 

export default BOOKS;
```
4. Abre un Pull Request (PR) al repositorio original