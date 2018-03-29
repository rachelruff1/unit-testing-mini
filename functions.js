const returnTwo = () => 2;

const greeting = name => `Hello, ${name}`;

const add = (num1, num2) => {
  return Math.round(num1) + Math.round(num2);
};

const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const subtract = (num1, num2) => num1 - num2;

module.exports = {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract
};