# Javascript(JS)

- 인터프리터 언어
- 유연하지만 오류에 대한 대책이 없던 언어
- 다양한 브라우저, 언어에 따른 호환성의 요구
- ECMAScript로 표준화 및 다른 언어의 패러다임 도입
- 현재 웹페이지를 비롯하여 다양한 분야에서 활용되는 대세 언어로 자리매김 중

---

## 목차

[0. JS 실행방법](#0-js-실행방법)  
[1. strict](#1-strict)  
[2. Variable](#2-variable)  
[3. Constants](#3-constants)  
[4. Variable types](#4-variable-types)   
  - [1. number](#1-number)  
  - [2. string](#2-string)  
  - [3. boolean](#3-boolean)  
  - [4. null](#4-null)  
  - [5. undefined](#5-undefined)  
  - [6. symbol](#6-symbol)  
  - [7. object](#7-object)     

[5. Dynamic typing](#5-dynamic-typing)   
[6. Operators](#6-operators)  
  - [1. String concatenation](#1-string-concatenation)
  - [2. Numeric operators](#2-numeric-operators)
  - [3. Increment and decrement operators](#3-increment-and-decrement-operators)   
  - [4. Assignment operators](#4-assignment-operators)
  - [5. Comparison operators](#5-comparison-operators)
  - [6. Logical operators : `|| (or), && (and), ! (not)`](#6-logical-operators---or--and--not)
  - [7. Equality](#7-equality)
  - [8. Conditional operators : `if`](#8-conditional-operators--if)
  - [9. Ternary operator : `?`  ](#9-ternary-operator)
  - [10. Switch statement   ](#10-switch-statement)
  - [11. Loops   ](#11-loops)

[7. Function](#7-function)   
  - [1. Function declaration   ](#1-function-declaration)
  - [2. Parameters](#2-parameters)
  - [3. Default parameters (added in ES6)  ](#3-default-parameters-added-in-es6)
  - [4. Rest parameters (added in ES6)](#4-rest-parameters-added-in-es6)
  - [5. Local scope](#5-local-scope)
  - [6. Return a value](#6-return-a-value)
  - [7. First-class function](#7-first-class-function)
    - [1. Function expression](#1-function-expression)
    - [2. Callback function using function expression](#2-callback-function-using-function-expression)

[8. Array](#8-array)   
[9. Object](#9-object)      
[10. Class](#10-class)   
[11. Json](#11-json)   
[12. Callback](#12-callback)   
[13. async](#13-async)   
[14. Promise](#14-promise)   

---

## 0. JS 실행방법

- 브라우저로 실행

  - 웹페이지에 `<script>`태그를 이용하여 실행

  ```html
  <script>
    console.log("Hello");
  </script>
  ```

  - CSS 처럼 JS 파일을 따로 작성하여 연결할 수 있음

  ```html
  <script src="main.js"></script>
  ```

  - `<head>`안에 `defer` 속성을 추가하여 실행하는 것을 추천
    - 이유는 검색해서 알아볼 것

  ```html
  <head>
    <script defer src="main.js"></script>
  </head>
  ```

- nodejs에서 실행 : 이건 나중에 배우게 됨

---

## 1. strict

- 무조건 첫줄에 쓰고 시작하자. (이건 좀더 알아봐야 겠지만 일단 쓰고 시작!)
- JS의 지나친 융통성(?) 제한하기 위함
- JS 번역기가 더 빠르게 번역하여 성능 개선이 된다고 함

```js
'use strict';
name = "Kim"; // 선언하지 않은 변수를 사용하면 안됨(X)
let name = "Kim"; // let 키워드를 이용하여 변수 선언(O)
```

---

## 2. Variable

- Mutable
- `let` 으로 변수 선언 (ES 6에서 추가됨)
- `var` 쓰지말고 `let` 쓰셈
  - var hoisting 발생(검색해볼 것)
  - `var` 는 블럭을 무시함

```js
let globalName = "global name";
{
  let name = "local name";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name); // 에러
console.log(globalName);
```

```js
age = 4;
var age;

height = 178;
let height;

console.log(age);
console.log(height);
```

---

## 3. Constants

- Immutable
- `const`를 이용하여 선언
- 참조 값 변경 불가
- 프로그램 내에서 고정된 값에 사용
- 배열, 오브젝트, 함수 등을 `const`로 자주 선언한다

```js
const name = "Kim";
const maxNumber = 10000;
const arr = [];

name = "Lee"; // 에러
maxNumber = 100000; // 에러
arr = ["Kim", 10000]; // 에러
arr.push(name);
arr.push(maxNumber);
arr[0] = "Lee";
console.log(arr); // ['Lee', 10000]
```

---
## 4. Variable types
### 1. number

```js
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
```

### 2. string

```js
const chr = "c";
const name = "John";
const helloName = `Hi ${name}!`; // template literals
console.log(`value: ${helloName} type: ${typeof helloName}`);
console.log("value: " + helloName + " type: " + typeof helloName);
```

### 3. boolean

```js
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
```

### 4. null

```js
let nothing = null; // null 값을 가지고 있음
console.log(`value: ${nothing}, type: ${typeof nothing}`);
```

### 5. undefined

```js
let x; // x는 아무값도 없음
console.log(`value: ${x}, type: ${typeof x}`);
```

### 6. symbol 

```js
// 우리 수준에선 사용할 일 거의 없음. 그냥 참고로 볼 것
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);   // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
```

### 7. object   
  복합 자료형이라고 생각하면 속 편함
```js
const inzilion = { name: "Kim", age: 3 };
inzilion.name = "Lee";
inzilion.['age'] = 4;   // 속성을 문자열로 사용하는 것에 주의
```

---

## 5. Dynamic typing 
  - dynamically typed language
```js
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));  // 에러
```
---
## 6. Operators
  ### 1. String concatenation
```js
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
```
  ### 2. Numeric operators
```js
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation
```
  ### 3. Increment and decrement operators
```js
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
```
  ### 4. Assignment operators
```js
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;
```

  ### 5. Comparison operators
```js
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal
```

  ### 6. Logical operators : `|| (or), && (and), ! (not)`
```js
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);
```
  ### 7. Equality
```js
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const kim1 = { name: 'kim' };
const kim2 = { name: 'kim' };
const kim3 = kim1;
console.log(kim1 == kim2);
console.log(kim1 === kim2);
console.log(kim1 === kim3);

// falses
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
```
  ### 8. Conditional operators : `if`
```js
// if, else if, else
const name = 'kim';
if (name === 'Lee') {
  console.log('Welcome, Lee!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}
```
  ### 9. Ternary operator : `?`  
```js
// condition ? value1 : value2;
console.log(name === 'Lee' ? 'yes' : 'no');
```

  ### 10. Switch statement   
```js
// use for multiple if checks
// use for enum-like value check
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}
```
  ### 11. Loops   
```js
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
```
---
## 7. Function
- fundamental building block in the program
- subprogram can be used multiple times
- performs a task or calculates a value

 ### 1. Function declaration   

    - function name(param1, param2) { body... return; }
    - one function === one thing
    - naming: doSomething, command, verb   
     e.g. createCardAndPoint -> createCard, createPoint
    - function is object in JS
```js
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);
```
 ### 2. Parameters
    - primitive parameters: passed by value
    - object parameters: passed by reference

```js
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);
```

 ### 3. Default parameters (added in ES6)  
```js
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');
```
 ### 4. Rest parameters (added in ES6)
```js
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');
```
 ### 5. Local scope
```js
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
}
printMessage();
```

 ### 6. Return a value
```js
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
```
---
### 7. First-class function
  - functions are treated like any other variable
  - can be assigned as a value to variable
  - can be passed as an argument to other functions.
  - can be returned by another function

 #### 1. Function expression
    - a function declaration can be called earlier than it is defined. (hoisted)
    - a function expression is created when the execution reaches it.  
```js
const print = function () {
  // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
```
 #### 2. Callback function using function expression
```js
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();
```
---
## 8. Array

---
## 9. Object

---
## 10. Class

---
## 11. Json

---
## 12. Callback

---
## 13. async

---
## 14. Promise
