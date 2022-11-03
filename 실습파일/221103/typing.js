const $btn = document.querySelector('button');
const $textBox = document.querySelector('.textBox');
const $typingBox = document.querySelector('.typingBox');

const oldDict = [
                  '원재는 강빈이를 사랑해?',
                  '원재는 원재를 사랑해!',
                  '원재는 아파.',
                ];

const newDict = [];

function init(){
  while(oldDict.length>0){
    const random = Math.floor(Math.random()*oldDict.length);
    newDict.push(oldDict[random]);
    oldDict.splice(random, 1);
  }
}

$btn.addEventListener('click', ()=>{
  $btn.style.display = 'none';
  init();
  $textBox.textContent = newDict[newDict.length-1];
})

$typingBox.addEventListener('keyup',(e)=>{
  if(e.keyCode != 13) return;
  if($typingBox.value != $textBox.textContent) return;
  console.log("문장이 같아!");
  newDict.pop();
  if(newDict.length>0)
    $textBox.textContent = newDict[newDict.length-1];
  else
    $textBox.textContent = '- 수고하셨습니다 -';

  $typingBox.value = ''
})