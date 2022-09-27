# CSS
## 1. CSS의 특징
- Cascading Sytle Sheets의 약자.
- HTML은 구조, CSS는 구조를 시각적으로 더 세련되게 표현 (HTML 없이 CSS만 존재할 순 없다).   
> ![image](https://user-images.githubusercontent.com/11955029/192415391-928a93bc-8c9a-4da1-9c1e-1ac13d667f05.png)    
>> 이미지 출처 : uwaterloo.ca


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
  
