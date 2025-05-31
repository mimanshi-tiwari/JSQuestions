// * Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps.

// TODO : Using BIND method
let multiply = (x, y) => console.log(x * y)

let multiplyByTow = multiply.bind(this, 2)

multiplyByTow(5)

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(5)

let multiplyByFour = multiply.bind(this, 3, 4)
multiplyByFour(5) // this 5 will be ignored a swe have already passed 2 args

// ================= OR ===================


// TODO : Using CLOSURES method

let multiply1 = function(x) {
    return function(y) {
        console.log(x+y)
    }
}

let multiplyBy2 = multiply1(2)
multiplyBy2(2)