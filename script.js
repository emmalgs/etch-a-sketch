const container = document.querySelector('.grid-container');
let gridSize = 16;

function createGrid(gridSize) {
    gridSize.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridSize.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    
    for (let i=0; i < gridSize * gridSize; i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        container.appendChild(squares);
    }
}