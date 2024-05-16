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
