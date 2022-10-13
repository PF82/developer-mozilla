// reduce method

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
// sum of all items
const sumWithInitial = array1.reduce((sum, item) => sum + item + initialValue)
console.log(sumWithInitial); // expected output: 10

// ---

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];
// sum of all ages
const sumOfAges = users.reduce((sum, item) => sum + item.age, 0)
document.getElementById('reduce').innerHTML = sumOfAges;
console.log(sumOfAges)