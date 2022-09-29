# CSS
***
## 목차
[1. CSS의 특징](#1-css의-특징)      
[2. CSS 기초](#2-css-기초)    
[3. Flexbox](#3-flexbox)    
[4. Grid](#4-grid)    
[5. 연습문제](#5-연습문제)    

## 1. CSS의 특징
- Cascading Sytle Sheets의 약자.
- HTML은 구조, CSS는 구조를 시각적으로 더 세련되게 표현 (HTML 없이 CSS만 존재할 순 없다).   
<img src="https://user-images.githubusercontent.com/11955029/192415391-928a93bc-8c9a-4da1-9c1e-1ac13d667f05.png" width="350" height="300"><br>    
> 이미지 출처 : uwaterloo.ca


## 2. CSS 기초
- 기본문법
 ```css
선택자 {
   속성 : 값;
}
```
  * 예시
```css
div {   
   color : blue;   
}
```
- 작성 위치
  * HTML 문서의 ```<style> ... </style>``` 안에 입력
  * ```<태그명 style="color:gray"> ... </태그명>``` 처럼 태그에 속성으로 입력 가능
  * 대부분 별도의 CSS 파일을 작성하고, HTML문서의 ```<head>...</head>``` 에 ```<link>```태그를 이용하여 연결   
  ```html
  <head>
    <link href="style.css" rel="stylesheet">
  </head>
  ```
  
- 선택자(Selector)
  * 태그 선택자
  ```css
   div {
      background : blue;
   }
  ```
  * class 선택자
  ```css
   .item {
      background : blue;
   }
  ```
  * id 선택자
  ```css
   #header {
      background : blue;
   }
  ```
  
## 3. Flexbox
![image](https://user-images.githubusercontent.com/11955029/192662520-30fd48c3-ffff-4f6c-852e-72b817ba837b.png)
> 이미지 출처 : [https://css-tricks.com/](https://css-tricks.com/)
  
## 4. Grid
![image](https://user-images.githubusercontent.com/11955029/192670153-409ed3ad-d5a6-4842-b7e4-3ac4081cacfd.png)
> 이미지 출처 : [https://css-tricks.com/](https://css-tricks.com/)

## 5. 연습문제
![image](https://user-images.githubusercontent.com/11955029/192931122-e62b1c5b-3b5f-4ff7-b57f-6f5658b7f18a.png)

 
