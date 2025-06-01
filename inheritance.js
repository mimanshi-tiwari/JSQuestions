//* Everything in Js is OBJECT
//* JS attacheds some properties to each object inside a special key __proto__

const arr = ['1', '2']
const obj = {
    name: "Mimanshi",
    city: "Bangalore",
    printName: function () {
        console.log(this.name + 'from' + this.city)
    }
}

console.log(arr.__proto__) // same as Array.prototype
console.log(arr.__proto__.__proto__) // same as Object.prototype
console.log(arr.__proto__.__proto__.__proto__) // null


//* To add anything to prototypes 

Array.prototype.newArrayFunction = function() {
    console.log('new array function attached to all array object')
}

console.log(arr.newArrayFunction())