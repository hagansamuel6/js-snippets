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

//with more than one arg, it becomes an array with those element
//with one arg, it becomes the size of the new array
let arrFive = new Array(10, 20, 30);

console.log(arrFive);

//array with just one element but can have more than one element
let arrSix = Array.of(90);
console.log("arrSix", arrSix);

let obj = {
  item1: "one",
  item2: "two",
};

let arrFrom = Array.from(obj);
console.log("array from array like object", arrFrom); //obj not arraylike

//check for an index existing in the array
let arrCheck = 0 in arrSix; //index zero in array

//check the length of an array
let arrLength = arrSix.length;

//adding elements to the end of an array
arrSix.push("one", "two");

//remove the last element and return it
arrSix.pop();

//adding elements to the start of the array
arrSix.unshift("startOne", "startTwo");

//remove the first element and return it.
arrSix.shift();

//delete an element from the array
delete arrSix[0]; // no element at index 0 now, the array becomes sparse

//the splice method,

//use for of, to loop through an array

for (let item of arrSix) {
  //item is each item in the loop
}

//to get the indexes
for (let [index, item] of arrSix.entries()) {
  //index and item
  item += item + " 1";
}

//we can use the foreach loop as well
let arrRes = new Array();

//for sparse arrays it does not invoke the element,
arrSix.forEach((item) => {
  arrRes.unshift(item + "1");
});

console.log(arrRes);

let data = [1, 2, 3, 4, 5];
let sum = 0;

data.forEach((value) => (sum += value));
console.log("sum", sum);
console.log("data", data);
data.forEach((item, index, array) => {
  array[index] = ++item;
});
console.log("data", data);

let multiples = data.map((element) => ++element);
console.log("data", multiples);

let filter = data.filter((item) => item % 2 == 0); // return items that pass the test
console.log("filtered data", filter);

let found = data.find((item, index) => index == 3); //return first item that meets the condition, return undefined if nothing found
console.log("found", found);

let foundIndex = data.findIndex((item) => item / 2 == 0); //find the index of the first item found, returns -1 if nothing found

let everyItem = data.every((item) => item / 2 == 0); // returns true if the passed function returns true for all items

let someItem = data.some(item => item == 3); // if the first test passed, returns true

let someIsNan = data.some(isNaN);
