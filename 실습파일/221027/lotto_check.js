const $button = document.querySelector('button');
const $myLotto = document.querySelector('.myLotto');
const $lotto = document.querySelector('.lotto');
const $result = document.querySelector('.result');

const winBalls = [1, 2, 3, 4, 5, 6];
const bonus = 7;

// $myLotto.value = '4 5 6 7 8 9 10';

$button.addEventListener('click', ()=>{
  const myLotto = $myLotto.value.split(' ');
  let cntEq = 0;

  for(let i=0; i<winBalls.length; i++){
    for(let j=0; j<myLotto.length; j++){
      if(winBalls[i] == myLotto[j])
        cntEq++;
    }
  }
  if(cntEq == 6) $result.textContent = "1등!!";
  if(cntEq == 5) {
    if(myLotto.includes(String(bonus))) $result.textContent = "2등";
    else $result.textContent = "3등";
  }

  console.log(cntEq);
})
