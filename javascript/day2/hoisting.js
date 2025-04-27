// console.log(name)
// var age;
var ageofSecondPerson;
// let name;

//this is hoisting

// var age = 23;

if (true) {
    var age = 23, ageofSecondPerson = 34;
    console.log('age is', ageofSecondPerson)
} else {
    console.log(age)
}

// let is block scoped variable
// 

console.log(ageofSecondPerson)