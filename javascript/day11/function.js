// const obj = {
//     name: "Arrow",
//     arrowFunc: () => {
//         console.log(this.name); // undefined
//     },
//     regularFunction: function () {
//         console.log(this.name); // "Arrow"
//     }
// };

// obj.arrowFunc();
// obj.regularFunction();


// function regularFunc() {
//     console.log(arguments); // works
// }
// const arrowFunc = () => {
//     console.log(arguments); // ReferenceError
// }

// regularFunc(2, 3, 4)
// arrowFunc(4, 5, 6)


// const Arrow = () => { };
// // new Arrow(); ❌ TypeError

// function Regular() { }
// new Regular(); // ✅ Works




// console.log(() => { }.prototype); // undefined
// console.log(function () { }.prototype); // object