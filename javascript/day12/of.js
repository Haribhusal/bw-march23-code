const yourobject = {
    name: "Hari",
    college: "Patan"
}

for (let key in yourobject) {
    // if (yourobject.hasOwnProperty(key)) {
    console.log(key, yourobject[key]);
    // }
}

for (let [key, value] of Object.entries(yourobject)) {
    console.log(key, value);
}