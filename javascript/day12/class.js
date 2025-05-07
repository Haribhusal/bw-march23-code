// class ClassName {
//     constructor() { }
// }


// class Car {

//     constructor(name, year, model) {
//         this.name = name;
//         this.year = year;
//         this.model = model
//     }
// }


// const myCar1 = new Car();
// console.log(myCar1.model)


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
//     }
// }

// const john = new Person("John", 30);
// john.greet(); // Hello, I'm John and I'm 30 years old.



// class MathUtil {
//     static square(n) {
//         return n * n;
//     }
// }

// console.log(MathUtil.square(4)); // 16


// let objInstance = new MathUtil();
// console.log(objInstance.square(7));


// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     get area() {
//         return this.width * this.height;
//     }
//     set area(value) {
//         this.width = value / this.height;
//     }
// }
// const rect = new Rectangle(10, 2);
// console.log(rect.area); // 20
// rect.area = 40;

// console.log(rect.width); // 20



// class Vehicle {
//     constructor(brand) {
//         this.brand = brand;
//     }

//     start() {
//         console.log(`${this.brand} is starting.`);
//     }
// }

// class Car extends Vehicle {
//     drive() {
//         console.log(`${this.brand} is driving.`);
//     }
// }

// const car = new Car("Toyota");
// car.start(); // Toyota is starting.
// car.drive(); // Toyota is driving.




// class Parent {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Child extends Parent {
//     constructor(name, age) {
//         // super(name); // Call the parent class constructor
//         this.age = age; // Now you can use `this`
//     }

//     getName() {
//         console.log(this.name)
//     }
// }

// let person = new Child('Hari', 30)
// person.getName();


class BankAccount {
    #balance = 0;

    constructor(initialAmount) {
        this.#balance = initialAmount;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}



const acc = new BankAccount(100);
acc.deposit(50);
console.log(acc.getBalance()); // 150
// console.log(acc.#balance); // ❌ Syntax Error
