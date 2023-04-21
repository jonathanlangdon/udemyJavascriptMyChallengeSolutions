// function calculator (num1, num2, operator) {
//   let result;
//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     default:
//       result = 'error not an operator'
//   }
//   return result;
// }

const calculator = (n1, n2, op) => {
  return /\+|\-|\*|\//.test(op) ? eval(n1 + op + n2) : 'error not an operator';
};

console.log(calculator(5, 2, '&'));
