// slice method

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2,5)); // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2,4)); // expected output: Array ["camel", "duck"]
console.log(animals.slice(1,5)); // expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(3,5)); // expected output: Array ["duck", "elephant"]
console.log(animals.slice(2,4)); // expected output: Array ["camel", "duck"]
console.log(animals.slice(0,5)); // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// ---

const data = [
    'Car',
    'Bus',
    'Helicopter',
    'Train'
]
 // expected output: Array ["Train"]
const newArray=data.splice(3,1)
document.getElementById('slice').innerHTML = newArray;
console.log(newArray)
