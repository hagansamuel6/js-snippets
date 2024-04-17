let million = 1_000_000_000 //under_score as the thousand seperator
let bytes = 0x89_AB_CD_EF; // As a bytes separator.
let bits = 0b0001_1101_0111; // As a nibble separator.
let fraction = 0.123_456_789; // Works in the fractional part, too.

const GRAVITY_CONST = 9.8;

//the math object methods
console.log(Math.round(.9))
console.log(Math.ceil(23.4))
console.log(Math.round(Math.random() * 10)) // get a random between one and ten

//not a number value
console.log(0/0)

console.log(parseInt('989'))  // convert a string number to an integer
console.log(parseFloat('23.90')) //convert a string decimal to an integer
console.log(Number.isInteger('ls')) //true if is an integer
console.log(Number.isNaN('lis')) //tell if value is not a number NaN

//floating point numbers arent exactly the same so cant be compared with ===, 
let ans = 0.2 - 0.1;
let anstwo = 0.3 - 0.2;

console.log(ans === anstwo); // false 

//bigInt(); for 64bit integers, really big numbers
let sampleBigInt = BigInt(Number.MAX_SAFE_INTEGER); // largest possible 32bit number
let otherBigInt = 1000n; //usually postfixed number n
console.log(otherBigInt)

//Dates 
let timestamp = Date.now(); //timestamp since 1970
console.log(timestamp);

let nowObj = new Date('2024-10-10');
console.log('date', nowObj.getTime()); //milliseconds
console.log(nowObj.toISOString()); //iso formatted date string, 2024-10-10T00:00:00.000Z
console.log(Date.parse('2024-10-10')); //
console.log(nowObj.toDateString()); //Thu Oct 10 2024

