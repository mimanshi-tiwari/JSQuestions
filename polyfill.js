// * Polyfill is a support for browser fallback

// TODO :  BIND METHOD

let name = {
  firstName: "Mimanshi",
  lastName: "Tiwari",
};

const printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

const printMyName = printName.bind(name);
printMyName();

//* SOLUTION BIND POLLY
Function.prototype.pollyBind = function (...args) {
  const fun = this;
  const params = args.slice(1);
  return function (...args2) {
    fun.apply(args[0], [...params, ...args2]);
  };
};

const printMyNamePolly = printName.pollyBind(name);
printMyNamePolly();

/**
 * TODO : DEBOUNCE - call api only if the difference between 2 events(keypress/keydown/click) is greater than certain limit.
 * * debouncedFun = debounce(cb, limit) , debounce cb at limit
 * * Call function and every keypress and camcle the previous call, the previous call will be cancelled and if delay is more than limit it will be called and timer will be rmeoved simply.
 * ?KeyPress = | 1---->
 *             | 2----> 100ms cancel (1)
 *             | 3----> 50ms cancel (2)
 *             | 4----> 200ms cancel (3)
 *             | 5----> 10ms cancel (4)
 *             | 6----> 400ms cancel (5) CB would have been called
 *             | 7----> 80ms cancel (6) cancel stale timer 6
 * ?USECASE :
 * ?EXAMPLE :  Search
 * */
var counter = 0;
const getDataFun = () => console.log("get data api", counter++);
const debounceFun = function (cb, limit) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(context, args);
    }, limit);
  };
};

const fethcFunction = debounceFun(getDataFun, 500);

/**
 * TODO : THROTTLE - call api after certain limit, irrespective of any event/change
 * ?USECASE :
 * ?EXAMPLE :  Track window resize, shooting game (machine gun or pistol)
 * */

const getData = () => console.log("get data", counter++);

const throttleFun = function (cb, limit) {
  let timer;
  let flag = true;
  return function () {
    const reference = this;
    const args = arguments;
    if (flag) {
      cb.apply(reference, args);
      flag = false;
      clearTimeout(timer)
      timer = setTimeout(() => {
        called = true;
      }, limit);
    }
  };
};

const throttleFetch = throttleFun(getData, 500);
