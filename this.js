//? This works differntly in strict mode and non strict mode

 // * This in global scope
 console.log(this) // global object (window for browsers)
 
 // * This inside a function
 
 function x() {
    console.log(this) 
     // global object in non strict mode
     // 'use strict' undefined in strict mode
 }
 x()
 
 // * this in strict mode - (this substitution)
 //? - If value of this keyword is undefined or null, this will be replaced with global object - only in non strict mode
 
 // * this value depends on how this is called (window)
 
 x() // undefined in strict mode
 window.x() // this === window
 // in non strict mode, this substitution happens
 

 // * this inside a object's method
 // ?  When a function defined as part of object it is called METHOD
 const student = {
     name: 'Mimanshi',
     printName: function () {
         console.log('I am METHOD', this.name) // this === obj
     }
 }
 
 student.printName() // this === obj (this depends on how a function is called)
 
 const student2 = {
     name: 'Mimo'
 }
 
 // * call apply bind methods (sharing methods)
 student.printName.call(student2) // this === student2
 
 // * this inside arrow function
 
 //? Arrow function does not have their own this. They take the the value of their lexical env where they are enclosed
 
 const obj = {
     a: 10,
     x: () => {
         console.log(this) // global object
     }
 }
 
 // * this inside nested arrow function
 
  const obj2 = {
     a: 10,
     x: function() {
         //* Enclosing lexical context
        const y = () => {
            console.log(this)
        }
        y()
     }
 }
 
 obj2.x() // this === obj2
 
 // * this inside DOM
 
 // <button onClick="alert(this)">CLick ME </button>
 
 // this === reference to html element (object HTMLButtonElement)
 
 // * this inside class, constructors (READ)