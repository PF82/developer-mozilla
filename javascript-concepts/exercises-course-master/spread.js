// spread syntax

function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // expected output: 6
console.log(sum.apply(null, numbers)); // expected output: 6

// ---

// same principle as above
const introduction = ["my", "name", "is", "jack"];
const copyArr = [...introduction];


document.getElementById('spread').innerHTML = copyArr;
console.log(copyArr);
console.log(...copyArr);
