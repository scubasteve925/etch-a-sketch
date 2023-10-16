const container = document.querySelector('.container');

createGrid(16);
draw();
resetGrid();
resizeGrid();

let drawButton = document.querySelector('.draw-button')

drawButton.addEventListener('click', e => {
  draw();
})

let eraserButton = document.querySelector('.eraser-button')

eraserButton.addEventListener('click', e => {
  eraser();
})


function resetGrid() {
  const resetGrid = document.querySelector('.reset-button')
  resetGrid.addEventListener('click', e => {
    const divElement = document.querySelectorAll('.div-element')
  for(let i=0;i<divElement.length;i++) {
    divElement[i].classList.remove('black')
  }
  })
  }

function createGrid(size) {
  for(r=0;r < size * size;r++) {
  let div = document.createElement('div');
  div.innerHTML = '';
  container.appendChild(div).className = "div-element";
  }
  container.style.gridTemplateColumns = `repeat(${size},1fr)`
  container.style.gridTemplateRows = `repeat(${size},1fr)`
  }
  
function draw() {
  let grid = document.querySelectorAll('.div-element')
  
  for(let i=0;i<grid.length;i++) {
    grid[i].addEventListener('click', e => {
      console.log('working')
      grid[i].classList.remove('white')
      grid[i].classList.add('black')
    })
  }
}

function eraser() {
  let grid = document.querySelectorAll('.div-element')
  
  for(let i=0;i<grid.length;i++) {
    grid[i].addEventListener('click', e => {
      grid[i].classList.remove('black')
      grid[i].classList.add('white')
    })
  }
}

function resizeGrid() {
  const gridSizeButton = document.querySelector('.grid-size')

  gridSizeButton.addEventListener('click', e => {
  const div = document.querySelectorAll('.div-element')
  for(i=0;i<div.length;i++) {
  container.removeChild(div[i])
  }
  let size = prompt('What size will the grid be?')
  if(size < 4) {
  alert('error too small')
  createGrid(16)
  } else if(size > 100) {
  alert('error too big')
  createGrid(16)
  }
  else(createGrid(size))
  draw();
  })
}


