// Select color input
let colorPicker = document.getElementById("colorPicker");

// Select size input
let columns = document.getElementById("inputHeight");
let rows = document.getElementById("inputWidth");

// Canvas and submit button
const pixelCanvas = document.getElementById("pixelCanvas");
const submit = document.getElementById("submit");

function clearTable() {
    pixelCanvas.innerHTML = "";
}

function makeGrid() {
    // Clear table to is removing the previous canvas
    clearTable();

    //Get integer values from input fields
    let numberOfColumns = parseInt(columns.value);
    let numberOfRows = parseInt(rows.value);

    // Create Canvas
    let counter = 0;
    while(counter < numberOfColumns) {
        const newTableRow = document.createElement('tr');
        pixelCanvas.appendChild(newTableRow);
        
        for (var i = 0; i < numberOfRows; i++) {
            const newTableCell = document.createElement('td');
            newTableRow.appendChild(newTableCell);
        };
        counter++;
    };
};

function changeColor(e) {
    // current color of element
    let elementsColor = e.target.style.backgroundColor;

    if(e.target.nodeName === "TD") {
        if (!elementsColor) {
            e.target.style.backgroundColor = colorPicker.value;
        } else {
            e.target.style.backgroundColor = "";
        }
    }
};

pixelCanvas.addEventListener("click", changeColor, true);

submit.addEventListener("click", function(e) {
    e.preventDefault();
    makeGrid();
});


