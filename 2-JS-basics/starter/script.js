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
var now = 2019;
var yearJohn = 1986;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageMark = 35;
var ageJohn = now - yearJohn;
var average = (ageMark + ageJohn) / 2;
console.log(average);

// More operators

x = x * 2;
x *= 2; // Same thing for +, -, /

x += 1;
x++; // same thing, if we always want to add 1
