import { data } from "./fakeData.js";
console.log(data);

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3];

// let frutas = ["kiwi", "anana", "melon", "manzana"];

// function mostrarElementos(arrayElementos) {
//   for (elemento of arrayElementos) {
//     console.log(elemento);
//   }
// }

// const mostrarElementos2 = function (arrayElementos) {
//   for (elemento of arrayElementos) {
//     console.log(elemento);
//   }
// };

// const mostrarElementos3 = (arrayElementos) => {
//   for (elemento of arrayElementos) {
//     console.log(elemento);
//   }
// };

// const mostrarElementos4 = (array) => {
//   return array.join(" ");
// };

// const mostrarElementos5 = (array) => {
//   return array.join(" ");
// };

// const mostrarElementos6 = (array) => array.join(" ");

// /* frutas.forEach( fruta => console.log(fruta))

// data.forEach(persona => console.table(persona)) */

// let numerosPorDos = numeros.map((numero) => numero * 2);

// let nombres = data.map((persona) => {
//   return persona.name;
// });

// let numeros2 = data.map((persona) => persona.numberrange);

// let miniData = data.map(
//   (persona) =>
//     (miniPersona = {
//       name: persona.name,
//       phone: persona.phone,
//       email: persona.email,
//     })
// );

// let numerosMayoresACinco = numeros.filter((numero) => numero > 5);

// let numerosPares = numeros.filter((numero) => numero % 2 == 0);

// let personasMexico = data
//   .filter((personaF) => personaF.country == "Mexico")
//   .map(
//     (personaM) => (miniPersona = { name: personaM.name, phone: personaM.phone })
//   );

// Escribir una funcion que reciba un texto y devuelva un array con los elementos que contengan esa cadena de caracteres en el nombre, y otra que devuelva lo mismo pero que tambien se fije en el pais.

let texto = prompt("ingrese el texto a filtrar").toUpperCase();

function filtroNombre(texto) {
  let usuario = {};
  return data
    .filter((ele) => ele.name.toUpperCase().includes(texto))
    .map(
      (ele) =>
        (usuario = { nombre: ele.name, pais: ele.country, email: ele.email })
    );
}
// console.table(filtroNombre(texto));

function filtroNombrePais(texto) {
  let usuario = {};
  return data
    .filter((ele) => {
      return (
        ele.name.toUpperCase().includes(texto) &&
        ele.country.toUpperCase().includes(texto)
      );
    })
    .map(
      (ele) =>
        (usuario = {
          nombre: ele.name,
          pais: ele.country,
          email: ele.email,
        })
    );
}

console.table(filtroNombrePais(texto));
