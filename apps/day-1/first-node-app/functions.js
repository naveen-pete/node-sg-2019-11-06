// function statement syntax
// function sum(a, b) {
//   return a + b;
// }

// function expression syntax, anonymous function
// const sum = function (a, b) {
//   return a + b;
// };

// ES6 - arrow function syntax 1
// const sum = (a, b) => {
//   return a + b;
// };

// ES6 - arrow function syntax 2
const sum = (a, b) => a + b;
// () => {}

// ES6 - arrow function syntax 3
const double = x => x * 2;

console.log(sum(10, 20));

console.log(double(100));
