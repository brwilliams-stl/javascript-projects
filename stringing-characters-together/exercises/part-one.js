let num = 123.45;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decimal = 123.45;
let strDecimal = String(decimal).replace(".", "");

console.log(strDecimal.length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

let numString = String(num);

if (numString.includes(".")) {
    numString = numString.replace(".", "");
}

console.log(numString.length);