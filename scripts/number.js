// 1, 1.5
// NaN: Not a number
const amount = new Number(1000);
const score = 100;
const money = 1050.5;
const bigNumber = "1.5321000000";
console.log("bigNumber:", bigNumber);
console.log(Number(bigNumber)); // 1.5321
console.log(parseInt(bigNumber)); // 1
console.log(parseFloat(bigNumber)); // 1.5321
console.log(typeof score);
const number = 1.45;
console.log(Math.floor(number)); // 1
console.log(Math.round(number)); // 1
console.log(Math.ceil(number)); // 2
console.log(Math.pow(2, 3)); // 8
console.log(Math.PI); // 3.14
console.log(Math.trunc(1.372));
console.log(Math.sign(100)); // 1
console.log(Math.sign(-100)); // -1
console.log(Math.sqrt(9)); // 3
console.log(Math.random()); // random 0 -> < 1
const randomTo10 = Math.random() * 10;
console.log(Math.floor(randomTo10)); // 7.112429400031212
// 5 - 10
const max = 10;
const min = 5;
const randomRange = Math.floor(Math.random() * (max - min) + min);
const decimal = 9.831498;
console.log(Number(decimal.toFixed(1)));
console.log(Math.floor(decimal * 10000) / 10000);
