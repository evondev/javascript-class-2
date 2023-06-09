// const total = 5 + 7;
// const sum = 8 + 12;
// const add = sum2Number(7, "9");
const str =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum nobis quidem quam dolores? Sit doloribus officiis mollitia optio, aperiam ea vero temporibus expedita aliquid sunt, architecto esse officia libero.";
const result = str.slice(0, 10) + "***";
const result1 = str.slice(0, 20) + "...";
const result2 = str.slice(0, 30) + "___";
const result3 = str.slice(0, 40) + "---";
// 1. Function Declaration
function truncateString(str, amount, ext = "___") {
  // body code of function
  // execution context
  if (
    typeof str !== "string" ||
    typeof amount !== "number" ||
    typeof ext !== "string"
  ) {
    return null;
  }
  const results = str.slice(0, amount) + ext;
  return results;
}
console.log(
  truncateString(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error impedit molestiae nam itaque delectus dolore dolores nesciunt ipsam dolor. Animi reprehenderit enim autem illum ullam placeat quidem quos vitae?",
    50
  )
);
// 2. Function Expression
const truncateString2 = function () {};
// truncateString2();
// 3. Arrow function
const truncateString3 = (str, amount, ext = "___") =>
  str.slice(0, amount) + ext;
// 4. Callback
function calculate(a, b, callback) {
  if (
    typeof callback !== "function" ||
    typeof a !== "number" ||
    typeof b !== "number"
  )
    return 0;
  const total = callback(a, b);
  return total;
}
function total(a, b) {
  return a + b;
}
console.log(calculate(5, 10, total));
console.log(calculate(5, 10, (a, b) => a - b));
// console.log(calculate(5, 10, (a, b) => a + b));
// console.log(calculate(5, 10, (a, b) => a / b));
// 5. Closure
function makeFunc() {
  // makeFunc scope
  // makeFunc execution context
  const name = "Mozilla";
  function displayName() {
    // displayName scope
    // displayName execution context
    console.log(name);
  }
  return displayName;
}
/**
 * Backpack
 * // makeFunc scope
  // makeFunc execution context
  const name = "Mozilla";
  function displayName() {
    // displayName scope
    // displayName execution context
    console.log(name);
  }
 */

const myFunc = makeFunc();
console.log("myFunc:", myFunc);
// myFunc: displayName(){console.log(name);}
// console.log("myFunc:", myFunc);
// myFunc();
// displayName()
function makeAdder(x) {
  // makeAdder execution context
  return function (y) {
    // function execution context
    return x + y;
  };
}
const add = makeAdder(5);
console.log("add:", add(10));
{
  /*
    function recursion() {
      recursion();
    }
    factorial: 3! = 3 * 2 * 1 -> 6
    factorial: 5! = 5 * 4 * 3 * 2 * 1 = 5 * 4!
    4! = 4 * 3!
    3! = 3 * 2!
    2! = 2 * 1!
    1! = 1 * 0!;
    n! = n * (n - 1)!
    n * factorial(n - 1)
    */
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(10));
}
