// Create an Object
const person = new Object();
const person2 = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
person.hobbies = ["Playing", "Coding"]

// console.log(person.hobbies)

person.secondObject = {
    name: "Hello"
}
console.log(person.secondObject.name)