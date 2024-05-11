//ways of creating arrays
//array literal
let arrayOne = ["one", "two"];

let arrayThree = ["three"];

//spread operator
let arrayTwo = [...arrayOne, ...arrayThree];

console.log(arrayTwo);

//array obj, Array(10) specifies a size
let arrFour = new Array();
arrFour[0] = "one";

let arrFive = new Array(10, 20, 30); //with more than one arg, it becomes an array with those element

console.log(arrFive);


//array with one element can have more than one element
let arrSix = Array.of(90);
console.log('arrSix', arrSix);

let obj = {
    item1: "one",
    item2: "two"
}

let arrFrom = Array.from(obj);
console.log("array from array like object",arrFrom); //obj not arraylike