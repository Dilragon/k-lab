/*1
console.log(myVar);
var myVar = "Hello, World!";
console.log(myVar); // This will log 'undefined' first, then 'Hello, World!'
*/

/*2
let letScope = "I am a let variable"; // This can be changed
const constScope = "I am a const variable"; // This cannot be changed
var varScope = "I am a var variable"; // This will be hoisted
*/

/*3
let x = 10;
if (true) {
    let x = 20;
    console.log(x);
}
console.log(x); // The output will be 20 and then 10, demonstrating block scope with the same variable
*/

/*4
const person = {
    name: "Alex"
};
person.name = "John"; // it's valid to change the property of a const object
console.log(person.name);

person = { name: "Mary" }; // This will throw an error because you cannot reassign a const variable
*/

/*5
console.log("10" + 5); // It just concatenates the string and number
console.log("10"- 5); // It cannot be concatenated, so it converts the string to a number and subtracts
*/

/*6console.log(Boolean("")); //False, an empty string is falsy
console.log(Boolean(0)); //False, zero is falsy
console.log(Boolean(null)); //False, null is falsy
console.log(Boolean([])); //True, an empty array is truthy
*/

/*7
console.log(typeof null); //object - this is a known JavaScript mistake
*/

/*8
// null and undefined difference is that null is an intentional absence of any object value, while undefined means a variable has been declared but not assigned a value
// null example
let a = null;
console.log(a);
// undefined example
let b;
console.log(b);
*/

/*9
let score = 75; // Example score
let grade; // Declaration of variable
// Determine the grade based on the score
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "D";
}
console.log(grade); // Output the grade
*/

/*10
let age = 20;
let message;

if (age >= 18 ? true : false) {
    message = "Adult";
} else {
    message = "Minor";
}

console.log(message);
*/

/*11
if (0 == false) { //The expression returns true because 0 is falsy
    console.log("First");
}

if ("" == false) { //The expression returns true because an empty string is falsy
    console.log("Second");
}

if ([] == false) { //The expression returns true because an empty array is falsy
    console.log("Third");
}
*/

/*12
if ("0") { //value is truthy
    alert("Hello");
}
*/

/*13
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < 1; j++) {
        console.log(Math.pow(i, 2));
    }
}
*/

/*14
for (let i = 0; i < 3; i++) {
    console.log(`Outer loop: ${i}`);
    for (let j = 0; j < 2; j++) {
        console.log(` Inner loop: ${j}`);
    }
}*/
/*Output:Outer loop: 0
          Inner loop: 0
          Inner loop: 1
         Outer loop: 1
          Inner loop: 0
          Inner loop: 1
         Outer loop: 2
          Inner loop: 0
          Inner loop: 1
*/

/*15
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
// Your for loop here
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum); // Should print 150
*/

/*16
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break; // Exit the loop when i is 6
    }
    console.log(i);
}
*/

/*17
// Fully hoisted
function greet() {
    console.log("Hi!");
}

// Not hoisted
const greeting = function() {
    console.log("Hello!");
}
*/

/*18
function getRectangleArea(length, width) {
    console.log(length * width);
}

getRectangleArea(5, 10);
*/

/*19
function greet(name) {
    console.log("Hello, " + name);
}

let result = greet("World");
console.log(result); // Output: Hello, World and undefined since greet does not return anything
*/

/*20
const add = (a, b) =>  a + b; // Arrow function is esier and convinient than function declaration
*/