let fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"]

// fruits.forEach(logAllValues)

// function logAllValues(item) {
//     console.log(item)
// }

// let newArray = fruits.map(addSaying)
// function addSaying(item) {
//     return "I Love" + item
// }
// console.log(newArray)

// let numbers = [2, 4, 6, 8]

// let squaredArray = numbers.map((item) => item * item)
// console.log(squaredArray)


// const numbers = [45, 4, 9, 16, 25];
// // let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//     console.log(value * 2)
//     // let txt = txt + value
// }
// console.log(numbers)

// console.log(txt)

// const numbers = [45, 4, 9, 16, 25];
// let newArray = numbers.map((item, idx) => {
//     return `${idx} -> ${item}`
// })

// console.log(newArray)


// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);
// console.log(newArr)


// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr)
// // document.getElementById("demo").innerHTML = newArr;


// const users = [
//     { name: "Alice", hobbies: ["Reading", "Cycling"] },
//     { name: "Bob", hobbies: ["Cooking"] },
// ];

// // const allHobbies = users.map(user => user.hobbies);
// const allHobbies = users.flatMap(user => user.hobbies);
// console.log(allHobbies[1])


// const data = ["apple", "banana", "", "mango"];

// const result = data.flatMap(item => item ? [item.toUpperCase()] : []);
// // Output: ["APPLE", "BANANA", "MANGO"]

// console.log(result)


// const sentences = ["I love JS", "FlatMap is cool"];

// const words = sentences.flatMap(sentence => sentence.split(" "));
// Output: ["I", "love", "JS", "FlatMap", "is", "cool"]

// let string = "Kathmandu"
// let character = string.split('')
// // console.log(character)
// let words = ''
// character.forEach(updateStrings)
// function updateStrings(item) {
//     words += item + '\n'
// }
// console.log(words)

// let string = "Kathmandu";
// let words = '';
// let current = '';

// string.split('').forEach(char => {
//     current = current + char
//     // current += char;     // build up one char at a time
//     // words += current + '\n';  // add to final string with newline
//     words = words + current
// });

// console.log(words);

