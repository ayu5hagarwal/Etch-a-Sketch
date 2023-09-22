const container = document.querySelector(".container");

function grid(num) {
    const totalNum = num * num;
    for (let j = 0; j < totalNum; j++) {
        const gridSize = 500;
        const item = document.createElement("div");
        item.classList.add("item")
        const itemWidth = gridSize / num;
        const itemHeight = gridSize / num;
        item.style.width = `${itemWidth}px`;
        item.style.height = `${itemHeight}px`;
        container.appendChild(item);
    }
}


function createGrid() {
    container.replaceChildren();
    const num = prompt("Enter Grid size");
    if (num <= 100) {
        grid(num);
        hovering();
    }
    else{
        alert("Number should be less than or equal to 100");
        return createGrid();
    }
}

function defaultGrid() {
    const num = 20;
    grid(num);
    hovering();
}
defaultGrid();

function hovering() {
    const gridItems = document.querySelectorAll(".item");
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "black";
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = "black";
        });
    });
}


const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener('click', () => {
    return createGrid();
})