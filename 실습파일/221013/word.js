const $board = document.querySelector('.text_board');
const $pressBtn = document.querySelector('.press_btn');
const $wordInput = document.querySelector('.word_input');

let word, newWord;
word = "혜찬";
$board.textContent = word;

function writeWord() {
  newWord = $wordInput.value;
  if(word[word.length-1] == newWord[0]){
    word = word + ' -> ' + newWord;
    $board.textContent = word;
  }
  $wordInput.value='';
  $wordInput.focus();
}

$pressBtn.addEventListener('click', writeWord);
