// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// // function myFunction(total, value, index, array) {
// //     return total + value;
// // }

// function myFunction(total, value) {
//     // return total + value
//     return total + value
// }

// const cartItems = [
//     { name: "Laptop", price: 1200, quantity: 1 },
//     { name: "Mouse", price: 25, quantity: 2 },
//     { name: "Keyboard", price: 75, quantity: 1 },
//     { name: "Monitor", price: 300, quantity: 2 },
// ];

// // Calculate total using reduce
// const totalCost = cartItems.reduce((acc, item) => {
//     return acc + item.price * item.quantity;
// }, 1000);

// console.log(`Total to pay: $${totalCost}`);


// const cartItems = [
//     { name: "Laptop", price: 1200, quantity: 1 },
//     { name: "Mouse", price: 25, quantity: 2 },
//     { name: "Keyboard", price: 75, quantity: 1 },
//     { name: "Monitor", price: 300, quantity: 2 },
// ];


// let totalCost = 100;

// for (let i = 0; i < cartItems.length; i++) {
//     // cartItems[0].price => 1200*1 => 1200
//     cartItems[1].price = 25* 2 => 50
//     // totalCost += cartItems[i].price * cartItems[i].quantity;
// }

// console.log(`Total to pay: $${totalCost}`);


// let totalCost = 0;

// cartItems.forEach(item => {
//     totalCost += item.price * item.quantity;
// });

// console.log(`Total to pay: $${totalCost}`);


// const numbers = [45, 4, 9, -16, -25];
// let sum = numbers.reduceRight(myFunction);

// function myFunction(total, value, index, array) {
//     return total + value;
// }
// console.log(sum)

// const words = ["world", " ", "Hello", "Namaste", "Hey"];
// const sentence = words.reduceRight((acc, word) => acc + word, "");
// console.log(sentence); // "Hello world"