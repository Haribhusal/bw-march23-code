

let x = new Date();


let currentDay = x.getDay();
// let currentDay = 13

switch (currentDay) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tue")
        break;
    case 3:
        console.log("Today is Wed")
        break;
    case 4:
        console.log("Today is Thu")
        break;
    case 5:
        console.log("Today is Fri")
        break;
    case 6:
        console.log("Today is Sat")
        break;
    default:
        console.log("Enter something")
}

// let y = x.toISOString('en-;
// console.log(
//     x.toLocaleString('en-US', { hour: 'numeric', hour12: true })
// );

// let y = x.toLocaleString('en-US', { hour: "2-digit", hour12: false })

// console.log(y)