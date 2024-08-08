alert('Hola desde un alert');

let nombre = 'Celeste'
const pi = 3.14;
// Arrays colección
/*-------------------DATOS--------------------------------------------*/
//Tipos de datos
//No definido
let noDefinido;
//numero
let cantidad = 50;
//cadena de texto o string 
let bebida = 'agua';
//booleanos
let activo = true;

/* -------------------- OBJETOS -------------------------------------*/
//Personas: nombre, apellido, edad ...
let persona = {nombre : 'Celeste', apellido : 'Nicolás', edad : 23}
console.log(persona);
//arrays 
let personas = [
    {nombre : 'Mar', apellido : 'Flores', edad : 28},
    {nombre : 'Angel', apellido : 'Martinez', edad : 26},
]
console.log(personas);
console.log(personas[2]);
    
/* --------------------- OPERADORES ---------------------------------*/
// Operadores aritmeticos
let datoA = 10;
let datoB = 5;
// suma
let suma = datoA + datoB;
// resta
let resta = datoA - datoB;
// multiplicación 
let multip = datoA * datoB;
// división
let div = datoA / datoB;
// Modulo o residuo
let residuo = datoA % datoB;
// incremento
let incremento = datoA;
incremento++;
// decremento 
let decremento = datoA;
decremento --;
// *******************************
// operadores relacionales
// mayor que >
let mayorQue = datoA > datoB;
// menor que <
let menorQue = datoB < datoB;
// mayor o igual >=
let menorIgual = datoB <= datoB;
// igual que == 
let igual = datoA == datoB;
// diferente de !=
let diferenteDe = datoA != datoB;
// *********************************
// Operadores lógicos
// y &&
let and = (datoA < 10 && datoB > 10);
// or ||
let or = (datoA > 10 || datoB > 10);
// not !
let not= !(datoA < 10);
// ////////////////////////////////////
// Operadores de asignacion
// Asignación simple =
let dato1 = 60;
// summar y asignar +=
let masigual = 10;
masigual += datoA;
// Menos igual -=
let menosIgual= 10;
menosIgual -= datoB;
