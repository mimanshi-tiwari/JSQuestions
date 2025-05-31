/**
 * ?OUTPUT:
 *          before
 *          after
 *          1
 * * Callback function calls a closure with reference of (i)
 */
function x() {
  var i = 1;
  console.log("before");
  setTimeout(function () {
    console.log(i);
  }, 1000);
  console.log("after");
}

x();

/**
 * ?OUTPUT
 *         11
 *         11
 *         11
 *         11
 *         11
 *         11
 *         11
 *         11
 *         11
 *         11
 * * For loop runs var (i) reference is craeted in global space
 * * By the time settimeout executes coming back from event loop, value of i === 11
 * * Since the callback function creates a closure with [REFERENCE] of i the new value 11 is printed
 */

function x() {
  for (var i = 1; i <= 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

x();

/**
 * TODO: FIX using Let
 * ?OUTPUT
 *         1
 *         2
 *         3
 *         4
 *         4
 *         5
 *         6
 *         7
 *         8
 *         9
 *         10
 * * For each for loop a new is defined as let is block scoped.
 * * Each loop does not have reference to old value as it is in diddreent scope.
 * * Or, with each loop new let is defined and stored in different memory space (block scope)
 * * var is also defined with every loop but value is stored in same global space, Hence the result
 */

function x() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

x();

/**
 * TODO: FIX using var
 * ?OUTPUT
 *         1
 *         2
 *         3
 *         4
 *         4
 *         5
 *         6
 *         7
 *         8
 *         9
 *         10
 * * Every time we call clouse(i) , a new copy of (i) is passed, Hence is result
 */

function x() {
  for (var i = 1; i <= 5; i++) {
    function clouse(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    clouse(i);
  }
}

x();


/**
 * Constructor Function, to create counter using closure
 */
function Counter() {
    var count = 0;
    
    this.increase = function () {
        count++
        console.log(count)
    }
    this.decrease = function() {
        count--
        console.log(count)
    }
}

const counter1 = new Counter()
counter1.increase()
counter1.decrease()

