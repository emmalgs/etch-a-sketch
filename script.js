const container = document.querySelector('.grid-container');
let gridSize = 16;

function createGrid(gridSize) {
    for (let i=0; i < gridSize; i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        container.appendChild(squares);
    }
} 
