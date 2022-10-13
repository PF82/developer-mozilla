// rest parameter

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}
console.log(sum(2, 4)); // expected output: 6
console.log(sum(3, 3, 4)); // expected output: 10

// ---

const getSize = (...args) => {
    return args.length;
};
document.getElementById('rest').innerHTML = getSize(1, 2, 3) + `<br/>` + getSize(10, 20, 30, 100);
console.log(getSize(2, 4, 6)); // expected output: 3
console.log(getSize(3, 6, 9, 12, 15)); // expected output: 5