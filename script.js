const NUMBER_OF_SQUARES = 16 * 16;

const gridContainer = document.querySelector("#grid-container");

// create a for loop that iterates NUMBER_OF_SQUARES times and creates a square for each one, then appends that square to the grid container.

for (let i = 0; i < NUMBER_OF_SQUARES; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add("grid-square");
    gridContainer.appendChild(gridSquare);
}

// create a node list for each grid item
const gridSquares = document.querySelectorAll(".grid-square")

// when the mouse hovers over a div, change the background color
gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'black';
    })
})