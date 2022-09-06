//VARIABLES, TIPOS DE DATOS, OPERADORES

// const colorPelo = "marron";
// let edad = 34;
// let estadoCivil = "soltero";
// const tieneMascota = true;
// // array
// let hobbies = ["futbol", "leer", "bicicleta"];

// let simon = {
//   altura: 1.78,
//   peso: 75,
//   vehiculo: {
//     bicicleta: "raleigh",
//     rodado: 26,
//     antiguedad: 10,
//   },
// };

// let admin;
// let name = "John";

// admin = name;
// console.log(admin);

// Crear una variable llamada miNombre y guardar en ella su primer nombre.
// Crear una variable llamada miApellido y guardar en ella su apellido.
// Crear una variable llamada miEdad y guardar en ella su edad.
// Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.
// Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.
// Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.
// Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.
// Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.

// let miNombre = "Simon";
// let miApellido = "Sueldo";
// let miEdad = 34;
// let miMascota = "Albahaca";
// let edadMascota = 2;
// console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);
// let nombreCompleto = miNombre + " " + miApellido;
// let textoPresentacion =
//   "Mi nombre es " +
//   nombreCompleto +
//   ", tengo " +
//   miEdad +
//   " años. Tengo una mascota llamada " +
//   miMascota +
//   " que tiene " +
//   edadMascota +
//   " años.";
// console.log(textoPresentacion);

// Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.

// let sumaEdades = miEdad + edadMascota;
// let restaEdades = miEdad - edadMascota;
// let productoEdades = miEdad * edadMascota;
// let divisionEdades = miEdad / edadMascota;

// Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.

// miNombre = prompt("ingrese su nombre");
// miApellido = prompt("ingrese su apellido");
// miEdad = prompt("ingrese su edad");
// miMascota = prompt("ingrese el nombre de su mascota");
// edadMascota = prompt("ingrese la edad de su mascota");
// console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);
// nombreCompleto = miNombre + " " + miApellido;
// textoPresentacion =
//   "Mi nombre es " +
//   nombreCompleto +
//   ", tengo " +
//   miEdad +
//   "años. Tengo una mascota llamada " +
//   miMascota +
//   " que tiene " +
//   edadMascota +
//   " años.";
// console.log(textoPresentacion);

// Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.

// let alumno = {
//   nombre: "simon",
//   apellido: "sueldo",
//   grado: "1er grado",
//   promedio: 8,
//   matricula: 2535652,
// };
// console.table(alumno);
// console.log(
//   alumno.nombre,
//   alumno.apellido,
//   alumno.grado,
//   alumno.promedio,
//   alumno.matricula
// );

// Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.

// let mascota = {
//   nombre: "albahaca",
//   edad: 2,
//   raza: "delmon",
//   peso: 25,
//   molesta: true,
// };

// console.table(mascota);
// console.log(
//   mascota.nombre,
//   mascota.edad,
//   mascota.raza,
//   mascota.peso,
//   mascota.molesta
// );

// Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.

// let frutas = ["manzana", "banana", "pera", "naranja", "mandarina"];
// console.table(frutas);
// console.log(frutas[0], frutas[1], frutas[2], frutas[3], frutas[4]);

// Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.

// let numeros = [1, 2, 3, 4, 5];
// console.table(numeros);
// console.log(numeros[1], numeros[2], numeros[0], numeros[4], numeros[3]);

// Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.

// let familia = [
//   (papa = {
//     nombre: "hugo",
//     edad: 72,
//   }),
//   (mama = {
//     nombre: "beatriz",
//     edad: 70,
//   }),
//   (hijoMayor = {
//     nombre: "simon",
//     edad: 34,
//   }),
//   (hijoMenor = {
//     nombre: "vicente",
//     edad: 30,
//   }),
//   (mascota = {
//     nombre: "albahaca",
//     edad: 2,
//   }),
// ];
// console.table(familia);
// console.log(familia[0], familia[1], familia[2], familia[3], familia[4]);

// Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.

// let textoAleatorio = frutas[1] + " " + numeros[3] + " " + familia[4].nombre;
// console.log(textoAleatorio);

// Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
// Mi edad es igual a la de mi compañero: false
// Mi edad es mayor a la de mi compañero: true
// Mi edad es menor a la de mi compañero: false

// let miEdad = prompt("ingresa tu edad");
// let edadCompañero = prompt("ingresa la edad de tu compañero");
// let edadesIguales = miEdad === edadCompañero;
// let soyMayor = miEdad > edadCompañero;
// let soyMenor = miEdad < edadCompañero;
// console.log("Mi edad es igual a la de mi compañero : " + edadesIguales);
// console.log("Mi edad es mayor que la de mi compañero: " + soyMayor);
// console.log("Mi edad es menor que la de mi compañero: " + soyMenor);

// Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable.

// let soyMayorDeEdad = miEdad >= 18;
// console.log(soyMayorDeEdad);

// Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante.

// let edad = prompt("ingrese su edad");
// let altura = prompt("ingrese su altura en centimetros");
// let puedeSubir = edad > 6 && altura > 120;
// console.log("puede subir a la atracción " + puedeSubir);

// Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable llamada puedePasar guardar el resultado de la operación resultante de si la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable.

// let pase = prompt("introduzca el tipo de pase que tiene ; VIP/NORMAL/LIMITADO");
// let saldo = prompt("ingrese su saldo actual");
// let puedePasar = pase === "VIP" || saldo > 1000;
// console.log("La persona puede pasar : " + puedePasar);
/* */

// CONDICIONALES

// let num1 = 13;
// let num2 = 12;
// let num3 = 11;
// if (num1 > num2) {
//   console.log(num1 + " es mayor a " + num2);
// } else {
//   console.log("el segundo numero es mayor");
// }

// if (num1 == num2) {
//   console.log("son iguales");
// } else {
//   console.log("son distintos");
// }

// if (num1 == num2) {
//   console.log("son iguales");
// } else if (num1 > num2) {
//   console.log(num1 + " es mayor");
// } else {
//   console.log(num2 + " es mayor");
// }

// if (num1 < num2 && num1 < num3) {
//   console.log(num1);
// } else if (num2 < num1 && num2 < num3) {
//   console.log(num2);
// } else {
//   console.log(num3);
// }

// let persona1 = {
//   nombre: "simon",
//   edad: 28,
//   altura: 1.76,
// };

// let persona2 = {
//   nombre: "vicente",
//   edad: 30,
//   altura: 1.77,
// };

// if (persona1.edad == persona2.edad) {
//   console.log("tienen la misma edad");
// } else if (persona1.edad > persona2.edad) {
//   console.log(persona1.nombre + " es mayor.");
// } else {
//   console.log(persona2.nombre + " es mayor");
// }

// if (persona1.altura == persona2.altura) {
//   console.log("tienen la misma altura");
// } else if (persona1.altura > persona2.altura) {
//   console.log(persona1.nombre + " es mas alto.");
// } else {
//   console.log(persona2.nombre + " es mas alto");
// }

// let nombre;

// let persona1 = {
//   nombre: prompt("ingrese su nombre"),
//   edad: parseInt(prompt("ingrese su edad")),
//   altura: parseInt(prompt("ingrese su altura")),
//   vision: prompt("ingrese su nivel de vision"),
// };

// if (persona1.edad > 18 && persona1.altura > 150 && persona1.vision >= 8) {
//   console.log("puede conducir");
// } else {
//   console.log("no esta habilitado a conducir");
// }

// let nombre = prompt("ingrese su nombre");
// let pase = prompt("Ingrese el tipo de pase : vip/normal");
// let entrada = prompt("posee entrada ? s/n");

// if (nombre == "simon" || pase == "vip") {
//   alert("Bienvenido " + nombre);
// } else if (entrada == "s" && confirm("desea utilizarla?")) {
//   alert("Bienvenido " + nombre);
// } else if (
//   confirm("desea comprar entrada?") &&
//   confirm("el costo es de $1000, desea abonarlo?")
// ) {
//   alert("Bienvenido " + nombre);
// } else {
//   alert("Lo sentimos, vuelva pronto");
// }

// let numeroIncognita = 5;
// let numeroIngresado = prompt("1er intento: ingrese un numero ");

// if (numeroIncognita == numeroIngresado) {
//   alert("Ganaste, haz adivinado el numero.");
// } else if (numeroIncognita > numeroIngresado) {
//   alert("el numero incognita es mayor al ingresado, intentelo nuevamente");
//   numeroIngresado = prompt("2do intento: ingrese un numero");
// } else if (numeroIncognita < numeroIngresado) {
//   alert("el numero incognita es menor al ingresado, intentelo nuevamente");
//   numeroIngresado = prompt("2do intento: ingrese un numero");
// }
// if (numeroIncognita == numeroIngresado) {
//   alert("Ganaste, haz adivinado el numero.");
// } else if (numeroIncognita > numeroIngresado) {
//   alert("el numero incognita es mayor al ingresado, intentelo nuevamente");
//   numeroIngresado = prompt("3er intento: ingrese un numero");
// } else if (numeroIncognita < numeroIngresado) {
//   alert("el numero incognita es menor al ingresado, intentelo nuevamente");
//   numeroIngresado = prompt("3er intento: ingrese un numero");
// }
// if (numeroIncognita == numeroIngresado) {
//   alert("Ganaste, haz adivinado el numero.");
// } else {
//   alert("lo sentimos, no hay mas intentos.");
// }

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad > 0 && edad <= 12) {
//   alert("Eres un infante");
// } else if (edad >= 13 && edad <= 18) {
//   alert("Eres un adolescente");
// } else if (edad >= 19 && edad <= 45) {
//   alert("Eres un adulto joven");
// } else if (edad > 45 && edad <= 100) {
//   alert("Eres un anciano");
// } else {
//   alert("En realidad tienes esa edad?");
// }

// alert("Bienvenido a nuestro piedra papel o tijera");
// let jugador1 = prompt("Jugador 1 elija una opcion : PIEDRA / PAPEL / TIJERAS");
// let jugador2 = prompt("Jugador 2 elija una opcion : PIEDRA / PAPEL / TIJERAS");

// if (
//   (jugador1 != "PIEDRA" && jugador1 != "PAPEL" && jugador1 != "TIJERAS") ||
//   (jugador2 != "PIEDRA" && jugador2 != "PAPEL" && jugador2 != "TIJERAS")
// ) {
//   alert("Uno de los jugadores hizo trampa");
// } else if (
//   (jugador1 == "PIEDRA" && jugador2 == "TIJERAS") ||
//   (jugador1 == "PAPEL" && jugador2 == "PIEDRA") ||
//   (jugador1 == "TIJERAS" && jugador2 == "PAPEL")
// ) {
//   alert("Gano el jugador1!");
// } else if (
//   (jugador2 == "PIEDRA" && jugador1 == "TIJERAS") ||
//   (jugador2 == "PAPEL" && jugador1 == "PIEDRA") ||
//   (jugador2 == "TIJERAS" && jugador1 == "PAPEL")
// ) {
//   alert("Gano el jugador2!");
// } else {
//   alert("Empate!");
// }

// switch (prompt("Ingrese un color , eg: Blanco")) {
//   case "Blanco":
//   case "Negro":
//     alert("Falta de color");
//     break;
//   case "Verde":
//     alert("El color de la naturaleza");
//     break;
//   case "Azul":
//     alert("El color del agua");
//     break;
//   case "Amarillo":
//     alert("El color del sol");
//     break;
//   case "Rojo":
//     alert("El color del fuego");
//     break;
//   case "Marron":
//     alert("El color de la tierra");
//     break;
//   default:
//     alert("Excelente eleccion, no lo teniamos pensado");
//     break;
// }

// let num1 = parseInt(prompt("Ingrese un numero"));
// let num2 = parseInt(prompt("Ingrese otro numero"));
// let operacion = prompt(
//   "ingrese una operacion , eg: suma / resta / division / multiplicacion"
// );

// if (num2 == 0 && operacion == "division") {
//   alert("Error , no se puede dividir por 0");
// } else {
//   switch (operacion) {
//     case "suma":
//       alert(num1 + num2);
//       break;
//     case "resta":
//       alert(num1 - num2);
//       break;
//     case "multiplicacion":
//       alert(num1 * num2);
//       break;
//     case "division":
//       alert(num1 / num2);
//       break;
//     default:
//       alert("operacion incorrecta");
//       break;
//   }
// }

// let nombre = prompt("ingrese su nombre");
// let apellido = prompt("ingrese su apellido");
// let fechaNacimiento = prompt("ingrese su fecha de nacimiento");
// let dni = prompt("ingrese su dni");

// let correcto = confirm(
//   "Click en aceptar si es correcto \n" +
//     "nombre: " +
//     nombre +
//     "\napellido: " +
//     apellido +
//     "\nfecha de nacimiento: " +
//     fechaNacimiento +
//     "\ndni: " +
//     dni
// );

// if (correcto) {
//   let dniPersona = {
//     nombre,
//     apellido,
//     fechaNacimiento,
//     dni,
//   };
//   console.table(dniPersona);
//   console.log("Registro exitoso");
// } else {
//   console.log("Vuelva a intentarlo en 1 mes");
// }
