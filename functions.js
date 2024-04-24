/**
 * sample function definition, this isnt 
 * 
 * @param {string} x 
 */
let sampFunc = function (x) {
    
}

sampFunc()

/**
 * another way to define a function
 * 
 */
function sampFuncTwo(){

}

sampFuncTwo()




//optional calling of a function
//prevent throwing if function is null or undefined
//error will be thrown if the function doesnt exist
sampFuncThree = null;  //or undefined
sampFuncThree?.(); 

let f = null; x = 1;

try {
    f(x++) // error, x will be incremented
} catch (error) {
    console.log('x', x);
}

f?.(x++); //no error, x not incremented.

let o = {};

o.m() // regular access and invocation
o?.m() // conditional access , regular invocation
o.m?.() // regular access, conditional invocation


