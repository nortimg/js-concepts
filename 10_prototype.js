// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
    this.name = name
    this.color = color
}

Cat.prototype.voice = function () {
    console.log(`Cat ${this.name} says meow`)
}

const cat = new Cat('KOT', 'green')

// cat.voice()

// console.log(Cat.prototype)
// console.log(cat.__proto__ === Cat.prototype)
// console.log(cat.constructor)


// =================

function Person() {

}

Person.prototype.legs = 2
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Alexey'

// console.log('skin' in person)
// console.log(person.legs)
// console.log(person.name)

// console.log(person.hasOwnProperty())

// Object.create() 

let proto = { year: 2019 }
const myYear = Object.create(proto)

// console.log(myYear.year)
// console.log(myYear.hasOwnProperty('year'))
// console.log(myYear.__proto__ === proto)

proto.year = 2222


// console.log(myYear.year)

// Inheritance

function Parent () {
    this.name = 'Anna'
    this.surname = 'Gmitron'
}

function Child() {
    this.__proto__ = new Parent()
    this.name = 'Alexey'
}

let me = new Child() 
// console.log(me)