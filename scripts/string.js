// 1. Declaration
// built-in
const water = new String("Sting");
const brand = "iphone";
console.log("brand:", brand);
const type = `luxury`;
console.log("type:", type);
// My name is Evondev and I am 30 years old
const myName = "Tran Anh Tuan";
const myAge = 20;
// const information =
//   "My name is " + myName + " and I am " + myAge + " years old" + "\n";
const information = `My name is ${myName} and I am ${myAge} years old.
Today is a first day I teach Javascript for everyone.
`;
console.log("information:", information);
// 2. Methods
// 2.0 .length -> length of string
const hobby = "Badminton is my life and i love my life";
// hobby.length -> 9
// 2.1 toUpperCase -> BADMINTON
hobby.toUpperCase();
// 2.2 toUpperCase -> badminton
hobby.toLowerCase();
// 2.3 includes -> Badminton includes("ton") -> true or false
hobby.includes("ton");
// 2.4 indexOf
// index
console.log(hobby[0]);
console.log(hobby.indexOf("life"));
// 2.5 lastIndexOf
console.log(hobby.lastIndexOf("life"));
// 2.6 repeat
const repeat3Times = hobby.repeat(3);
console.log("repeat3Times:", repeat3Times);
// 2.7 replace
const volleyball = hobby.replace("Badminton", "Volleyball");
console.log("volleyball:", volleyball);
// 2.8 replaceAll
const changeLife = hobby.replaceAll("life", "money");
console.log("changeLife:", changeLife);
// 2.9 slice
const copyStr = hobby.slice(20);
console.log("copyStr:", copyStr);
// 2.10 split
const strArr = hobby.split(" ");
console.log("strArr:", strArr);
// 2.11 join
// "Badminton is my life and i love my life" -> "Badminton-is-my-life-and-i-love-my-life"
const dashStr = hobby.split(" ").join("-");
console.log("dashStr:", dashStr);
// 2.12 startsWith
console.log(hobby.startsWith("Badminton"));
// 2.13 endsWith
console.log(hobby.endsWith("Badminton"));
// 2.14 concat
const devices = "Devices";
const mobile = "Iphone";
const results = devices.concat(mobile);
// `${devices}${window}`
// 2.15 trim
const search = "    iphone    ";
console.log(search.trim());
// 2.16 trimStart
console.log(search.trimStart());
// 2.17 trimEnd
console.log(search.trimEnd());
// 2.18 substring
console.log(hobby.substring("abc", 20));
const account = 10;
console.log(account.toString());
