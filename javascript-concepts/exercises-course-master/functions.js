// write reusable javascript with functions
function reusable() {
    return new Date();
}
console.log()

/* --- */

function reusable1() {
    console.log();
}
reusable1()

/* --- */

function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize()[];
var volumeOne = getSize()[];
console.log(areaOne)
console.log(volumeOne)

// use arrow functions to write concise anonymous functions
const magic = () => {
    return new Date();
};
console.log()

/* --- */

const magic1 = () => {
    console.log();
};
magic1()

/* --- */

const getSize1 = (width, height, depth) => {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize1()[];
var volumeOne = getSize1()[];
console.log(areaOne)
console.log(volumeOne)





