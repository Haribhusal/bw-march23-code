const inputDate = new Date();

const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // getMonth is 0-based
const day = String(inputDate.getDate()).padStart(2, '0');

const year = String(inputDate.getFullYear());


const formattedDate = `${month}-${day}-${year}`;

console.log(formattedDate); // Output: "03-25-2015"

// console.log(typeof year)
