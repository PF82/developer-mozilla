// findIndex method

// // Arrow function
// findIndex((element) => { /* … */ })
// findIndex((element, index) => { /* … */ })
// findIndex((element, index, array) => { /* … */ })

// // Callback function
// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

// // Inline callback function
// findIndex(function (element) { /* … */ })
// findIndex(function (element, index) { /* … */ })
// findIndex(function (element, index, array) { /* … */ })
// findIndex(function (element, index, array) { /* … */ }, thisArg)

// ---

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (item) => item > 128;
console.log(array1.findIndex(isLargeNumber)); // expected output: 3

const result1 = array1.findIndex(item => item > 10);
console.log(result1)

const numbers = [4, 12, 16, 20];
const result = (item) => item > 10;
console.log(numbers.findIndex(result))


// ---

const data = [
    { id: 1, title: "first" },
    { id: 2, title: "second" },
    { id: 3, title: "third" },
    { id: 4, title: "fourth" },
];
// select 2nd object of array
const itemIndex = data.findIndex(item => item.id === 3);
document.getElementById('findIndex').innerHTML = itemIndex;

console.log(itemIndex)