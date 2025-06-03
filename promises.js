//* Promises are used to handle async operations in JS
const cart = ["shoes", "pants", "kurtas"];

//TODO using callback
//? We pass callback function now it's responsibility of craeteOrder function to call poceedtopayment once order is craeted successfully.
//! RISK: Inversion of Control

createOrder(cart, function () {
  proceedtoPayment(orderId);
});

//TODO using promise
const promise = createOrder(card);

// {data: undefined} - pending
// {data: response} - successfull

//* attaching a callback fun to promise object
promise.then((res) => proceedtoPayment(orderId));

// ===================FETCH ============

const GITHUB_API = "https://api.github.com/users/mimanshi-tiwari";

const response = fetch(GITHUB_API);

console.log(response);
/*
 * Promise{<pending>}  ==> initially is was pending and respons ewas logged
 * on expand "fulfilled" ==> later value was updated and it got updated here as well, broswer inconsistency
 **/
response.then((res) => res.json()).then(console.log);

//* A PROMISE can ahve 3 states, promise objects are immutable, and it resolved only once
//? Pending
//* Fulfilled
//! Rejected

//* DEFINITIO => OFFICIAL
//* Promise is an object representing the eventual completion or failure of an async operation. Solves inversion of control and callback hell

createOrder(cart)
  .then(function () {
    return proceedTlPayment(); //return to pass the data to next then
  })
  .then(function () {
    return showOrderSummary(); //return to pass the data to next then
  })
  .then(function () {
    return updateWalletBalance(); //return to pass the data to next then
  });

// ==================================PROMISE CHAIN =================================

const cart1 = ["shoes", "pants", "kurtas"];

const validateCart = () => true;
function processTopPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve(`Payment successful for order ${orderId}`);
  });
}
createOrder(cart)
  .then((orderId) => orderId)
  .then((orderId) => {
    return processTopPayment(orderId);
  })
  .catch(console.log)//responsible for to catch only first 2 then errors
  .then((paymentInfo) => console.log(paymentInfo))
  .catch(console.log) // will catch error at any step of the promise chanin
  .then(function(orderid) {
    console.log('No matter what happens I will definitely be called, catch will only catch errors above me then I will execute')
  })

function createOrder(cart1) {
  const pr = new Promise((resolve, reject) => {
    // create order
    // validate cart
    // orderid
    // ! reject promise
    if (!validateCart(cart)) {
      const error = new Error("Cart is not valid!");
      reject(error);
    }
    const orderId = "12345";
    //* Resolve Promise
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}


//====================================== PROMISE APIs ======================================

//? Promise Lingos
//? Settled = got result of promise. One of the below result is received
//? resolve - reject
//? success - failue
//? fulfilled - rejected


/**
 * TODO Promise.all
 * ? parallel api calls
 * @param Takes array of promises
 * * ALL SUCCESS: Response will be received once all promises are resolved. The response will be received after the the promise that took max time to resolve. It will wait for all of them to finish.  [val1, val2, val3]
 * * ANY REJECTED: As soon as any one promise is rejected promise.all will throw error. same error rejected by any one of the promise. Response time, as soon as a promise is rejected we get error, does not wait for other promise to resolve. FAIL FAST
 */

// ? All success
const [val1, val2, val3] = Promise.all([p1, p2, p3]) // response in 3s, 1s, 2s respectively

// ? 1 Promise gets rejected, p2 gets rejected
const [val11, val22, val33] = Promise.all([p1, p2, p3]) // response in 3s, 1s, 2s respectively

/**
 * TODO Promise.allSetteled
 * ? parallel api calls
 * @param Takes array of promises
 * Promise.allSetteled([p1, p2, p3])
 * * ANY REJECTED: Even if one promise is rejected, it will wait for all promise to settle and we will get all values [val1, err2, val3]
 * * SUCCESS ALL : same as  Promise.all
 * * val1 = {status 'fulfilled/rejected', value: value} only for this api
 */
 
 /**
  * TODO Promise.race
  * ? parallel api calls
  * @param Takes array of promises
  * Promise.race([p1, p2, p3])
  * * FIRST SUCCESSFUL: As soon as any promise is  setteled we get that particular value in response. val1
  * * FIRST FAILED : Error will be thrown from first promise to settle
  */
  
  /**
   * TODO Promise.any
   * ? parallel api calls
   * * @param Takes array of promises
   * Promise.any([p1, p2, p3])
   * * Similar to promise.race, but wait for first success/resolve promise to return a value. val1
   * * All FAILED : return AggregateError [err1, err2, err3]
   * catch => err.errors = [err1, err2, err3]
   * err = AggregateError: A;; promises were rejected
   */
