// Create a new Set
const mySet = new Set();

// Add values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // This will not be added since 2 is already in the Set

console.log(mySet); // Output: Set { 1, 2, 3 }

// Check if a value exists in the Set
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(4)); // Output: false

// Remove a value from the Set
mySet.delete(2);
console.log(mySet); // Output: Set { 1, 3 }

// Get the size of the Set
console.log(mySet.size); // Output: 2

// Iterate over the Set
mySet.forEach(value => {
    console.log(value); // Output: 1, then 3
});

// Convert Set to an Array
const myArray = Array.from(mySet);
console.log(myArray); // Output: [1, 3]


