// map() method

const array1 = [1, 4, 9, 16];
// pass a function to map; double each item of the array
const map1 = array1.map(number => number * 2);
console.log(map1); // expected output: Array [2, 8, 18, 32]

// ---

const data = [
  { id: '1', title: "car" },
  { id: '2', title: "bus" },
  { id: '3', title: "plane" },
  { id: '4', title: "train" },
  { id: '5', title: "ship" },
]
// convert title properties in uppercase
const upperData = data.map(item => item.title.toUpperCase())
document.getElementById('map1').innerHTML = upperData;
console.log(upperData)

// ---

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
// extract all names from array
const names = users.map(item => item.name)
document.getElementById('map2').innerHTML = names;
console.log(names);