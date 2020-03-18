// Challenge 1. Flattening
``
``
js
let arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];

function flatArray(arrays) {
    return arrays.reduce((acc, cv) => {
        acc.concat(cv)
        return acc;
    }, [])
}
``
``

// Your code here.
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
``
``
js

function ownLoop(value, test, update, body) {
    for (let value = n; test(value); value = update(value)) {
        body(value);
    }
}
``
``

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
    // Your code here.
    let newArray = array.reduce((acc, cv) => acc.concat(test(v)), []);
    return newArray.filter(el => el == false).length ? false : true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
    // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl