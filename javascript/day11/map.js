// // const myMap = new Map();

// // // console.log(typeof myMap);


// // // myMap.set('name', 'John');
// // // myMap.set('age', 30);
// // // myMap.set('isAdmin', true);

// // // console.log(myMap.get('name')); // John
// // // // console.log(myMap.has('age'));  // true
// // // // console.log(myMap.size);        // 3



// // // const user = { id: 1 };
// // // const settings = new Map();

// // // settings.set(user, { theme: 'dark' });

// // // console.log(settings.get(user)); // { theme: 'dark' }
// // // // console.log(user)


// // // const map = new Map([
// // //     ['a', 1],
// // //     ['b', 2],
// // //     ['c', 3]
// // // ]);

// // // for (const [key, value] of map) {
// // //     console.log(`${key} => ${value}`);
// // // }

// // // const map = new Map([
// // //     ['x', 10],
// // //     ['y', 20]
// // // ]);

// // // const arr = Array.from(map);
// // // console.log(arr); // [ ['x', 10], ['y', 20] ]

// // // Convert Object to Map
// // // const obj = { name: 'Alice', age: 25 };
// // // const map = new Map(Object.entries(obj));

// // // console.log(map.get('name')); // Alice


// // // const map = new Map([
// // //     ['brand', 'Toyota'],
// // //     ['year', 2022]
// // // ]);

// // // const obj = Object.fromEntries(map);
// // // console.log(obj); // { brand: 'Toyota', year: 2022 }


// // // let letters = ['e', "a", "i", "o", "u"]
// // // letters = [];

// // // console.log(letters)

// // // const map = new Map();
// // // map.set('x', 100);
// // // map.set('y', 200);
// // // map.delete('x'); // removes key 'x'
// // // // map.clear();     // removes all entries

// // // console.log(map)


// // // const chars = ['a', 'b', 'a', 'c', 'a', 'b'];
// // // const countMap = new Map();

// // // for (const char of chars) {
// // //     countMap.set(char, (countMap.get(char) || 0) + 1);
// // // }

// // // console.log(countMap); // Map(3) { 'a' => 3, 'b' => 2, 'c' => 1 }



// const arr = ['a', 'b', 'a', 'c', 'a', 'b'];
// // const result = [["a", 1],];

// // for (let i = 0; i < arr.length; i++) {
// //     const item = arr[i];
// //     // Check if item already added in result
// //     const existing = result.find(([key]) => key === item);

// //     if (existing) {
// //         existing[0]++; // increase count
// //     } else {
// //         result.push([item, 1]); // add new entry


// //     }
// // }

// // console.log(result); // [ ['a', 3], ['b', 2], ['c', 1] ]