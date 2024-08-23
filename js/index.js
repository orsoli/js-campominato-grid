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

    M3 - In each cell, the corresponding number should appear, in order from 1 to 100.
       - innerText [i + 1]

    M4 - When a cell is clicked, the number of the clicked cell is printed in the console
    and then the cell is colored blue.
        - Add an click event for cell element inside loop in form event 
        - In click event print in concole innerText of cell element
        - In click event call back addClass function to add the bg-blue class alreaded created in CSS

    BONUS 
        - Add a select element in DOM with 3 option easy, normal(selected), hard
        - Created in CSS 3 classes based on selected option
        - Create a function in JS to check and save the value of the option selected and
        - Check the options selected and change varables
        - In event form inside loop check the selected option and add class based on selected option

*/

// ---  Preparation Phase
// Define  functions 
// Function to create a elements expect 1 paramenter  type 
const createElement = type => document.createElement(type) // Create new element
const addClass = (element, nameClass) => element.classList.add(nameClass) // Add class funtion expect 2 param element and nameclass
const getSelected = (elementName) => elementName.value // Create a function to chek selected option

// Retrieve interested element from DOM
const formElement = document.getElementById('play-form')
const gridElement = document.getElementById('grid')
const selectedElement = document.getElementById('level')

// --- Procesing Phase
// Create an event listener in for element
formElement.addEventListener('submit', function(e){
    e.preventDefault() // Blocked the default behavor of form submit
    // Check the option and change variable
    if(getSelected(selectedElement) === 'normal'){
        row = 9;
        col = 9;
    }else if(getSelected(selectedElement) === 'hard'){
        row = 10;
        col = 10;
    }else if(getSelected(selectedElement) === 'easy'){
        row = 7;
        col = 7;
    }
    const gridSize = row * col // The size of grid in total number

    // Use a for loop to create 100 times a cell element and insert in DOM like gridElement child
    for(let i = 0; i < gridSize; i++){
        const cellElement = createElement('div')// Create div element
        // Check selected option to add a class
        if(getSelected(selectedElement) === 'normal'){
            addClass(cellElement,"normal-cell") // Add class='normal-cell' in this div element already created
        }else if(getSelected(selectedElement) === 'hard'){
            addClass(cellElement,"hard-cell") // Add class='hard-cell' in this div element already created
        }else if(getSelected(selectedElement) === 'easy'){
            addClass(cellElement,"easy-cell") // Add class='easy-cell' in this div element already created
        }
        gridElement.appendChild(cellElement) // Append like child new div in the grid element in DOM
        cellElement.innerText = [i + 1] // Add content in the element cell
        // Add a click event of cell element
        cellElement.addEventListener('click',function(){
            // Print in console the inner text of cell element
            console.log(cellElement.innerText)
            // Add bg-blue class
            addClass(cellElement,"bg-blue")
        })

    }
})