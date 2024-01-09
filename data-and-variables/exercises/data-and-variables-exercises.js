// Declare and assign the variables below

let shuttleName = "Determination";

let shuttleSpeedMPH = 17500;
let marsDistanceKM = 225000000;
let moonDistanceKM = 384400;

let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMPH);
console.log(typeof marsDistanceKM);
console.log(typeof moonDistanceKM);
console.log(typeof milesPerKilometer);

// Calculate a space mission below

let milesToMars = marsDistanceKM * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMPH;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.")

// Calculate a trip to the moon below

let milesToMoon = moonDistanceKM * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.")