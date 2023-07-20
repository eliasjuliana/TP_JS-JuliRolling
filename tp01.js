//1.Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert('un mensaje');

//2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write('Hello world');

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
console.log(3 + 5);

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
//Ejemplo: input: Coder Output: Hola Coder

nombre = prompt('cual es tu nombre?');
console.log('Hola ' + nombre);


//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//Nota: Tener en cuenta la siguiente función: parseInt https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

let num1 = prompt('Escriba un numero');
let num2 = prompt('Escriba otro numero');
console.log(parseInt(num1) + parseInt(num2));


//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//Ejemplo: input: 15 , 3. Output: El 15 es el número más grande

let a = prompt('Escriba un numero');
let b = prompt('Escriba otro numero');

if (a > b) {
    console.log ("El " + a + ' es el numero mas grande');
} else if (b > a) {
    console.log ("El " + b + ' es el numero mas grande');
} else {
    console.log('los numeros son iguales');
}


//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//Ejemplo: input: 15 , 3, 9 Output: El 15 es el número más grande

let n1= prompt('Escriba un numero');
let n2 = prompt('Escriba otro numero');
let n3 = prompt('Escriba un tercer numero');

if (Number(n1) > Number(n2) && Number(n1) > Number(n3)) {
    console.log("El " + n1 + ' es el numero mas grande');
} else if (Number(n2) > Number(n1) && Number(n2) > Number(n3)) {
    console.log("El " + n2 + ' es el numero mas grande');
} else {
    console.log("El " + n3 + ' es el numero mas grande');
}


//8.- Escribe un programa que pida un número y diga si es divisible por 2
//Ejemplo input: 10 Output: El 10 es divisible por 2.
//input: 15 Output: El 15 no es divisible por 2.

let num3 = prompt('Escriba un numero');

if (Number(num3) % 2 === 0) {
    console.log('El ' + num3 +  ' es divisible por 2');
} else {
    console.log('El ' + num3 + ' no es divisible por 2');
}



//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//Ejemplo: input: 20 Output: El 20 es divisible por 2.

let num4 = prompt ('Escriba un numero');
num4 = Number(num4);

if (num4 % 2 === 0) {
    console.log ('El ' + num4 + ' es divisible por 2');
} else if (num4 % 3 === 0){
    console.log ('El ' + num4 + ' es divisible por 3');
} else if (num4 % 5 === 0){
    console.log ('El ' + num4 + ' es divisible por 3');
} else if (num4 % 7 === 0){
    console.log ('El ' + num4 + ' es divisible por 3');
} else {
    console.log ('El ' + num4 + ' no es divisible por 2, 3, 5 y 7');
}



//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
//Ejemplo: input: 20 Output: El 20 es divisible por 2 y por 5.
//input: 210 Output: El 210 es divisible por 2, por 3, por 5 y por 7.

let num = prompt ('Escriba un numero');
num = Number(num);

if (num % 2 === 0) {
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            if (num % 7 === 0) {
                console.log('El ' + num + ' es divisible por 2, 3, 5 y 7');
            } else {
                console.log('El ' + num + ' es divisible por 2, 3 y 5');
            }
        } else if (num % 7 === 0) {
            console.log('El ' + num + ' es divisible por 2, 3 y 7');
        } else {
            console.log('El ' + num + ' es divisible por 2 y 3');
        }
    } else if (num % 5 === 0) {
        if (num % 7 === 0){
            console.log('El ' + num + ' es divisible por 2, 5 y 7');
        } else {
            console.log('El ' + num + ' es divisible por 2 y 5');
        }
    } else if (num % 7 === 0){
        console.log('El ' + num + ' es divisible por 2 y 7');
    } else {
        console.log('El ' + num + ' es divisible por 2');
    }
} else if (num % 3 === 0) {
    if (num % 5 === 0) {
        if (num % 7 === 0) {
            console.log('El ' + num + ' es divisible por 3, 5 y 7');
            } else {
                console.log('El ' + num + ' es divisible por 3 y 5');
            }
    } else if (num % 7 === 0) {
            console.log ('El ' + num + ' es divisible por 3 y 7');
        } else {
            console.log( 'El ' + num + ' es divisible por 3');
        }
    } else if (num % 5 === 0) {
    if (num % 7 === 0) {
        console.log( 'El ' + num + ' es divisible por 5 y 7');
    } else {
        console.log( 'El ' + num + ' es divisible por 5');
    }
} else if (num % 7 === 0) {
    console.log( 'El ' + num + ' es divisible por 7');
} else {
    console.log( 'El ' + num + ' no es divisible por 2, 3, 5 y 7');
}






























// if (num4 % 2 === 0) {
//     if (num4 % 3 === 0) {
//         console.log('El ' + num4 + 'es divisible por 2 y 3');
//         if (num4 % 5 === 0) {
//             console.log('El ' + num4 + 'es divisible por 2, 3 y 5');
//             if (num4 % 7 === 0) {
//                 console.log('El ' + num4 + 'es divisible por 2, 3, 5 y 7');
//             }
//         }
//     } else if {
//         console.log ('El ' + num4 + ' es divisible por 2');
//     }
// }
    
    
    
    
    
//     if (num4 % 5 === 0) {
//         console.log
//     }
// } else if (num4 % 3 === 0){
//     console.log ('El ' + num4 + 'es divisible por 3')
// } else if (num4 % 5 === 0){
//     console.log ('El ' + num4 + 'es divisible por 3')
// } else if (num4 % 7 === 0){
//     console.log ('El ' + num4 + 'es divisible por 3')
// }





// let num5 = prompt ('Escriba un numero');
// let div2;
// let div3;
// let div5;
// let div7;
// num5 = Number(num5);

// if (num5 % 2 === 0) {
//     div2 = console.log ('El ' + num5 + ' es divisible por 2');
// } else if (num5 % 3 === 0){
//     div3 = console.log ('El ' + num5 + ' es divisible por 3');
// } else if (num5 % 5 === 0){
//     div5 = console.log ('El ' + num5 + ' es divisible por 5');
// } else if (num5 % 7 === 0){
//     div7 = console.log ('El ' + num5 + ' es divisible por 7');
// }