const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let n = input.question("How many letters should be shifted? ");

if (n > str.length) {
    console.log(`${n} is too many letters! Defaulting to 3.`);
    n = 3;
}

let newStr = str.slice(n) + str.slice(0, n);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${str} with ${n} letters shifted is ${newStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
