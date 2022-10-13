// promises

// javascript async/await
// https://www.w3schools.com/js/js_async.asp
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

        if (!response.ok) throw new Error(response.status);
        const result = await response.json();
        return result;
    } catch (e) {
        console.log();
    }
};

// javascript promises
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
// https://www.w3schools.com/js/js_promise.asp

// 28-Handle a Fulfilled Promise with then

// Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), 
// often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do 
// something with the response from the server. This can be achieved by using the then method. The then method is executed immediately 
// after your promise is fulfilled with resolve. Here’s an example:

// myPromise.then(result => {

// });
// result comes from the argument given to the resolve method.

// Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

const makeServerRequest1 = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest1.then(result => {
    console.log();
});

//document.getElementById("demo").innerHTML = "";

// 29-Handle a Rejected Promise with catch

// catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

// myPromise.catch(error => {

// });
// error is the argument passed in to the reject method.

// Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest2.catch(error => {
    console.log();
});