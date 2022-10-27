let gridDimension = 25;

const NUMBER_OF_SQUARES = gridDimension * gridDimension;

const gridContainer = document.querySelector("#grid-container");

// create a for loop that iterates NUMBER_OF_SQUARES times and creates a square for each one, then appends that square to the grid container.

for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add("grid-square");
    gridContainer.appendChild(gridSquare);
    gridSquare.style.width = `${256/gridDimension}px`;
}

// create a node list for each grid item
const gridSquares = document.querySelectorAll(".grid-square")

// when the mouse hovers over a div while left button is pressed, change the background color
gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', (event) => {
        if (event.buttons === 1 || event.buttons === 3) {
            gridSquare.style.backgroundColor = 'black';
        }
    })
})