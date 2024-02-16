///1, 2, 3, 4 y 5

let num1= 100
let num2= 20


function add( x, y) {
    return( x + y )
}

add(num1, num2)

//6


const fun1= function add( x, y) {
    return( x + y )
}
 
fun1(num1, num2)


//7

const funflecha= (x,y) =>  x + y;


console.log( funflecha(num1, num2));

//8
 
function saludar(nombre) {
    console.log('Hola '+ nombre +' Como estas?' )
}

saludar('Lucas')

//9

const fun= function add( x, y) {
    return( x * y )
}
 
console.log(fun(25, 50)) 


//10
function area(base, altura) {
    const result =base * altura / 2
    console.log(result); 
}
function perimetro(base, lados) {
    const result =base + lados + lados
    console.log(result); 
}

area(12,15)
perimetro(12,16)

// 11

const calcularPrecioTotal = (precio, cantidad) => {
    let precioTotal = precio * cantidad;

    if (cantidad >= 20) {
        precioTotal *= 0.8; // Aplicar descuento del 20%
    } else if (cantidad >= 10) {
        precioTotal *= 0.9; // Aplicar descuento del 10%
    }

    return precioTotal;
};

// Ejemplo de uso:
const precioUnitario = 10;
const cantidadProductos = 15;

const precioFinal = calcularPrecioTotal(precioUnitario, cantidadProductos);
console.log("El precio total de la compra es: $" + precioFinal);

// 12
function esMayorDeEdad (edad) {
    if (edad >= 18) {
        return "Eres mayor de edad";
    } else {
        return "Eres menor de edad";
    }
};


const edadPersona = 20;
const mensaje = esMayorDeEdad(edadPersona);
console.log(mensaje); 
// 
// 13
function calcularImpuesto(ingresoAnual) {
    let impuesto;

    if (ingresoAnual <= 10000) {
        impuesto = ingresoAnual * 0.1; // 10% del ingreso
    } else if (ingresoAnual > 10000 && ingresoAnual <= 20000) {
        impuesto = ingresoAnual * 0.15; // 15% del ingreso
    } else {
        impuesto = ingresoAnual * 0.2; // 20% del ingreso
    }

    return impuesto;
}

const ingreso = 15000;
const impuesto = calcularImpuesto(ingreso);
console.log("El impuesto a pagar es: $" + impuesto);

// 14

function esDiaLaboral(numero) {
    let mensaje;

    switch (numero) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mensaje = "Es un día laboral";
            break;
        case 6:
        case 7:
            mensaje = "Es fin de semana";
            break;
        default:
            mensaje = "Número inválido";
    }

    return mensaje;
}

console.log(esDiaLaboral(3)); 
console.log(esDiaLaboral(6)); 
console.log(esDiaLaboral(8)); 
