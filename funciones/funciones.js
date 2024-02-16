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