//* Js is sync, single threaded lang
//* Callback is a way to do async code in Js.

const cart = ['shoes', 'pants', 'kurtas']

//! CALLBACK HELL, pyramid of doom
api.createOrder(cart, function() {
    api.proceedToPayment(function() {
        api.showOrderSummary(function() {
            api.updateWallet()
        })
    })
})


//! Inversion of control, to loose control of code while using callback
//? in above eg, we gave control to createOrder function to call proceedToPayment api,what if something went wrong and it doesnt call


