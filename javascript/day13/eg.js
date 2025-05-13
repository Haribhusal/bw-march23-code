function doMath(a, b, callback) {
    return callback(a, b);
}

const result = doMath(5, 3, (x, y) => x + y); // Multiplication
console.log(result); // 15