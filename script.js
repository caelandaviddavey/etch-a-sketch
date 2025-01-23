const container = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');

let gridSize = 16;

function createGrid(size) {
  container.innerHTML = '';
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseover', handleHover);

    container.appendChild(square);
  }
}

function handleHover(e) {

  if (!e.target.dataset.darkness) {
    e.target.dataset.darkness = 0;
  }
  let currentDarkness = parseInt(e.target.dataset.darkness);
  if (currentDarkness < 10) {
    currentDarkness++;
    e.target.dataset.darkness = currentDarkness;
    e.target.style.backgroundColor = `rgba(0, 0, 0, ${currentDarkness / 10})`;
  }
}

function changeGridSize() {
  const userInput = prompt('Enter new grid size (max 100):', 16);
  const newSize = parseInt(userInput);

  if (Number.isNaN(newSize) || newSize < 1) {
    alert('Please enter a valid number!');
    return;
  }

  if (newSize > 100) {
    alert('Please choose a number <= 100!');
    return;
  }

  gridSize = newSize;
  createGrid(gridSize);
}

resetBtn.addEventListener('click', changeGridSize);
createGrid(gridSize);