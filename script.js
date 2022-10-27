// set the default grid height and width

let initialGridDimension = 50;

// create a DOM object for the grid container

const gridContainer = document.querySelector("#grid-container");

// declare the function that will render the grid.
// first, the function needs to determine the size of each square in the grid,
// which it does by dividing the size of the grid container by the number of squares.
// then, it loops over every square and creates a square for it, 
// then appends that square to the grid container.

function renderGrid(gridDimension) {
    let gridSquareWidth = gridContainer.clientWidth/gridDimension;
    for (let i = 0; i < gridDimension * gridDimension; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add("grid-square");
        gridContainer.appendChild(gridSquare);
        gridSquare.style.width = `${gridSquareWidth}px`;
    }
}

// when the page is initially loaded, render the grid by using the default value

renderGrid(initialGridDimension);

// declare the function that makes the grid interactive.
// this function creates a node list containing each grid square,
// then adds an event listener to each square

function makeGridInteractive() {
    // create a node list containing each grid item
    let gridSquares = document.querySelectorAll(".grid-square")

    // when the mouse hovers over a div while left button is pressed, change the background color
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', (event) => {
            if (event.buttons === 1 || event.buttons === 3) {
                gridSquare.style.backgroundColor = 'black';
            }
        })
    })
};

// when the page is initially loaded, make the grid interactive

makeGridInteractive();

// Changing the canvas size

// create a DOM object for the button that changes
const changeDimensionsButton = document.getElementById("change-dimensions-button");

// when the button is clicked, prompt the user to resize the canvas
changeDimensionsButton.addEventListener('click', (event) => {
    let newCanvasSize = prompt("Enter a new canvas size:");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    };
    renderGrid(newCanvasSize);
    makeGridInteractive();
});


/* let slider = document.getElementById("grid-dimension-slider");
let sliderLabel = document.getElementById("slider-label");
sliderLabel.innerHTML = slider.value;

slider.oninput = function() {
    sliderLabel.innerHTML = this.value;
    renderGrid(this.value);
} */

