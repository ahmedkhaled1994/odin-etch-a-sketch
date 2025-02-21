function initialize() {
    createGrid(16);
}

function promptForGrid() {
    let gridSize = prompt('Enter grid size (1~100):');
    if (gridSize === null) {
        gridSize = 16;
    }

    else {
        gridSize = parseInt(gridSize);
        if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            alert('Invalid grid size. Please enter a number between 1 and 100.');
            gridSize = promptForGrid();
        }
    }
    
    createGrid(gridSize);
}

function createGrid(gridSize) {
    const containerDiv = document.getElementById('container');
    /* clear all elements */
    containerDiv.innerHTML = '';

    for (let i=0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.className = 'row';

        for (let j=0; j < gridSize; j++) {
            let cell = document.createElement('div');
            cell.classList = 'cell';
            cell.style.backgroundColor ='RGBA(0,0,0,0)';

            function changeColor() {
                let r = Math.floor(Math.random()*255);
                let g = Math.floor(Math.random()*255);
                let b = Math.floor(Math.random()*255);
                let alpha = cell.style.backgroundColor.split(',')[3];
                alpha =parseFloat(alpha) + 0.1;
                cell.style.backgroundColor = 'RGBA(' + r + ',' + g + ',' + b + ',' + alpha;
            }

            function preventScroll(event) {
                event.preventDefault();
            }

            cell.addEventListener('mouseover', changeColor);
            cell.addEventListener('touchstart', changeColor);
            cell.addEventListener('touchmove', changeColor);
            cell.addEventListener('touchstart', preventScroll);
            cell.addEventListener('touchmove', preventScroll);
            
            row.appendChild(cell);
        }
        containerDiv.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', initialize);
