let num1= 4
let num2= 5
// ejercicio1
if(num1 > num2){
    console.log(num1)
}else if(num1 == num2){
    // ejercicio2
    console.log("Los números son iguales")
}else
{
    console.log(num2)
    // ejercici3
    console.log("Los numeros son diferentes")
}
// ejercicio 4 y 5


let date1 = "2018-9-2"

let date2 = "2023-7-5"

if (date1 > date2){
    console.log(`La fecha ${date1} es mayor a ${date2}`)   
}else if (date1 < date2){
    console.log(`La fecha ${date2} es mayor a ${date1}`)  
}else{
    console.log("Las fechas son las mismas")
}

//6

let num_1 = 5

let num_2 = 7

let num_3 = 9


if (num_1 > num2 && num_1 > num_3){
    console.log(`El número ${num1} es el más grande`)
}else if (num_2 > num1 && num_2 > num_3){
    console.log(`El número ${num_2} es el más grande`)
}else{
    console.log(`El número ${num_3} es el más grande`)
}

//7
 
// let color = "rojo"
// let color = "azul"
// let color = "verde"
let color = prompt('Ingrese un color entre: Rojo, Azul y Verde.')

switch (color){
    case "Rojo": 
        alert("El color de la pasión")
        break;
    case "Azul":  
        alert("El color del mar")
        break;
    case "Verde": 
        alert("El color de la naturaleza")
        break;
    default:
        alert("No tengo ese color");
        break;
}

//8

const operacion= prompt('Ingrese la operación: sumar, restar, multiplicar, dividir')
const numero1= Number( prompt('Ingrese el segundo numero'))
const numero2= Number( prompt('Ingrese el segundo numero'))


switch (operacion) {
    case "sumar":
        alert(`La suma de ${numero1} y ${numero2} es: ${numero1 + numero2}`);
        break;
    case "restar":
        alert(`La resta de ${numero1} y ${numero2} es: ${numero1 - numero2}`);
        break;
    case "multiplicar":
        alert(`El producto de ${numero1} y ${numero2} es: ${numero1 * numero2}`);
        break;
    case "dividir":
        alert(`La division de ${numero1} y ${numero2} es: ${numero1 / numero2}`);
        break;
    default:
        alert('Operacion no valida');
        break;
}

//9

let persona1= {
    nombre: "Juan",
    edad: 25,
    estatura: 1.90
}
let persona2= {
    nombre: "Lucas",
    edad: 24,
    estatura: 1.80
}

if (persona1.estatura > persona2.estatura && persona1.edad < persona2.edad){
    console.log(persona1.nombre + " es mas alto y menor que " + persona2.nombre)
}else if (persona1.estatura < persona2.estatura && persona1.edad > persona2.edad) {
    console.log(persona2.nombre + " es mas alto y menor que " + persona1.nombre)
}else if (persona1.estatura > persona2.estatura && persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " es mas alto y mayor que " + persona2.nombre)
}else if (persona1.estatura < persona2.estatura && persona1.edad < persona2.edad) {
    console.log(persona2.nombre + " es mas alto y mayor que " + persona1.nombre)
}else if (persona1.estatura == persona2.estatura && persona1.edad > persona2.edad){
    console.log(persona2.nombre + " tiente la misma estatura pero es menor que " + persona1.nombre)
}else if (persona1.estatura == persona2.estatura && persona1.edad < persona2.edad){
    console.log(persona1.nombre + " tiente la misma estatura pero es menor que " + persona2.nombre)
}else if (persona1.estatura > persona2.estatura && persona1.edad == persona2.edad){
    console.log(persona1.nombre + " es mas alto y tiene la misma edad que " + persona2.nombre)
}else if (persona1.estatura < persona2.estatura && persona1.edad == persona2.edad){
    console.log(persona2.nombre + " es mas alto y tiene la misma edad que " + persona1.nombre)
}else{
    console.log("Tienen la misma edad Y la misma altura");
}

//10

const nombre= prompt('Ingrese su nombre ')
const edad1 = Number (prompt('Ingrese su edad'))
const altura= Number(prompt('Ingrese su altura '))
const vision= Number(prompt('Ingrese su rango de vision'))


if (edad1 >= 18 && altura >= 1.50 && vision >= 8 ) {
    alert(nombre + 'estas capacitado para conducir')
}else {
    alert(nombre + ' no estas capacitado para conducir')
}

//11

let edadIngresada1=Number(prompt('Ingrese su edad '))

if (edadIngresada1<= 12){
    alert('Infante')
}else if (edadIngresada1 <= 18){
    alert('Adolecente')
}else if (edadIngresada1 <= 45){
    alert('Mayor joven')
}else if (edadIngresada1 <= 100){
    alert('Anciano')
}else {
    alert('¿En realidad tiene esa edad?')
}

//12

// const numeroingresado= 25
// const multiplicador=1

const numeroingresado=Number(prompt('Ingrese un numero: '))
const multiplicador= Number(prompt(`Opcion 1: *1
Opcion2: *2
Opcion3: *3`))

if (multiplicador == 2){
    alert('El doble del numero ingresado es: '+ numeroingresado*2)
}else if(multiplicador == 3){
    alert('El triple del numero ingresado es: ' + numeroingresado*3 )
}else if(multiplicador ==1){
    alert('El numero ingresado es: '+ numeroingresado)
}else {
    alert('Ese valor no esta permitido')
}

//13

const entrada= prompt('Tiene entrada?: Si/No ')
const nombreClient= prompt('Ingrese su nombre: ')


if(entrada === 'Si' || nombreClient === 'Lucas'){
    prompt('Tienen pase vip o normal?')
    alert('bienvenido/a')
}else if (entrada === 'No'){
    compra= prompt('Desea comprar una?: Si/No')
    if(compra === 'Si'){
        dineroDisponible= Number(prompt('Ingrese dinero disponible: '))
        alert(dineroDisponible >=1000? 'venta exitosa Bienvenido': 'Lo siento, No tiene dinero suficiente para la compra');

    }else {
        alert('Hasta luego');
    }
}else {
    alert('Hasta luego');
}


//14

const numeroIncognita = 8


const numeroingresado1 = parseInt(prompt("Adivina el número del 1 al 10. Tienes 3 intentos:"));

if (numeroingresado1 === numeroIncognita) {
    alert("¡Felicidades! ¡Has adivinado el número!");
} else {
    if (numeroingresado1< numeroIncognita) {
        alert("El número es mayor. Te quedan 2 intentos.");
    } else {
        alert("El número es menor. Te quedan 2 intentos.");
    }

    const segundoIntento = parseInt(prompt("Intenta de nuevo:"));

    if (segundoIntento === numeroIncognita) {
        alert("¡Felicidades! ¡Has adivinado el número!");
    } else {
        if (segundoIntento < numeroIncognita) {
            alert("El número es mayor. Te queda 1 intento.");
        } else {
            alert("El número es menor. Te queda 1 intento.");
        }

        const tercerIntento = parseInt(prompt("Último intento:"));

        if (tercerIntento === numeroIncognita) {
            alert("¡Felicidades! ¡Has adivinado el número!");
        } else {
            alert("Se han agotado tus intentos. El número era " + numeroIncognita + ".");
        }
    }
}
