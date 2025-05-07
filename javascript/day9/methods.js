const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName())

person.greeting = function () {
    console.log('Hello' + this.firstName)
}

person.greeting();

let name1 = "broadway"
console.log(name1.toUpperCase())