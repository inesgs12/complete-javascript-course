// Variables and Data Types

// var firstName = "John"; // string data type
// var lastName = "Smith";
// var age = 28; //number data type

// In JS, numbers are always float numbers even if the decimals are not defined.

// boolean
// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);
// job = "Teacher";
// console.log(job);

// all variable names must start with a _, $, or a letter.
// They can't start with reserved JS words

//--------
/* Variable Mutation and Type Coercion --------------------------
-----------------------------------------------------------------*/

//Type Coercion
// var firstName = "John";
// var age = 28;
// console.log(firstName + " " + age);
// // JS automatica coerced different types of data to combine them

// var job, isMarried;
// job = "teacher";
// isMarried = false;

// // Variable Mutation
// age = "twenty eight";
// job = "driver";

// alert(firstName + " is a " + age + " year old " + job);

// var lastName = prompt("What is his last name?");
// console.log(firstName + " " + lastName);

/* Basic Operators ----------------------------------------------
-----------------------------------------------------------------
----------------------------------------------------------------*/

//Math Operators
// var now = 2018;
// var ageJohn = 28;
// var ageMark = 33;
// var yearJohn = now - ageJohn;
// var yearMark = now - ageMark;
// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// //Logical Operators

// var johnOlder = ageJohn > ageMark; //boolean variable
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Hello World");

/* Operator Precedence -------------------
---------------------------------------------------------------------
-------------------------------------------------------------------- */
// var now = 2019;
// var yearJohn = 1986;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageMark = 35;
// var ageJohn = now - yearJohn;
// var average = (ageMark + ageJohn) / 2;
// console.log(average);

// // More operators

// x = x * 2;
// x *= 2; // Same thing for +, -, /

// x += 1;
// x++; // same thing, if we always want to add 1

/* Code Challenge 1 ----------------------
---------------------------------------------------------------------
--------------------------------------------------------------------- */
// var massJohn = 70;
// var heightJohn = 1.8;
// var bmiJohn = massJohn / (heightJohn * heightJohn);

// var massMark = 80;
// var heightMark = 1.9;
// var bmiMark = massMark / (heightMark * heightMark);

// var isMarkBmiMore = bmiMark > bmiJohn;
// console.log("Is Mark's BMI higher than John's?" + " " + isMarkBmiMore);

/* Code Challenge 2 -------------------
-----------------------------------------------------------------------
------------------------------------------------------------------------- */

// var johnsTeam = (89 + 120 + 103) / 3;
// var marksTeam = (122 + 94 + 123) / 3;
// var marysTeam = (97 + 137 + 105) / 3;
// console.log("John's team: " + johnsTeam);
// console.log("Mark's team: " + marksTeam);
// console.log("Mary's team: " + marysTeam);

// switch (true) {
//   case johnsTeam > marksTeam && johnsTeam > marysTeam:
//     console.log("John's team has the highest average score!");
//     break;
//   case marksTeam > johnsTeam && marksTeam > marysTeam:
//     console.log("Mark's team won!");
//     break;
//   case marysTeam > johnsTeam && marysTeam > marksTeam:
//     console.log("Mary's team won!");
//     break;
//   default:
//     console.log("There is a tie!!");
// }

/* Code Challenge 3 ------------------------------------------
------------------------------------------------------------------------------
--------------------------------------------------------------------------------*/

var bills = [124, 48, 268];
var totals = [];
var tips = [];

function calculateTip(bill) {
  if (bill < 50) {
    let tip = bill * 0.2;
    tips.push(tip);
    totals.push(bill + tip);
  } else if (bill < 200) {
    let tip = bill * 0.15;
    tips.push(tip);
    totals.push(bill + tip);
  } else {
    let tip = bill * 0.1;
    tips.push(tip);
    totals.push(bill + tip);
  }
}

calculateTip(124);
calculateTip(48);
calculateTip(268);
console.log(tips);
console.log(totals);
