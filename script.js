const container = document.querySelector('.grid-container');
const clearGrid = document.querySelector('#clearGrid');

let gridSize = 16;

clearGrid.addEventListener('click', () => {
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
});

function createGrid() {
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows= `repeat(${gridSize}, 1fr)`;
    for (let i=0; i < gridSize * gridSize; i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        squares.addEventListener('mouseover', changeColor);
        container.appendChild(squares);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = 'lightpink'
}
createGrid()