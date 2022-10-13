// rest parameter

function sum(...theArgs) {
    let total = 0;
   
    return total;
}
console.log(sum()); // expected output: 6
console.log(sum()); // expected output: 10

// ---

const getSize = (...args) => {
  
};
document.getElementById('rest').innerHTML = getSize(1, 2, 3) + `<br/>` + getSize(10, 20, 30, 100);
console.log(getSize()); // expected output: 3
console.log(getSize()); // expected output: 5