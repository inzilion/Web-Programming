const $pg = document.querySelectorAll('.play_ground');
const ERASE = true;
const PG_WIDTH = 11;
const PG_HEIGHT = 20;
const BLOCK_START_X = Math.round(PG_WIDTH/2,0)-1;

const BLOCKS = {
  'L' : [
          [[0, 0], [0, 1], [0, 2], [1, 2]],
          [[0, 1], [1, 1], [2, 1], [2, 0]],
          [[0, 0], [1, 0], [1, 1], [1, 2]],
          [[0, 0], [1, 0], [2, 0], [0, 1]],
        ],
  'O' : [
          [[0, 0], [0, 1], [1, 0], [1, 1]],
          [[0, 0], [0, 1], [1, 0], [1, 1]],
          [[0, 0], [0, 1], [1, 0], [1, 1]],
          [[0, 0], [0, 1], [1, 0], [1, 1]],
        ],      
  'I' : [
          [[0, 0], [1, 0], [2, 0], [3, 0]],
          [[0, 0], [0, 1], [0, 2], [0, 3]],
          [[0, 0], [1, 0], [2, 0], [3, 0]],
          [[0, 0], [0, 1], [0, 2], [0, 3]],
        ],      
};

const getRandomType = () => {
  const BLOCKS_keys = Object.keys(BLOCKS);
  return BLOCKS_keys[Math.floor(Math.random()*BLOCKS_keys.length)];
}

class Block {
  constructor(x, y, s, d) {
    this.x = x;
    this.y = y;
    this.shape = s;
    this.direction = d;
  }
}

const copyBlock = (s, d) => {
  s.x = d.x;
  s.y = d.y;
  s.shape = d.shape;
  s.direction = d.direction;
}

const blockIsDie = (block, pg) => {
  for(e of BLOCKS[block.shape][block.direction]){
    let x = e[0] + block.x;
    let y = e[1] + block.y;
    if(x<0 || x>=PG_WIDTH || y<0 || y>=PG_HEIGHT) return ;
    pg.children[y].children[x].classList.add('death');
  }
}

const drawBlock = (block, pg, isErase=false) => {
  for(e of BLOCKS[block.shape][block.direction]){
    let x = e[0] + block.x;
    let y = e[1] + block.y;
    if(x<0 || x>=PG_WIDTH || y<0 || y>=PG_HEIGHT) return false;
    if(pg.children[y].children[x].classList.value.includes('death')) return false;
  }
  for(e of BLOCKS[block.shape][block.direction]){
      let x = e[0] + block.x;
      let y = e[1] + block.y;
      if(isErase)  pg.children[y].children[x].classList.remove(block.shape);
      else         pg.children[y].children[x].classList.add(block.shape);
  }
  return true;
}

class Tetris {
  constructor(pg) {
    this.block = new Block(BLOCK_START_X, -1, getRandomType(), 0);;
    this.pg = pg;
    this.attact = 0;
  }
  makeOneRow = () => {
    const $row = document.createElement('div');
    $row.classList.add('cube_container');
    for(let i=0; i<PG_WIDTH; i++){
      const $cube = document.createElement('div');
      $cube.classList.add('cube');
      $row.appendChild($cube);
    }
    return $row;
  }
  makeCubes = () => {
    for(let j=0; j<PG_HEIGHT; j++)
      this.pg.appendChild(this.makeOneRow());
  }

  clearAndFill = () => {
    let cnt_clear = 0
    for(let row of this.pg.children){
      let cnt = 0;
      for(let col of row.children){
        if(!col.classList.value.includes('death')) break;
        cnt++;
      }
      if(cnt == PG_WIDTH){
        this.pg.removeChild(row);
        this.pg.insertBefore(this.makeOneRow(), this.pg.firstChild);
        cnt_clear++;
      }
    }
    return cnt_clear;
  }
  
  gameOver = () => {
    clearInterval(this.timer);    
  }

  gameStart = () =>{
    this.makeCubes();
    this.timer = setInterval(()=>{
      const clone = {...this.block};
      drawBlock(clone, this.pg, ERASE);
      clone.y++;
      if(drawBlock(clone, this.pg))
        this.block.y++;
      else {
        blockIsDie(this.block, this.pg);
        copyBlock(this.block, new Block(BLOCK_START_X, 0, getRandomType(), 0));
        this.attack = this.clearAndFill();
        if(!drawBlock(this.block, this.pg)) this.gameOver();
      }
    }, 1000);
  }
}


class Match {
  constructor(){
    this.t1 = new Tetris($pg[0]);    
    this.t2 = new Tetris($pg[1]);    
  }

  matchStart = () => {
    this.t1.gameStart();
    this.t2.gameStart();
  }
}

const m = new Match();
m.matchStart();

document.addEventListener('keydown',(e) => {
  drawBlock(m.t1.block, $pg[0], ERASE);
  const clone = {...m.t1.block};
  switch (e.key){
    case 'ArrowLeft' : clone.x--; break;
    case 'ArrowRight': clone.x++; break;
    case 'ArrowUp'   : clone.direction = (clone.direction+1)%4; break;
    case 'ArrowDown' : clone.y++; break;
  }
  if(drawBlock(clone, $pg[0]))    copyBlock(m.t1.block, clone);
  else                            drawBlock(m.t1.block, $pg[0]);
})

document.addEventListener('keydown',(e) => {
  drawBlock(m.t2.block, $pg[1], ERASE);
  const clone = {...m.t2.block};
  switch (e.key){
    case 'a' : clone.x--; break;
    case 'd' : clone.x++; break;
    case 'w' : clone.direction = (clone.direction+1)%4; break;
    case 's' : clone.y++; break;
  }
  if(drawBlock(clone, $pg[1]))    copyBlock(m.t2.block, clone);
  else                            drawBlock(m.t2.block, $pg[1]);
})
