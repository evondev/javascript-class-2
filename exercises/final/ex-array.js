function isValidArray(arr) {
  if (Array.isArray(arr) && arr.length > 0) return true;
  return false;
}
// 1.
function fillArray(num, character) {
  if (typeof num !== "number" || typeof character !== "string") return [];
  const results = [];
  for (let index = 0; index < num.length; index++) {
    const element = num[index];
    results.push(element);
  }
  return results;
}
// 2. reverseArr
function reverseArr(arr) {
  if (!isValidArray(arr)) return [];
  const results = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    results.push(element);
  }
  return results;
}
// 3. removeFalsy
function removeFalsy(arr) {
  if (!isValidArray(arr)) return [];
  return arr.filter(Boolean);
}
// 4. without
function without(arr, value) {
  if (!isValidArray(arr)) return [];
  return arr.filter((item) => item !== value);
}
// 5.
function removeDuplicate(arr) {
  if (!isValidArray(arr)) return [];
  const results = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!results.includes(element)) results.push(element);
  }
  return results;
}
// 6
function chunkArr(arr, size) {
  if (!isValidArray(arr) || typeof size !== "number") return [];
  const results = [];
  for (let index = 0; index < arr.length; index += size) {
    results.push(arr.slice(index, index + size));
  }
  return results;
}
// console.log(chunkArr([1, 2, 3, 4, 5], 2));
// 7.
// 8.
function findLargestNumber(arr) {
  if (!isValidArray(arr)) return [];
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > max) max = element;
  }
  return max;
}
// 9.
function findDuplicateValue(array = []) {
  if (!isValidArray(array)) return [];
  const results = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (
      !results.includes(element) &&
      array.indexOf(element) !== array.lastIndexOf(element)
    ) {
      results.push(element);
    }
  }
  return results;
}
console.log(findDuplicateValue([4, 2, 34, 4, 1, 12, 1, 4]));
// Advanced
// 1. myMap(array)
function myMap(array, callback) {
  if (!isValidArray(array) || typeof callback !== "function") return [];
  let results = [];
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    results.push(callback(value, index, array));
  }
  return results;
}
console.log(myMap([1, 2, 3], (value, index, arr) => value * 3));
// 2. myFilter
function myFilter(array, callback) {
  if (!isValidArray(array) || typeof callback !== "function") return [];
  let results = [];
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (callback(value, index, array)) {
      results.push(callback(value, index, array));
    }
  }
  return results;
}
console.log(myFilter([1, 2, 3], (value, index, arr) => value > 2));
// 3. mySome
function mySome(array, callback) {
  if (!isValidArray(array) || typeof callback !== "function") return [];
  let results = false;
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (callback(value, index, array)) results = true;
  }
  return results;
}
// 4. myEvery
function myEvery(array, callback) {
  if (!isValidArray(array) || typeof callback !== "function") return [];
  let results = true;
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    if (!callback(value, index, array)) results = false;
  }
  return results;
}
// 5. myReduce
function myReduce(array, callback, initialValue) {
  if (
    !isValidArray(array) ||
    typeof callback !== "function" ||
    typeof initialValue === undefined
  )
    return [];
  let results = initialValue;
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    results = callback(results, value);
  }
  return results;
}
const total = myReduce([1, 2, 3, 4, 5], (a, b) => a + b, 0);
console.log("total:", total);
const n = [1, 2, 3, 4, 5];
Array.prototype.mapped = function (callback) {
  const results = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    results.push(callback(element, index, this));
  }
  return results;
};
const res = n.mapped((item) => item * 5);
console.log("res:", res);
