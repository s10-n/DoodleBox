// set the default grid height and width

let initialGridDimension = 50;

// set the current colour
let currentColour = 'black';

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

function makeGridInteractive(color) {
    // create a node list containing each grid item
    let gridSquares = document.querySelectorAll(".grid-square")

    // when the mouse hovers over a div while left button is pressed, change the background color
    gridSquares.forEach((gridSquare) => {
        gridSquare.addEventListener('mouseover', (event) => {
            if (event.buttons === 1 || event.buttons === 3) {
                gridSquare.style.backgroundColor = color;
            }
        })
    })
};

// when the page is initially loaded, make the grid interactive

makeGridInteractive(currentColour);

// Changing the canvas size

// create a DOM object for the slider
let slider = document.getElementById("grid-dimension-slider");
let sliderLabel = document.getElementById("slider-label");

// set a default value for the slider label
sliderLabel.innerHTML = `Grid size: ${slider.value}`;

// the user can drag the slider to set a new canvas size.
// when the user is done changing the slider value:
slider.onchange = function() {
    // the slider label is updated
    sliderLabel.innerHTML = `Grid size: ${this.value}`;
    // all existing grid squares are deleted
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    };
    // the grid is rendered again using the new value
    renderGrid(this.value);
    // the grid is made interactive
    makeGridInteractive(currentColour);
}

// changing the colour of the pencil
// create a DOM object for the colour picker
let colourPicker = document.getElementById("colour-picker");

// the user can pick a color using the color picker
// when the user is done picking the color value:
colourPicker.onchange = function() {
    currentColour = this.value;
    makeGridInteractive(currentColour);
}