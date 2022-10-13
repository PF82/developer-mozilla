// splice method

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1
console.log(months); // expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May'); // replaces 1 element at index 4
console.log(months); // expected output: Array ["Jan", "Feb", "March", "April", "May"]

// ---

const data = [
    'Car',
    'Bus',
    'Helicopter',
    'Train'
]
// add plane word to end of array
const copyArray = [...data];
copyArray.splice(copyArray.length,1,"Plane")
document.getElementById('splice1').innerHTML = newArray;
console.log(copyArray)
// remove car word from array
// const newArray1 = data.splice(0, 1)
// document.getElementById('splice2').innerHTML = newArray1;
// console.log(newArray1)
