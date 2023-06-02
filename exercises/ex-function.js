// 1.
function isEven(number) {
  if (typeof number !== "number") return false;
  return number % 2 === 0;
}
console.log(isEven("10"));
console.log(isEven(5));
// 2.
function seperateStr(str, seperator) {
  if (typeof str !== "string" || typeof seperator !== "string") return "";
  return str.split(" ").join(seperator);
}
console.log(seperateStr("i love to learn Javascript", "_"));
// 3.
function getAge(year) {
  const currentYear = 2023;
  if (year < 0 || year > currentYear || typeof year !== "number") return 0;
  return currentYear - year;
}
console.log(getAge(1994));
// 4.
// 5.
function sum(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
    return 0;
  return a + b + c;
}
// 6
function getRandomFromRange(min, max) {
  if (typeof min !== "number" || typeof max !== "number") return 0;
  return Math.floor(Math.random() * (max - min)) + min;
}
// 7
function getType(value) {
  return typeof value;
}
// 8
function isIncludeWord(str, word) {
  if (typeof str !== "string" || typeof word !== "string") return false;
  return str.includes(word);
}
// 9
function useCallback(a, b, cb) {
  const results = cb(a, b);
  return results;
}
useCallback(5, 7, (a, b) => a * b);
