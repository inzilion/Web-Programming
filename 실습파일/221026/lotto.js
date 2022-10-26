const $button = document.querySelector('button');
const $lotto = document.querySelector('#lotto');


function init_lotto(){
  
  while($lotto.firstChild){
    $lotto.removeChild($lotto.firstChild);
  }
  
  const candidate = Array(45).fill().map((e,i) => i+1);
  const shuffle = [];  
  while(candidate.length>0){
    let randomIdx = Math.floor(Math.random()*candidate.length);
    let value = candidate.splice(randomIdx,1);
    shuffle.push(value[0]);
  }
  const winBalls = shuffle.slice(0, 6);
  const bonusBall = shuffle[6];

  return [winBalls, bonusBall];
}

function makeBall(number){
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = number;
  if(number>40){
    $ball.style.backgroundColor = 'purple';
    $ball.style.color = 'white';
  }
  return $ball;
}

$button.addEventListener('click', () => {
  $button.disabled = true;
  const [winBalls, bonusBall] = init_lotto();
  for(let i=0; i<winBalls.length; i++){
    const $ball = makeBall(winBalls[i]);
    setTimeout(()=> {
      $lotto.appendChild($ball);
    }, i*1000);
  }
  setTimeout(() => {
    const $ball = makeBall(bonusBall);
    $lotto.appendChild($ball);
    $button.disabled = false;
  }, (winBalls.length)*1000)
})