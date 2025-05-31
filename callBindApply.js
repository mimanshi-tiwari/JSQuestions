// * function borrowing, first argument is always reference (this)
// * ============= CALL ============
// ? 1 =>
    let name = {
        firstName: "Mimanshi",
        lastName: "Tiwari",
        printName: function () {
            console.log(this.firstName + ' ' + this.lastName)
        }
    }
    
    name.printName()
    
    let name2 = {
        firstName: "Mimo",
        lastName: "T",
    }
    name.printName.call(name2)
    
    // ========== OR ==========
    // ? 2 =>
    let printName = function (homeTown) {
            console.log(this.firstName + ' ' + this.lastName + ' from', homeTown)
        }
        
        printName.call(name, 'Lucknow')
        printName.call(name2, 'lko')
        
        // ? 3 =>
        
    // * ============= APPLY ============
    
    printName.apply(name, ['Delhi']) // arguments passed as array
    printName.apply(name2, ['Bangalore'])
        
    // * ============= BIND ============
    
    const printMyName = printName.bind(name, 'Noida') // creates a copy of function with reference and arguments to be called later
    
    printMyName()