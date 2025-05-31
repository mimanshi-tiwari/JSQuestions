// * Polyfill is a support for browser fallback

// TODO :  BIND METHOD

let name = {
    firstName : "Mimanshi",
    lastName: "Tiwari",
}

const printName = function() {
    console.log(this.firstName + " " + this.lastName)
}

const printMyName = printName.bind(name)
printMyName()

//* SOLUTION BIND POLLY
Function.prototype.pollyBind = function (...args) {
    const fun = this
    const params = args.slice(1)
    return function(...args2) {
        fun.apply(args[0], [...params, ...args2 ])
    }
}

const printMyNamePolly = printName.pollyBind(name)
printMyNamePolly()

