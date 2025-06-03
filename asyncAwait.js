// Always return a promise, either explicitely return a promise or this function will wrap output in promise and return it.
// TODO async
//? 1. 
async function getData() {
    return 'Async only function' 
 }
 
 const data = getData()
 data.then(console.log)
 
 
 //? 2.
 const p = new Promise((resolve, reject) => {
     setTimeout(() => {
             resolve('Promise resolved!')
     }, 5000)
 })
 
 // p already a promise async won't wrap it inside a promise again
 async function getData2() {
     return p
 }
 
 const data2 = getData2()
 data2.then(console.log)
 
 // TODO use async along with await
 //? async await combo used to handle promises
 
 function normalWay() {
     p.then((res) => console.log(res + ' normal way'))
     console.log('Mimanshi after normal promise') // a promise will be registered and then this line will be printed, once promise is resolve it will be printed
 }
 
 normalWay()
 
 //? ASYNC AWAIT
 
 async function usingAsyncAwait() {
     const res = await p
     console.log(res + ' Using async await')
     console.log('Mimanshi after async await') // nothing will execute until promise is resolved, this will be printed last
 
 }
 usingAsyncAwait()
 
 // * AWAIT can only b used insde async function
 // * execution of program in call stack is suspended as soon as it encounters "await" the call stack is freed for next function to execute so thread is not blocked and the previous function resumes from next line once promise is resolved
 
 