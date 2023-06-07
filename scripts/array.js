const myJob = "Frontend Developer";
const numbers = [1, 2, 3, 4, 5];
numbers[0]; // numbers.at(0)
numbers[numbers.length - 1]; // numbers.at(-1)
// const numbers2 = new Array(5);
// numbers2[0] = 1;
// numbers2[1] = 2;
// numbers2[2] = 3;
// numbers2[3] = 4;
// numbers2[4] = 5;
// console.log(numbers, numbers2);
{
  // # Methods
  // 1. map
  // const doubleNumbers = [2,4,6,8,10];
  const doubleNumbers = numbers.map((value, index, array) => value * 2);
  console.log("doubleNumbers ~ doubleNumbers:", doubleNumbers);
  // 2. push
  numbers.push(6);
  // 3. unshift
  numbers.unshift(0);
  // 4. pop
  numbers.pop();
  // 5. shift
  numbers.shift();
  // 6. some - every
  const isGreaterThan1 = numbers.every((value) => value > 1);
  // 7. reverse
  const numbers2 = numbers.slice();
  numbers2.reverse();
  // 8. concat
  const otherNumbers = [6, 7, 8, 9, 10];
  const totalNumbers = numbers.concat(otherNumbers);
  // console.log("totalNumbers:", totalNumbers);
  // 9. find - findIndex
  const findNumber = numbers.find((value) => value === 55);
  const findNumberIndex = numbers.findIndex((value) => value === 5);
  // console.log("findNumberIndex:", findNumberIndex);
  // console.log("findNumber:", findNumber);
  // 10. includes
  console.log(numbers.includes(1));
  // 11. filter
  const filterNumbers = numbers.filter((value) => {
    // body of code
    // return something;
  });
  // console.log("filterNumbers:", filterNumbers);
  // 12. at
  console.log(numbers.at(0));
  // 13. reduce
  const total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  const reverseStr = myJob.split("").reduce((previous, current) => {
    return current + previous;
  }, "");
  // console.log("reverseStr ~ reverseStr:", reverseStr);
  // 14. join
  const characters = ["E", "v", "o", "n"];
  const joinCharacters = characters.join("");
  console.log("joinCharacters:", joinCharacters);
  // 15. slice
  const cloneNumbers = numbers.slice(0);
  console.log("cloneNumbers:", cloneNumbers);
  // 16. splice
  // [1,2,3,4,5]
  // delete
  const findNumberThree = numbers.findIndex((value) => value === 3);
  // numbers.splice(findNumberThree, 1);
  numbers.splice(2, 0, 8, 7, 6, 5);
  // [1,2,8,7,6,5,3,4,5]
  // 17. Array.isArray(value)
  // 18. sort
  const randomNumbers = [1, 100, 1000, 2, 30, 9, 99, 7];
  const sortedNumbers = randomNumbers.slice().sort((a, b) => b - a);
  console.log("sortedNumbers:", sortedNumbers);
  console.log("numbers:", numbers);
  // 19. lastIndexOf
  const newNumbers = [1, 2, 3, 1, 1];
  console.log("newNumbers:", newNumbers.lastIndexOf(1));
  // 20. findLastIndex
  const lastIndex = newNumbers.findLastIndex((item) => item === 1);
  console.log("lastIndex:", lastIndex);
  // 21. flat
  const complexArr = [1, 2, 3, [2, [[[[2, 3, 4, [[[, 5, 6]]]]]]]]];
  // [1,2,3,2,2,3,4,5,6]
  const flatArr = complexArr.flat(Infinity);
  console.log("flatArr:", flatArr);
  // 22. fill
  const aLetters = new Array(3).fill("a");
  console.log("aLetters:", aLetters);
}
{
  // # Clone array
  const students = ["Phat", "Evondev", "Doan", "Ton Sach"];
  // 1. slice
  const students1 = students.slice();
  // 2. spread operator
  const students2 = [...students];
  // 3. Array.from
  const students3 = Array.from(students);
  const complexStudents = ["Phat", [[["Evondev"]], [[["Doan"]], "Ton Sach"]]];
  // const complexStudents2 = complexStudents.slice();
  const complexStudents2 = JSON.parse(JSON.stringify(complexStudents));
  // console.log(complexStudents2[1][0][0]);
  complexStudents2[1][0][0] = "Tran Anh Tuan";
  console.log("complexStudents2:", complexStudents2);
  console.log("complexStudents:", complexStudents);
}
{
  // # Destructuring
  const information = ["evondev", 29];
  // const myName = information.at(0);
  // const myAge = information.at(-1);
  const [myAge, myName] = ["evondev", 29];
  // const [isActive, setIsActive] = useState(false);
  // useState(false) -> [false, (value) => value]
  // [isActive, setIsActive] -> [false, (value) => value]
  console.log("myAge:", myAge);
  console.log("myName:", myName);
}
{
  // # Rest parameters
  const numbers = [1, 2, 3, 4, 5];
  const [a, b, ...others] = numbers;
  console.log("others:", others);
}
