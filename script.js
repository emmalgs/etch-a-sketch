const container = document.querySelector('.grid-container');
const clearGrid = document.querySelector('#clearGrid');

function newGrid(value) {
    let newSize = Number(prompt(`What size would you like your sketch to be?`));
    if (newSize > 100) {
        return `Enter a number less than 100`;
    }
}

console.log(newGrid())

clearGrid.addEventListener('click', () => {
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
});

function createGrid(gridSize) {
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows= `repeat(${gridSize}, 1fr)`;
    for (let i=0; i < gridSize * gridSize; i++) {
        const squares = document.createElement('div');
        squares.classList.add('squares');
        squares.style.backgroundColor = 'red';
        squares.addEventListener('mouseover', changeColor);
        container.appendChild(squares);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = 'lightpink'
}
createGrid()