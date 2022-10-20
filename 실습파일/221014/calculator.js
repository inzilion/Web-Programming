const $result = document.querySelector('.result');
const $btns = document.querySelectorAll('.num');
const $cancel = document.querySelector('.cancel');
const $operators = document.querySelectorAll('.oper');

let numOne = '', operator = '', numTwo = '';

function showResult(event){
  if(!operator)
    numOne += event.target.textContent;
  else
    numTwo += event.target.textContent;
  
    $result.value = `${numOne} ${operator} ${numTwo}`;
}

for(let i=0; i < $btns.length; i++ )
  $btns[i].addEventListener('click', showResult);

for(const op of $operators){
  op.addEventListener('click', function(event){
    if(numOne){
      operator = event.target.textContent; 
      $result.value = `${numOne} ${operator} ${numTwo}`;
    }
  })
}

$cancel.addEventListener('click', function(){
  numOne = '';
  numTwo = '';
  operator = '';
  $result.value = numOne;
})

document.querySelector('.equal').addEventListener('click', ()=>{
  if(!numOne || !operator || !numTwo) return;
  let a, b ,c ;
  a = parseInt(numOne);
  b = parseInt(numTwo);
  
  switch (operator){
    case '+' : c = a + b; break;
    case '-' : c = a - b; break;
    case '/' : c = a / b; break;
    case 'x' : c = a * b; break;
  }
  numOne='';
  numTwo='';
  operator='';
  $result.value = c;
  
})