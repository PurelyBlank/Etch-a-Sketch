let isDragging = false;

function createSingleGrid(className, colNum, size) {
    let div = document.createElement("div");
    div.className = className + "_column" + colNum;
    div.id = "single_grid";
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = "white";
    div.style.border = "none";
    return div;
}

/* 
* Creates a row x column grid inside given container
*/
function createGrid(row, column, container, size) {
    for (let i = 0; i < row; ++i) {
        let rowDiv = document.createElement("div");
        rowDiv.id = "row_grid";
        rowDiv.className = `row${i}`;
        for (let j = 0; j < column; ++j) {
            let single_grid = createSingleGrid(rowDiv.className, j, size);
            rowDiv.appendChild(single_grid);
        }
        rowDiv.style.display = "flex";
        container.appendChild(rowDiv);
    }
    return container;
}


function createCustomGrid(width, height) {
    const container = document.getElementById("grid");
    var width = container.clientWidth;

    var grid_slider = document.getElementById("grid-slider");
    let grid_value = grid_slider.value;

    let grid_size = width / grid_value;

    createGrid(grid_value, grid_value, container,  grid_size);
}


function createDefaultGrid() {

}


function drawColor(event, color) {
    event.target.style.backgroundColor = color;
}


function getColor() {
   return document.querySelector("#color-selection").value;
}


document.addEventListener('mousedown', function(event) {
    if (event.target.id === "single_grid") {
        isDragging = true;
        drawColor(event, getColor());
    }
});


document.addEventListener('mouseover', function(event) {
    if (isDragging && event.target.id === "single_grid") {
        console.log(event);
        drawColor(event, getColor());
    }
    else {
        isDragging = false;
    }
});


document.addEventListener('mouseup', function(event) {
    if (isDragging) {
        isDragging = false;
    }
});


createCustomGrid();