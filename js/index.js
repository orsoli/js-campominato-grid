/* Exercise
    The user clicks on a button that will generate a square game grid.
    Each cell has a progressive number, from 1 to 100.
    Therefore, there will be 10 cells for each of the 10 rows.
    When the user clicks on any cell, the clicked cell turns blue. 
    And a message with the number of the clicked cell is printed in the console.
*/

/* Structure
    M1 - Preapare the HTML and CSS we see in img.
    M2 - Retrieave the interested element from DOM in js 
       - Create an event when click
       - Create a loop to create 100 time an element and inseet in DOM in 10 rows and 10 col
*/

// ---  Preparation Phase
// Define  functions 
// Function to create a elements expect 1 paramenter  type 
const createElement = type => document.createElement(type) // Create new element
const addClass = (element, nameClass) => element.classList.add(nameClass) // Add class funtion expect 2 param element and nameclass

// Retrieve interested element from DOM
const formElement = document.getElementById('play-form')
const gridElement = document.getElementById('grid')
// Create variables already have
const row = 10 // Number of rows 
const col = 10 // numbers of colomn
const gridSize = row * col // The size of grid in total number

// --- Procesing Phase
// Create an event listener in for element
formElement.addEventListener('submit', function(e){
    e.preventDefault() // Blocked the default behavor of form submit

    // Use a for loop to create 100 times a cell element and insert in DOM like gridElement child
    for(let i = 0; i < gridSize; i++){
        const cellElement = createElement('div')// Create div element
        addClass(cellElement,"cell") // Add class='cell' in this div element already created
        gridElement.appendChild(cellElement) // Append like child new div in the grid element in DOM
        cellElement
    }
})