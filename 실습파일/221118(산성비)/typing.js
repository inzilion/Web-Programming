const $btn = document.querySelector('button');
const $typingBox = document.querySelector('#typingBox');
const $sky = document.querySelector('.sky');
const $skyTable = document.querySelector('#sky_table');
const MAX_WIDTH = 5;
const MAX_HEIGHT = 16;

const oldDict = [
                '말미잘','물미역','조원재','이강빈','리정찬',
                '선생님','이광배선생님','보고싶다','원재모솔',
                '어이없네','아이디어','냄새','태극기','마동석',
                '헬로','죽을래','자바스크립트','기차','집','발가락',
              ];

const newDict = [];

const init = () => {
  while(oldDict.length>0){
    const random = Math.floor(Math.random()*oldDict.length);
    newDict.push(oldDict[random]);
    oldDict.splice(random,1);
  }
}

const addWordToSky = () => {
  const $tr = document.createElement('tr');
  const random = Math.floor(Math.random()*MAX_WIDTH);

  for(let i=0; i<MAX_WIDTH; i++){
    const $td = document.createElement('td');
    $tr.append($td);
    if(i==random) 
      $td.textContent = newDict.pop();
  }
  if($skyTable.childElementCount>MAX_HEIGHT)
    $skyTable.children[$skyTable.childElementCount-1].remove();
  
  $skyTable.insertBefore($tr,$skyTable.firstChild);
  
}

init();

const gameStart = () => {
  setInterval(addWordToSky, 500);
}

$btn.addEventListener('click', ()=>{
  gameStart();
})

const FindSameWord = (text) => {
  for(cloud of $skyTable.children){
    if(cloud.textContent == text)
      cloud.textContent = '';
  }
}

$typingBox.addEventListener('keyup',(event)=>{
  console.log(event.keyCode);
  if(event.keyCode != 13) return;
  FindSameWord($typingBox.value);
  $typingBox.value = '';
})




