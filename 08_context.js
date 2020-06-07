// const person = {
//     surname: 'Старк', 
//     knows (what, name)  {
//         console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//     }
// }

// person.knows('всё', 'Бран')


// const john = {
//     surname: 'Сноу'
// }

// person.knows.apply(john, ['ничего не', 'Джон'])

// =========

// function Person(name, age) {
//     this.name = name
//     this.age = age

//     console.log(this)
// }

// const elena = new Person('Elena', 20)

// // ============
// function logThis() {
//     console.log(this)
// }

// const obj = { num: 42 }
// logThis.apply(obj)

// ==============
// const animal = {
//     legs: 4, 
//     logThis: function () {
//         console.log(this)
//     }
// }

// function Cat(color) {
//     this.color = color 
//     console.log('This', this)
//     ;(() => console.log('Arrow this', this))()
// }

// new Cat('red')

// let obj = {
//     name: 'obj', 
//     f: () => {
//         console.log(this)
//     }
// }

// obj.f()