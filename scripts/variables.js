// 0. console.log(value)
console.log("Hello Javascript");
// 1. Variables
// 1.1 Declaration: var, let, const
// example var variableName = value;
// example let variableName = value;
// example const variableName = value;
// 1.2 variableName -> start with a-z,$,_
var myName = "evondev";
let age = 29;
age = 30;
console.log("age:", age);
const gender = "male";
// gender = "female";
// console.log("gender:", gender);
var course = "javascript";
var course = "javascript";

if (age > 20) {
  var score = 90;
}
// console.log("score:", score);
// console.log("course:", course);
// const let = 5;
// let 1dog = 'something';
// variableName -> camelCase
{
  // TDZ start here
  // TDZ start here
  // TDZ start here
  // TDZ start here
  // console.log(myName);
  // TDZ start here
  // TDZ start here
  // TDZ start here
  let myName = "evondev";
  // TDZ end here
  // console.log("myName:", myName);
  // Uncaught ReferenceError: Cannot access 'myName' before initialization
  // code
  /**
   * let myName
   * console.log(myName);
   * myName = "evondev";
   *
   */
}
{
  console.log(myFriend);
  var myFriend = "evondev";
  /**
   * var myFriend; -> undefined
   * console.log(myFriend); -> undefined
   * myFriend = "evondev";
   */
  let device; // undefined
  var keyboard; // undefined
  // const mouse; -> Error
}
/**
 *
 */
