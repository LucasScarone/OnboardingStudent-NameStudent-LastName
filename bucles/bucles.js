1

let numeroIngresado = Number(prompt("Por favor ingresa un número entre 1 y 100:"))


if (numeroIngresado >= 1 && numeroIngresado <= 100) {
    for (let i = 0; i <= numeroIngresado; i++) {
        console.log(i);
    }
} else {
    console.log("El número ingresado está fuera del rango válido.");
}

2

let numeroIngresado =  Number(prompt("Por favor ingresa un número entre 1 y 10:"));


if (numeroIngresado >= 1 && numeroIngresado <= 10) {
    console.log(`Tabla de multiplicar del ${numeroIngresado}:`);
    for (let i = 1; i <= 10; i++) {
        let resultado = numeroIngresado * i;
        console.log(`${numeroIngresado} x ${i} = ${resultado}`);
    }
} else {
    console.log("El número ingresado está fuera del rango válido.");
}


3

let suma = 0;

while (true) {
    let numeroIngresado = Number(prompt("Por favor ingresa un número (ingresa 0 para terminar):"));

    if (numeroIngresado === 0) {
        console.log(`La suma total de los números ingresados es: ${suma}`)
        break;
    }

    suma += numeroIngresado;
}

4


let suma = 0;

do {
    let numeroIngresado = Number(prompt("Por favor ingresa un número (ingresa 0 para terminar):"))

    if (numeroIngresado === 0) {
        console.log(`La suma total de los números ingresados es: ${suma}`)
        break;
    }

    suma += numeroIngresado;
} while (true);


5


do {
    let numeroIntento = Number(prompt("Intenta adivinar la suma. Ingresa un número:"));

    if (numeroIntento < suma) {
        console.log("El número ingresado es menor que el numero secreto.");
    } else if (numeroIntento > suma) {
        console.log("El número ingresado es mayor que el numero secreto.");
    } else {
        console.log("¡Felicitaciones! Adivinaste el numero secreto.");
    }
} while (numeroIntento !== suma);


