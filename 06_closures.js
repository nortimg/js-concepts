// function sayHelloTo(name) {
//     const message = 'Hello ' + name 

//     return function() {
//         console.log(message)
//     }
// }

// const helloToElena = sayHelloTo('Elena')
// helloToElena()


// function createFrameworkManager() {
//     const fws = ['Angular', 'React']

//     return {
//         print: function() {
//             console.log(fws)
//         }, 
//         add: function(framework) {
//             fws.push(framework)
//         }
//     }
// }

// const manager = createFrameworkManager()
// console.log(manager)

// manager.print()
// manager.add('VueJS')
// manager.print()

// setTimeout

const fib = [1, 2, 3, 5, 8, 13]


for (var i = 0; i < fib.length; ++i) {
    (function (j) {
        setTimeout(function () {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
    })(i)
}