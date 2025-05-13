
// A function that takes a callback
function greetUser(name, callback, callback2) {
  console.log("Hello, " + name);
  callback(); // calling the callback function
  callback2();
}

// Callback function definition
function sayGoodbye() {
  console.log("Goodbye!");
}

// Callback function definition
function sayGoodbyeTwo() {
  console.log("Goodbye Two!");
}



// Call greetUser and pass sayGoodbye as the callback
greetUser("Ishan");

