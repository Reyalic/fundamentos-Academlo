/******************************/
/* Ejercicios con variables: */
/*****************************/
/*
Ejercicio 1:
1. Declarar dos variables: nombre y usuario sin asignarle ningún valor.*/
var nombre;
var usuario;

/*2. Asignar tu nombre a la variable nombre.*/
nombre = "Martín";
console.log(nombre);
/*3. Copia el valor de nombre a la variable usuario.*/
usuario = nombre;
console.log(usuario);
/*4. sin usar la consola responde ¿Qué valor tiene la variable usuario?*/
/* Martín
Ejercicio 2:
¿Cómo nombrarías a dicha variable? *en ingles
1. Crea una variable con el nombre de "nuestro planeta".*/
let ourPlanet = "Earth";
console.log(ourPlanet);
/* 2. Crea una variable para almacenar el nombre del "usuario actual" de un sitio web.*/
let currentUserName;
/*
Ejercicio 3:
¿Qué valor tiene la variable userName?
1. Crea la variable userName usando var.*/
var userName;
/*2. Asigna el nombre de una persona a la variable userName.*/
userName = "John";
console.log(userName);
/*3. Crea otra variable con el mismo nombre de la variable anterior.*/
var userName;
/*4. Asigna tu nombre a esta variable.
*/
userName = "Martín";
console.log(userName);
/*
Ejercicio 4:
¿Cuál es la diferencia entre var, let y const?
Var: se puede declarar con un valor y reasignar a otro después, y se puede declarar
otra variable con el mismo nombre, se considera mala práctica
Let: se puede reasignar su valor pero no se puede declarar una nueva variable con 
el mismo nombre.
Const: su valor es constante, no se puede reasignar.
*/