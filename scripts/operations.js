// 1. Arithmetic Operators: + - \* / () % ++ --
{
  const total = 10 + 7;
  const n = 100 % 3;
  let number = 5;
  number = number + 10;
  number += 10;
  // console.log(number++);
  // console.log(++number);
}
// 2. Comparison Operators:  > < >= <= == ===
{
  console.log(5 > 7);
  console.log(5 < 7);
  console.log(5 >= 7);
  console.log(5 <= 7);
  console.log("7" == "7"); // true
  console.log(null == undefined); // true
  console.log(null == 5); // false
  console.log(1 == true); // true
  console.log(7 == "7"); // Number("7") -> 7
}
// 3. Logical Operators: && || !
{
  console.log(!false); // true
  console.log(1 && 2 && true && 10); // 10
  console.log(1 && 2 && false && 10); // false
  console.log(1 || 2 || 3); // 1
  console.log(false || false || true); // true
}
