const $table = document.querySelector('.table');
let totalCards = 40
let cntClicked = 0;
let $firstCard, $secondCard;


const makeRandomArray = () => {
  const sortedArray = Array(totalCards).fill().map((e, i) => i%(totalCards/2)+1);
  const randomArray = [];
  while(sortedArray.length>0){
    const rand = Math.floor(Math.random()*sortedArray.length);
    randomArray.push(sortedArray.splice(rand, 1)[0]);
  }
  console.log(randomArray);
  return randomArray;
}

const judgeCards = ($fc, $sc) => {
  setTimeout(()=> {
    if($fc.textContent ==  $sc.textContent){
      $fc.classList.add('sameCard');
      $sc.classList.add('sameCard');
    } else {
      $fc.classList.remove('clicked');
      $sc.classList.remove('clicked');
    }
    cntClicked = 0;
    $firstCard = undefined;
    $secondCard = undefined;
  }, 500);
}


const makeCard = () => {

  const randomArray = makeRandomArray();
  randomArray.map((e,i)=>{
    const $card = document.createElement('div');
    $card.classList.add('card');
    $card.textContent = e;
    $table.appendChild($card);
    $card.addEventListener('click', (event)=>{
      cntClicked++;
      if(cntClicked > 2) return;
      event.target.classList.add('clicked');
      switch (cntClicked){
        case 1 : $firstCard  = event.target; break;
        case 2 : $secondCard = event.target; break;
      }
      judgeCards($firstCard, $secondCard);
    })
  })
}

makeCard();
