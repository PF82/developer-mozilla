// ARRAY METHODS / HIGH-ORDER FUNCTIONS

// 7-Use the map Method to Extract Data from an Array

// The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on 
// each element. It does this without mutating the original array.

// When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index 
// of that element and the third is the array upon which the map method was called.

// See below for an example using the map method on the users array to return a new array containing only the names of the users as elements. 
// For simplicity, the example only uses the first argument of the callback.

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const names = users.map(user => user.name);
// console.log(names);

// The console would display the value [ 'John', 'Amy', 'camperCat' ].

// The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects to the ratings 
// variable. Each movie in the new array should have only a title key with the name of the film, and a rating key with the IMDB rating. The code 
// in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.

// The global variable
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
];

// Only change code below this line
const ratings = [];


// Only change code above this line

console.log("map() method:", JSON.stringify(ratings1));

// ---

// 8-Implement map on a Prototype

// As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the 
// one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

// In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

// You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or 
// Array.prototype.forEach().

// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. 
// The Array instance can be accessed in the myMap method using this.


// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only change code below this line
    
    // Only change code above this line
    return newArray;
};

const new_s = s.myMap(function (item) {
    return item * 2;
});

console.log("map() method:", new_s)

// ---

// syntax:
// var new_array = arr.map(function callback(element, index, array) {
//     Return value for new_array
// }[, thisArg])

// double each element of the array
const numbers = [1, 2, 3, 4];


console.log("map() method:", doubled)

// ---

// double id elements and uppercase title elements of the array composed of objects
const Data = [
    { id: '1', title: "car" },
    { id: '2', title: "bus" },
    { id: '3', title: "plane" },
    { id: '4', title: "train" },
    { id: '5', title: "ship" },
]


console.log("map() method:", upperData)

console.log("map() method:", doubledData)

// ---

// 9-Use the filter Method to Extract Data from an Array

// Another useful array function is Array.prototype.filter(), or simply filter().

// filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns 
// true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original 
// array.

// The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that 
// element and the third is the array upon which the filter method was called.

// See below for an example using the filter method on the users array to return a new array containing only the users under the age of 30. For 
// simplicity, the example only uses the first argument of the callback.

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const usersUnder30 = users.filter(user => user.age < 30);
// console.log(usersUnder30); 

// The console would display the value [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].

// The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a 
// new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. 
// Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations 
// on them.

// The global variable
const watchList1 = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    }
];

// Only change code below this line
const filteredList = 
    .filter(movie => movie.rating >= 8);
// Only change code above this line

console.log("filter() method:", filteredList);

// ---

// 10-Implement the filter Method on a Prototype

// You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or 
// Array.prototype.forEach().

// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter 
// method. The Array instance can be accessed in the myFilter method using this.

// The global variable
const s1 = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    const newArray = [];

    // Only change code above this line
    return newArray;
};

const new_s1 = s.myFilter(function (item) {
    return item % 2 === 1;
});

// ---

// syntax:
// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[, thisArg])

// odd numbers are "filtered" out
const numbers1 = [1, 2, 3, 4];


console.log("filter() method:", evens);

// ---

// get all the students whose grades are greater than or equal to 90
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];


console.log("filter() method:", studentGrades)

// ---

const Data1 = [
    { id: '1', title: "car" },
    { id: '2', title: "bus" },
    { id: '3', title: "plane" },
    { id: '4', title: "train" },
    { id: '5', title: "ship" },
]

console.log("filter() method:", filterData)

// ---

// 15-Use the reduce Method to Analyze Data

// Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve almost any array 
// processing problem using the reduce method.

// The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as 
// special applications of reduce. The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, 
// array). This is achieved via a callback function that is called on each iteration.

// The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the 
// callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and 
// the fourth is the array upon which reduce is called.

// In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second 
// parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

// See below for an example using reduce on the users array to return the sum of all the users' ages. For simplicity, the example only uses the 
// first and second arguments.

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
// console.log(sumOfAges);

// The console would display the value 64.

// In another example, see how an object can be returned containing the names of the users as properties with their ages as values.

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const usersObj = users.reduce((obj, user) => {
//   obj[user.name] = user.age;
//   return obj;
// }, {});
// console.log(usersObj);

// The console would display the value { John: 34, Amy: 20, camperCat: 10 }.

// The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies 
// directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create 
// other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and 
// need to be converted into numbers before they are used in any mathematical operations.

// The global variable
const watchList2 = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    }
];

function getRating(watchList2) {
    // Only change code below this line
    let averageRating = 

    // Only change code above this line
    return averageRating;
}

console.log("reduce() method", getRating(watchList2));

// ---

// syntax:
// arr.reduce(callback[, initialValue])

// add every number together in an array of numbers
const numbers2 = [1, 2, 3, 4];


console.log("reduce() method:", sum)

// ---

var pets = ['duck', 'chicken', 'cat', 'duck', 'chicken', 'chicken', 'rabbit'];



console.log("reduce() method:", petCounts);

// ---

// 16-Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

// Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply 
// them to solve a more complex challenge.

// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new 
// array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to 
// it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.

const squareList = arr => {
    // Only change code below this line
  
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log("map() and filter() methods:", squaredIntegers);

// https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
// https://dev.to/jps27cse/learn-this-before-react-4hpl

