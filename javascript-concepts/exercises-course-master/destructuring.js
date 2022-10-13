// destructuring assignment

let a, b, rest;
[a, b] = [10, 20];
console.log(a); // expected output: 10
console.log(b); // expected output: 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // expected output: Array [30,40,50]

// ---

const name = ["jack", "pritom"];
// destructure array
const [firstName, lastName] = name;
document.getElementById('destructuring1').innerHTML = firstName + ' ' + lastName;
console.log(firstName, lastName);

// ---

const data = {
    id: 1,
    name: "jack pritom",
    loveMusic: true,
    species: "human",
};
// destructure 3rd and 4th items of array
const { loveMusic, species } = data;
document.getElementById('destructuring2').innerHTML = loveMusic + ' ' + species;
console.log(loveMusic, species)

