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
            let div = document.createElement('div');
            div.classList = 'cell';
            //div.innerText = j;
            row.appendChild(div);
        }
        containerDiv.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', initialize);
