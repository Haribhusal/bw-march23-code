const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

delete person.age;
console.log(person.age)
person.age = 23

console.log(person.age)
