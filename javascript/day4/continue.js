let count = 1;
for (count; count < 10; count++) {
    // console.log(count)
    if (count === 5) {
        console.log('inside:', count)
        continue;
    }
    console.log("outside:", count)
}