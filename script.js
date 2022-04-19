
let gridSize = 16;

function createGrid(gridSize) {
    const container = document.querySelector('.grid-container');
    
    for (let i=0; i < gridSize; i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        squares.style = ('backgroundColor: red;')
        container.appendChild(squares);
    }
}