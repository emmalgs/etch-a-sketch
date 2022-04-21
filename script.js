const container = document.querySelector('.grid-container');
const clearGrid = document.querySelector('#clearGrid');
const gridValue = document.querySelector('.gridValue');
const defaultSize = 16

let gridSize = defaultSize;

gridValue.textContent = `${gridSize} x ${gridSize}`;

function reloadGrid() {
    clearGrid.addEventListener('click', () => {
        window.setTimeout(() => {
            window.location.reload(true);
        }, 200);
    });
    let value = prompt(`Enter a new grid size`);
    if (value > 100) {
        return `Enter a smaller number`
    } else if (value === Number) {
        let gridSize = value
        createGrid(gridSize)
    }

}

reloadGrid()

function createGrid() {
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