// const myPromise = new Promise(function (myResolve, myReject) {
//     // "Producing Code" (May take some time)
//     myResolve(); // when successful
//     myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise).
// myPromise.then(
//     function (value) { /* code if successful */ },
//     function (error) { /* code if some error */ }
// );


// let name = 'asdas'

// const myPromise = new Promise(function (myResolve, myReject) {
//     // "Producing Code" (May take some time)

//     myResolve(); // when successful
//     myReject();  // when error
// });


// let age = 20;


// const myPromise = new Promise(function (myResolve, myReject) {
//     // setTimeout(function () { myResolve("I love You !!"); }, 3000);÷
//     let success = true
//     if (success) {
//         setTimeout(function () { myResolve("I love You !!"); }, 3000);
//     } else {
//         myReject("Error")
//     }
// });

// myPromise.then(function (value) {
//     console.log(value)
// }).catch((error) => {
//     console.log(error)

// });

// console.log("I am executed before promise executes")