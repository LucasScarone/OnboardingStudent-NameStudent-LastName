let MyName="Lucas "
console.log(MyName)
let MyLastName = "Scarone "
console.log(MyLastName)
let MyAge = 22
console.log(MyAge)

let MyPet="Milo"
console.log(MyPet)

let MyPetAge = 10
console.log(MyPetAge)

let MyNameCompl= MyName + MyLastName
console.log(MyNameCompl)


// let presentationText=
let presentationText = `Hola mi nombre es ${MyNameCompl}, tengo  ${MyAge} años, Tengo una mascota que se llama ${MyPet} y tiene ${MyPetAge}` 
console.log(presentationText)

let sumaAge = MyAge + MyPetAge
console.log(sumaAge)
let restAge = MyAge - MyPetAge
console.log(restAge)
let producAges = MyAge * MyPetAge
console.log(producAges)
let divisonAge = MyAge / MyPetAge
console.log(divisonAge)

let alum = {
    alum1:"Fernando",
    alum2:"Alberto",
    alum3:"Nahuel",
    alum4:"Martina",
    alum5:"Romina"
}
console.log(alum)
console.log(alum.alum1)
console.log(alum.alum2)
console.log(alum.alum3)
console.log(alum.alum4)
console.log(alum.alum5)

let pets = {
    pet1:"nando",
    pet2:"beto",
    pet3:"nahu",
    pet4:"mart",
    pet5:"romi"
}
console.log(pets)
console.log(pets.pet1)
console.log(pets.pet2)
console.log(pets.pet3)
console.log(pets.pet4)
console.log(pets.pet5)

let Fruts = ["manzana","banana","naraja","maracuya","mandarina"]

console.log(Fruts)
console.log(Fruts[0])
console.log(Fruts[1])
console.log(Fruts[2])
console.log(Fruts[3])
console.log(Fruts[4])

let num=[1,2,3,4,5]

console.log(num)
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])

let familia=[
{hermano: "juan",
edad: 18,
estaura:1.8,
},{ Papa: "pedro",
edad: 38,
estaura:1.8,
},{mama: "martina",
edad: 36,
estaura:1.6,
},{hermana: "juana",
edad: 18,
estaura:1.5,
},{hermanoMenor: "fernando",
edad: 16,
estaura:1.6,
}
]

console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])
console.log("----")
// console.log((familia[4].hermanoMenor))

const edadIngresada = Number( prompt('Ingrese su edad'))
const iAmAbult= edadIngresada >= 18

console.log("I an am Abult:" + iAmAbult )

let texRamdon= `Hoy ${familia[4].hermanoMenor} se comio ${num[3]} ${Fruts[1]} y termino con dolor de panza`
console.log(texRamdon)