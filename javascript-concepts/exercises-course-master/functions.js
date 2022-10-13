// write reusable javascript with functions
function reusable() {
    return new Date();
}
console.log(reusable())

/* --- */

function reusable1() {
    console.log(new Date());
}
reusable1()

/* --- */

function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize(3, 5);
var volumeOne = getSize(3, 5, 2.7)[1];
console.log(areaOne)
console.log(volumeOne)

// use arrow functions to write concise anonymous functions
const magic = () => {
    return new Date();
};
console.log(magic())

/* --- */

const magic1 = () => {
    console.log(new Date());
};
magic1()

/* --- */

const getSize1 = (width, height, depth) => {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize1(3,5);
var volumeOne = getSize1(3,5,2.7)[0];
console.log(areaOne)
console.log(volumeOne)





