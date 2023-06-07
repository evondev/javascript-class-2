// 1.
function fillArray(num, character) {
  if (typeof num !== "number" || typeof character !== "string") return [];
  const results = [];
  for (let index = 0; index < num.length; index++) {
    const element = num[index];
    results.push(element);
  }
  // return results;
  // return new Array(num).fill(character);
}
// 2. reverseArr
function reverseArr(arr) {
  const results = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    results.push(element);
  }
  return results;
}
// 3. removeFalsy
function removeFalsy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  return arr.filter(Boolean);
}
// 4. without
function without(arr, value) {
  //
  return arr.filter((item) => item !== value);
}
// 5.
function removeDuplicate(arr) {
  const results = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (!results.includes(element)) results.push(element);
  }
  return results;
}
// 6
function chunkArr(arr, size) {
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
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > max) max = element;
  }
  return max;
}
// 9.
function findDuplicateValue(array = []) {
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
  let results = [];
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    // if(callback(value, index, array)) {}
    results.push(callback(value, index, array));
  }
  return results;
}
console.log(myMap([1, 2, 3], (value, index, arr) => value * 3));
