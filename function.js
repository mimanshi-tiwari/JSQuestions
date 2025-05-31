a() // valid
// b() // TypeError: b is not a function (hoisted as udefined)

// * Function statement, hoisted like afunction
function a() {
    console.log('a called')
}

// * Function Expression, hoisted like variavle : undefined

var b = function () {
    console.log('b called')
}

// * Function Declaration same things as function Statement

// * Anonymous Function, function without. a name
// ! Below throws SyntaxError: Function statements require a function name
function () {
     console.log('anonymous function')
}

// * Named function expression
function xyz () {
    console.log('xyz called')
}

// * Difference between Parameters and Arguments
function xyz(param1, param2) {
    console.log(param1, param2)
}
xyz('arg1', 'arg2')

// * First Clas Functions
// ? The ability of functions be used as values, to be passed as arguments and be returned as a values is called first class functions

// ? Functions are First class citizens

// * Arrow Functions, part of es6
const arrowFun = () => {console.log('arrowFun called')}


//* Higher order function
//? Functions which take functions as arguments or returns a function is called higher order function

//? Callback function
function x() {
    console.log('x')
}

//? Higher order function
function y(x) {
    x()
}

//! * Use case of higher order function and Functional Programming
const radius = [3,1,2,4]
 
const area = (radius) => Math.PI * radius * radius
const perimeter = (radius) => 2 * Math.PI * radius
const diameter = (radius) => 2 * radius

const calculate = function (radius, cb) {
    const output = []
    for (let i=0; i< radius.length ; i ++) {
        output.push(cb(radius[i]))
    }
    return output
}

Array.prototype.calculate =  function (radius, cb) {
    const output = []
    for (let i=0; i< radius.length ; i ++) {
        output.push(cb(radius[i]))
    }
    return output
} 

 
Array.prototype.calculate1 = function (cb) {
    const output = []
    for (let i=0; i< this.length ; i ++) {
        output.push(cb(this[i]))
    }
    return output
} 
 


console.log('area', calculate(radius, area));
console.log('area map'), radius.map(area); // same thing
console.log('MAP prototype', radius.calculate(radius, area)) // same thing
console.log(radius.calculate1(area)) // same thing

console.log('perimeter', calculate(radius, perimeter));
console.log('diameter', calculate(radius, diameter));

// TODO: convert into binary

const binary = (num) => num.toString(2)