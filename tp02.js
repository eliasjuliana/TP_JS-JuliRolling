/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada 
no es un número válido indicarlo en un mensaje.*/

// let edad;
// edad = prompt('Escriba su edad');

// if (isNaN(edad)) {
//     console.log('El valor ingresado no es un numero valido');
// } else if (!(edad > 18)) {
//     console.log('Aun no puede conducir');
// } else {
//     console.log('Ya esta habilitado para conducir');
// }



/*Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los 
siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es 
válido mostrar el mensaje “Introduce un número válido”.*/




// let numero = prompt('Ingrese un numero del 0 al 10');

// //si NO es un numero, ingresa al if
// if(isNaN(numero)){
//     console.log('No ingreso un numero valido');
// } else if (!(numero >= 0 && numero <=10)){
// //Es un numero, pero fuera del rango
//     console.log('Ingrese un numero dentro del rango establecido');
// } else {
//     if(numero >= 0 && numero <= 2) {
//         console.log('Muy deficiente');
//     } else if (numero <= 4){
//         console.log('Insuficiente');
//     } else if (numero <= 6){
//         console.log('Suficiente');
//     } else if (numero === 7 ){
//         console.log('Bien');
//     } else if (numero <= 9){
//         console.log('Notable');
//     } else {
//         console.log('Sobresaliente');
//     }
// }



/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las 
cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

// let text;
// let string = ''


// while(true) {
//     text = prompt('Ingrese un texto');
//     if (text === null) {
//         break;
//     }  

//     string = `${string} - ${text}`;
// }
// console.log(string);



/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir 
pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

// let num;
// let suma = 0;

// while(true){
//     num = prompt('Escriba un numero');

//     if (isNaN(num)){
//         alert('El valor ingresado no es un numero');
//         continue;
//     } else if (num === null) {
//         break;
//     }
//     suma = suma + Number(num);
//     }
// console.log(suma);


/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821 
Output: ‘L’*/

/* 1. ingresar dni
    2. verificar si es un numero, si no alert 
    3. continuar pidiendo numeros
    4. calcular resto = dni%23 
    5. comparar el valor de resto con las letras
    6.devolver el valor de la letra
*/

/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
 */

// let piramide;

// for (let i = 1; i < 31; i+=1) {
//     piramide = i;
//     piramide = piramide.toString();
//     piramide = (piramide.repeat(i));
//     console.log(piramide);
// }

/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : 
(suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */


// let num;
// num = prompt('Ingrese un numero');
// //obtengo un numero pero como string

// //quiero ver si ese numero es menor a 50, lo convierto a number primero y evaluo
// let i = Number(num);

// if (i <=50) {
//     while (i >= 1) {
//         //convierto de nuevo a string para poder repetirlo
//     numString = i.toString();
//     console.log(numString.repeat(i));
//     i-=1;
//     }
// } else {
//     console.log('Ingrese un numero menor a 50')
// }


/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
 */

// let number;
// number = prompt('Ingrese un numero');

// if (number <= 50) {
//     let j = "";
//     for (let i = 1; i <= number; i+=1){
//         j = j + i.toString();
//         console.log(j);
//     }

// } else {
//     console.log('Ingrese un numero menor a 50')
// }


/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
 */


// for (let i = 1; i <= 500; i+=1){
//     if (i % 4 === 0) {
//         console.log(`${i} Multiplo de 4`);
//     } else if (i % 9 === 0){
//         console.log(`${i} Multiplo de 9`);
//     } else {
//         console.log(i);
//     }

//     if (i % 5 === 0){
//         console.log("___________________");
//     }
// }




/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número 
consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

let fila;
let columna;

// fila = prompt('Ingrese un numero de fila');
// columna = prompt('Ingrese un numero de columna');

fila = 5
columna = 3

let inicio;
inicio = fila*columna 
// inicio = 15





// //BUCLE que imprima las FILAS
// let guardar = "";
// for (let numCol = columna; numCol >=1; numCol -=1){
//     guardar = guardar + numCol.toString();
// }
// // console.log(guardar);


// for(let numfilas = fila; numfilas >=1; numfilas -=1) {
//     console.log(guardar.toString());
// } 


        //BUCLE COLUMNAS



// //BUCLE que DISMINUYE de 15 a 1
// let x = "";
// for (let i = inicio; i >=1; i-=1){
//     x = console.log(i.toString());
// }


//_______________________NO BORRAR____________________________

// //BUCLE que imprima las FILAS
// for(let numfilas = fila; numfilas >=1; numfilas -=1) {
//     console.log(numfilas.toString());
// }


//BUCLE COLUMNAS
// let guardar = "";

// for (let numCol = columna; numCol >=1; numCol -=1){
//     guardar = guardar + "x";
// }
// console.log(guardar);


// //BUCLE que DISMINUYE de 15 a 1
// for (let i = inicio; i >=1; i-=1){
//     console.log(i.toString())
// }


// strings