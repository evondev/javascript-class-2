# Buổi 1: Variables & Data types

- Giới thiệu khóa học
- Mục tiêu của khóa học
- Ưu đãi của khóa học
- Lưu ý
- Tham khảo MDN ⭐️
- Cài đặt extensions
- Thiết lập dự án
- Kết quả buổi 1

### Variables

- _Naming convention_
- _const_
- _let_
- _var_
- _scope_
- _temporal dead zone_(TDZ)
- _hoisting_
- Ví dụ + giải thích chi tiết về `hoisting`
- Data types: Primitives & Non-Primitives

### Number

- NaN: Not a Number
- `typeof` NaN is `number`
- _Methods_
- Number
- parseInt
- parseFloat
- Math.floor
- Math.ceil
- Math.round
- Math.pow
- Math.sqrt
- Math.PI
- Math.trunc
- Math.sign
- Math.random
- toFixed

### String

- single quote, double quote, backticks, special characters
- _Methods_

### Boolean

- Boolean: `true` or `false`
- Falsy values: false, 0, "", '', ``, null, undefined, NaN
- _Methods_
- Boolean
- !!

### Null

- typeof null is `object`
- Null is an assignment value
- Use null to assign an “empty” or “unknown” value to a variable.

### Undefined

- typeof undefined is `undefined`
- A variable that has not been assigned a value is `undefined`.

### Comment

- Single line
- Multi line

## Recap

- variable, hoisting, temporal dead zone, naming convention, primitives data types
- Bài tập buổi 1

# Buổi 2

- Giải bài tập buổi 1
- Ôn lại kiến thức buổi 1

### String methods

### Operations

- Arithmetic Operators: + - \* / () % ++ --
- Comparison Operators: > < >= <= ==(loose equality: doesn’t compare the data types) vs ===(strict equality) -> Boolean
- Logical Operators: && || !
- Assignment Operators: = += -= \*= /=

### Conditional

- _If else_
- _Switch case_
- _Ternary operator_

### Type coercion 🤯

- `_type coercion_`: is the process of converting value from one type to another
- explicit, implicit
- string(+), boolean(|| && !), number conversion(+ - \* / % > < <= >= | & ^ ~ ==)

# Buổi 3

## Functions

- intro
- declaration
- name
- parameters vs arguments
- normal function vs arrow function
- callback
- return keyword
- declaration vs expression
- hoisting
- scope
- execution context 🤯
- calling context: global or local execution context 🤯
- function return function
- IIFE

### Closure 🤯

- Whenever you declare a new function and assign it to a variable, you store the function definition, as well as a closure. The closure contains all the variables that are in scope at the time of creation of the function. It is analogous to a `backpack`.

# Buổi 4 + 5: Vòng lặp và mảng

## Loop

- for
- for of
- forEach
- while
- do while
- break
- continue

## Array

- declaration
- index, length, random, undefined
- Reference types don't hold values, they are a pointer to the value in memory.
- array methods: map, forEach, sort, push, pop, shift, unshift, reduce, find, findIndex, some, every, concat, filter, reverse, slice, splice, join, at, fill, findLastIndex, flat, includes, lastIndexOf, from, toString, isArray
- Spread operator
- Destructuring
- Clone array shallow, deep
- BTVN

# Buổi 6: Object

- Declaration
- Access, adding, update properties
- Dot notation vs square bracket notation
- Method
- Methods: keys, values, entries, freeze, hasOwnProperty, assign, create
- clone: shallow, deep
- Destructuring
- Optional chaining
- Rest parameter
- for in
- `This` keyword
- call, apply, bind
- Function constructor
- Class
- Recursion
- ES6 -> ESNext

# Buổi 7: DOM

- querySelector, querySelectorAll, getElementsByClassName, getGelementsByTagName, getElementById
- get, set, remove, has attribute
- textContent, innerText, innerHTML
- add, remove, toggle class, className, classList
- createElement, appendChild
- cloneNode
- hasChildNodes
- insertAdjacentText, insertAdjacentElement, insertAdjacentHTML, insertBefore
- Traversing
- offset (border)
- client (non-border)
- window
- scroll
- getBoundingClientRect
- NodeList vs HTMLCollection
- parentNode vs parentElement
- title, head
- replaceChild

# Buổi 8: Events

# Click

- Open Modal
- Tab
- Password toggle
- Accordion
- Dropdown
- Pagination
- Slider
- CRUD Todo List

# Form

- Form validation
- Autocomplete search
- Get form values
- OTP

## window document

- Progressbar
- Add attribute to link

## Mouse

- Animate bg
- Tooltip

# Buổi 9: Timer & Date & Regex

- setTimeout
- setInterval
- Date
- Debounce
- Intersection Observer
- Regex
- Local Storage

# Buổi 10: Bất đồng bộ

- Single thread
- Callback hell -> setTimeout
- Promise -> new Promise((resovle, reject)) -> pending, resolve, reject -> then - catch - finally
- Promise.all, Promise.allSettled, Promise.race, Promise.any
- Asynchronous
- API
- fetch
- try-catch-finally

# Hard part

- async
- defer
- module: ES6 modules - CommonJS
- event loop

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
```

- Set
- Map
- Generator function

# Algorithms & Data structure
