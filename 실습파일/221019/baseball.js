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
  const _value = $input.value;  
  $input.value = '';
  
  if(_value.length != 4)
    return alert("4자리를 입력해라.");
  if(new Set(_value).size != 4)
    return alert("중복있어.");
  if(tries.includes(_value))
    return alert("이미 입력한 값");
  
  tries.push(_value);
  console.log(tries);
  if(answer.join('') == _value)
    return $result.textContent = "홈런!!!";  

  if(tries.length == 10)
    return $result.textContent = `Game Over!!!  정답은 ${answer.join('')}`;
    
  
  let strike = 0;
  let ball = 0;
  for(let i=0; i<answer.length; i++){
    for(let j=0; j<_value.length; j++){
      if(answer[i] != _value[j]) continue;
      if(i == j) strike++;
      else       ball++;
    }
  }
  if(strike == 0 && ball == 0){
    $result.append("아웃");
  }
  else  
    $result.append(`${tries.length}차 시도 : ${_value} -> S : ${strike}, B : ${ball}`);
  
  $result.append(document.createElement('br'));
})
