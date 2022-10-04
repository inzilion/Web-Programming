# Javascript(JS)

- 인터프리터 언어
- 유연하나 오류에 대한 대책이 없던 언어
- 다양한 브라우저, 언어에 따른 호환성의 요구
- ECMAScript로 표준화 및 다른 언어의 패러다임 도입
- 현재 웹페이지를 비롯하여 다양한 분야에서 활용되는 대세 언어로 자리매김 중

---

## 목차

[0. JS 실행방법](#0-js-실행방법)  
[1. strict 사용](#1-strict-사용)  
[2. Variable](#2-variable)  
[3. Constants](#3-constants)  
[4. Variable types](#4-variable-types)

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

## 1. strict 사용

- 무조건 첫줄에 쓰고 시작하자.
- JS의 지나친 융통성(?) 제한하기 위함
- JS 번역기가 더 빠르게 번역하여 성능 개선이 된다고 함

```js
"use strict";
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

console.log(age);
```

---

## 3. Constants

- Immutable
- `const` 를 이용하여 선언
- 참조 값 변경 불가

```js
const name = "Kim";
const maxNumber = 10000;
```

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

## 4. Variable types

// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
1. number
```js
const count = 17; 
const size = 17.1; 
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
```

2. string
```js
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);
```

3. boolean
```js
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);
```
4. null
```js
let nothing = null; // null 값을 가지고 있음
console.log(`value: ${nothing}, type: ${typeof nothing}`);
```

5. undefined
```js
let x;     // x는 아무값도 없음
console.log(`value: ${x}, type: ${typeof x}`);
```

6. symbol
create unique identifiers for objects
```js
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
```

7. object, 
real-life object, data structure
```js
const inzilion = { name: 'inzilion', age: 3 };
inzilion.age = 4;
```

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
