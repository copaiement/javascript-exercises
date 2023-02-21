//add two numbers
const add = function(num1, num2) {
	return (num1 + num2);
};

//subtract two numbers
const subtract = function(num1, num2) {
	return (num1 - num2);
};

//give sum of array
const sum = function(array) {
	const total = array.reduce((sum, num) => {
    return (sum + num);
  }, 0);
  return total;
};

//multiply an array

//original code.

// const multiply = function(array) {
//   const product = array.reduce((total, num) => {
//     return (total * num);
//   }, 1);
//   return product;
// };

//multiply proper solution. 
const multiply = function(array) {
  return array.length
    ? array.reduce((total, num) => total * num)
    : 0;
};

//one number to the power of another
const power = function(num1, num2) {
	const power = num1 ** num2;
  return power;
};

const factorial = function(num) {
	let fact = 1;
  if (num === 0) {
    return fact;
  } else {
    while (num > 1) {
      fact *= num;
      num --;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
