// slice method

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice()); // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice()); // expected output: Array ["camel", "duck"]
console.log(animals.slice()); // expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice()); // expected output: Array ["duck", "elephant"]
console.log(animals.slice()); // expected output: Array ["camel", "duck"]
console.log(animals.slice()); // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// ---

const dataSlice = [
    'Car',
    'Bus',
    'Helicopter',
    'Train'
]
 // expected output: Array ["Train"]

document.getElementById('slice').innerHTML = newArraySlice;
console.log(newArraySlice)
