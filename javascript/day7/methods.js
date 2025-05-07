// let fruits = ["Orange", "Banana", "Mango", "Apple", "Kiwi"]
// let sortedFruits = fruits.toSorted();
// console.log(fruits)
// console.log(sortedFruits)

// fruits.sort();
// fruits.reverse();
// console.log(fruits)


// function compareValues(a, b) {
//     return a - b

// }


// let randomNumbers = [111, 1000, 23, 46, 83, 72, 55, 22, 11, 113, 9]

// 111-1000 => -889 => a shifts to left side and b shifts to right
/// 111-23 => 88 => b shift to left and  a shift to right



// randomNumbers.sort(compareValues);
// console.log(randomNumbers)

// let fruits = ["Orange", "Banana", "Mango", "Apple", "Kiwi"]

// let stringedArray = fruits.toString();
// console.log(fruits)
// console.log(stringedArray)

// console.log(fruits.at(2))

// let joined = fruits.join('******')
// console.log(fruits)
// console.log(joined)

// fruits.push('Papaya')
// fruits.pop()

// fruits.shift();
// fruits.unshift('Papaya')

// let fruits = ["Orange", "Banana", "Mango", "Apple", "Kiwi"]
// let drinks = ["Fanta", "Coke", "Pepsi"]
// let food = ["Momo", "Sandwich", "Sausage"]


// let concated = fruits.concat(drinks, food)
// console.log(concated)
// // delete fruits[2]

// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(1, 0, 2);
// console.log(fruits)

// const myArr = [[[1, 2], 2], [3, 4], [5, 6]];

// const newArr = myArr.flat(2);

// console.log(newArr)


// ES2019 added the Array flatMap() method to JavaScript.

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.


// const myArr = [1, 2, 3, 4, 5, 6];

// const newArr = myArr.flatMap(x => [x, x * 10]);


// console.log(newArr)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1, 2, "Lemon", "Kiwi");
let sliced = fruits.slice(0, 2)

console.log(sliced)
console.log(fruits)