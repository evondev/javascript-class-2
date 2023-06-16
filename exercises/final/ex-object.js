/**   BÀI TẬP */
// bài 1: Write a method that returns a deep array like [[key, value]] // Expected Result: makePairs({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
function deepArray(obj) {
  if (typeof obj !== "object" && !Array.isArray(obj) && obj !== null) return;
  // return Object.entries(obj);  Cách 1
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key, obj[key]);
    }
  }
  return result;
}
console.log(deepArray({ a: 1, b: 2 }));
// bài 2:Write a method that returns new object without provided properties // Expected Result: without({ a: 1, b: 2 }, 'b') => { a: 1 }
function without(obj, ...key) {
  if (typeof obj !== "object" && !Array.isArray(obj) && obj !== null) return;
  key.map((item) => {
    console.log(item);
    delete obj[item];
  });
  return obj;
}
console.log(without({ a: 1, b: 2 }, "b"));
//bài 3:Write a method that makes a shallow check is object empty // Expected Result: isEmpty({}) => true, isEmpty({ a: undefined }) => true, ({ a: 1 }) => false
function isEmpty(obj) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] !== undefined) {
      return false;
    }
  }
  return true;
}
console.log(isEmpty({ a: 1 }));
//bài 4:Write a method that makes a shallow compare of two objects // Expected Result: True if objects are identical, false if objects are different isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }));
//bài 5:Write a method that finds shallow intersections of objects // Expected Result: intersections({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
function intersections(obj1, obj2) {
  const result = {};

  for (let key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      result[key] = obj1[key];
    }
  }

  return result;
}
console.log(intersections({ a: 1, b: 2 }, { c: 1, b: 2 }));
