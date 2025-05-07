
// let userName = "Hari"
// let userAge = 23;
// let isEmployed = true
// let hobbies = ['Coding', "Designing", "Painting", "Playing"]

// let userName2 = "Rakesh"
// let userAge2 = 26
// let isEmployed2 = false;
// let hobbies2 = ["Coding", "Designing"]

// const user1 = {
//     name: "Hari",
//     age: 23,
//     isEmployed: true,
//     hobbies: ['Coding', "Designing", "Painting", "Playing"]
// }
// console.log(user1.age)

// user1.age = 24

// console.log(user1.age)



// let hobbies = ['Coding', "Designing", "Painting", "Playing"]
// hobbies[0]
// console.log(user1.hobbies[user1.hobbies.length - 1])
// console.log(user1.hobbies.length)

// console.log(user1.age)
// Dot notation
// console.log(user1["name"])
// Bracket Notatoion
// console.log()



// let user2 = {
//     name: "Rakesh",
//     age: 23,
//     isEmployed: true,
//     hobbies: ['Coding', "Designing", "Painting", "Playing"]
// }


const car = {
    brand: "toyota",
    color: 'red',
    topSpeed: 200,
    startPosition: 0,
    userManual: {
        docType: "pdf",
        pages: 30
    },
    start: function () {
        // here, start is a Method
        console.log('The car is started')
    },
    checkTopSpeed: function () {
        console.log(`This car has top speed ${this.topSpeed}`)
        // this.topSpeed += 10
    },
    moveCar: function (position) {
        this.startPosition += position
    }
}
// car.moveCar(500);
// car.moveCar(500);
// car.moveCar(50);
// car.moveCar(50);
// car.moveCar(500);
console.log(car.userManual.docType)




// car.checkTopSpeed()
// car.checkTopSpeed()
// console.log(car.topSpeed)
// car.checkTopSpeed()
