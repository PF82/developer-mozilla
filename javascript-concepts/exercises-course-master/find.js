// find method

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(item => item > 10);
console.log(found); // expected output: 12

// ---

const data = [
    { id: 1, title: "first" },
    { id: 2, title: "second" },
    { id: 3, title: "third" },
    { id: 4, title: "fourth" },
];
// select 2nd object from array
const item = data.find(item => item.id === 2);
// document.getElementById('find').innerHTML = item;
console.log(item)