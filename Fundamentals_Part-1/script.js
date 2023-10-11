
/*
40 + 8 + 23 - 10 // no longer accessable to console
console.log(40 + 8 + 23 - 10); // accesable

console.log("DEVESH");

let firstName = "SAHIL";
console.log(firstName);

// let 6feof = 3; // syntax error
// let jon& sdgs = "ddd"; // syntax error


// BMI calculator

const prompt = require('prompt-sync')();
const bodyWeight = parseInt(prompt('Body Weight in (kg): '));
const height = parseInt(prompt('Height in (cm): '));
const bmi = bodyWeight / ((height ** 2) / 10000);
console.log(bmi);


const scoreBull = (97 + 112 + 101) / 3;
const scoreLion = (109 + 95 + 106) / 3;
console.log(scoreBull, scoreLion);

if (scoreBull > scoreLion >= 100) {
    console.log('scoreBull win the Trophy');
} else if (scoreBull < scoreLion >= 100) {
    console.log('scoreLion win the Trophy');
} else if ((scoreBull === scoreLion) && scoreBull >= 100 && scoreLion >= 100) {
    console.log('Both win the Trophy');
} else {
    console.log('No one win the Trophy');
}


// Giving tips for someone accordingly 
const input = require('prompt-sync')();
const bill = parseInt(input("Write down your bill amount : "));
const tip = bill <= 500 && bill >= 100 ? bill * 0.20
    : bill * 0.15;
console.log(`The bill is ${bill}, The tip is ${tip}, and the total value is ${bill + tip}`);
*/