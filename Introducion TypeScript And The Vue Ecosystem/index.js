/*
This function receives two parameters, a and b,
 which both have their type set to number,
 and the function is expected to return a number. We made two variables,
  firstNumber and secondNumber,
  which in this case are both set to a number type—10 and 20 respectively—so,
   it's valid to pass to the function.
   If we had set it to any other type
   such as a string, Boolean, float, or an array,
   the compiler would have thrown an error about
   the static type checking on the variable and the function execution.
*/
function sum(a, b) {
    return a + b;
}
var firstNumber = 10;
var secondNumber = 20;
console.log(sum(firstNumber, secondNumber));


