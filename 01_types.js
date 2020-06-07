// // null, undefined, boolean, number, string, object, symbol (ES6)

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'JS')
// console.log(typeof undefined)
// console.log(typeof Math)
// console.log(typeof Symbol('JS'))
// console.log(typeof null)
// console.log(typeof function () {})
// console.log(typeof NaN)


// Приведение типов 

// let language = 'JavaScript'

// if (language) {
//     console.log('The best language is: ', language)
// }

// !!! falsy values: '', 0, null, undefined, NaN, false


// !!! It'll return true
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean(function () {}))

// Strings and numbers
// console.log('2' + 1) // string 21
// console.log('' + 1 + '' + 0) // string 10
// console.log('123' - 1 + 0) // empty string will become 0 
// console.log('3' * '8') // number
// console.log(4 + 10 + 'px') // 14px
// console.log('px' + 5 + 10) // px510
// console.log('42' - 40) // 2
// console.log('42px' - 2) // NaN
// console.log(null + 2) // 2 --> null will be 0
// console.log(undefined + 42) // NaN. It isn't possible to bring undefined to number



// == vs === 

// console.log(2 == '2') // true
// console.log(2 === '2') // false
// console.log(undefined == null)
// console.log(undefined === null)


// console.log('0' == false) // Interpeter will create a number from string '0'
// console.log('0' == 0) // true
// console.log(0 == 0) // true

// ======= Unexpected compares
console.log(false == '') // true
console.log(false == []) // true
console.log(false == {}) // false
console.log('' == 0) // true
console.log('' == []) // true
console.log('' == {}) // false
console.log(0 == []) // true
console.log(0 == {}) // false 
console.log(0 == null) // false
