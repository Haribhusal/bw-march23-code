const items = ["apple", "banana", "rotten apple", "rotten mango", "cherry"];

// for (let i = 0; i < items.length; i++) {
//     if (items[i].includes("rotten")) {
//         console.log(`Skipping: ${items[i]}`);
//         continue; // skip processing for rotten items
//     }
//     console.log(`Processing: ${items[i]}`);
// }

// let i = 0;
// while (i < items.length) {
//     if (items[i].includes('rotten')) {
//         console.log(`Print ${items[i]} `)
//         continue
//     }
//     i++;
//     console.log(`Display  ${items[i]}`)

// }

let i = 0;
while (i < items.length) {
    if (items[i].includes('rotten')) {
        console.log(`Print ${items[i]}`);
        i++; // increment after handling rotten
        continue;
    }

    console.log(`Display ${items[i]}`);
    i++; // increment after displaying normal item
}