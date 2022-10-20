const numbers = [];

for(let i=1; i<=9; i++)
  numbers.push(i);

const answer = [];

for(let i=0; i<4; i++){
  let idx = Math.floor(Math.random()*numbers.length); 
  answer.push(numbers[idx]);
  numbers.splice(idx, 1);
}

const $input = document.querySelector('input');
const $result = document.querySelector('.result');
const $btn = document.querySelector('button');
const tries = [];

$btn.addEventListener('click', () => {
  const value = $input.value;  
  $input.value = '';
  
  if(value.length != 4)
    return alert("4자리를 입력해라.");
  if(new Set(value).size != 4)
    return alert("중복있어.");
  if(tries.includes(value))
    return alert("이미 입력한 값");
  
  tries.push(value);
  console.log(tries);
  if(answer.join('') == value)
    return $result.textContent = "홈런!!!";  

  if(tries.length == 10)
    $result.textContent = "Game Over!!!";

})








