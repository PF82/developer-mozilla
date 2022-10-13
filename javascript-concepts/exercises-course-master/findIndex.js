// findIndex method

// Arrow function
findIndex((element) => { /* … */ })
findIndex((element, index) => { /* … */ })
findIndex((element, index, array) => { /* … */ })

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Inline callback function
findIndex(function (element) { /* … */ })
findIndex(function (element, index) { /* … */ })
findIndex(function (element, index, array) { /* … */ })
findIndex(function (element, index, array) { /* … */ }, thisArg)

// ---

const array1 = [5, 12, 8, 130, 44];

console.log(array1.findIndex(isLargeNumber)); // expected output: 3

// ---

const data = [
    { id: 1, title: "first" },
    { id: 2, title: "second" },
    { id: 3, title: "third" },
    { id: 4, title: "fourth" },
];
// select 2nd object of array

document.getElementById('findIndex').innerHTML = itemIndex;

console.log(itemIndex)