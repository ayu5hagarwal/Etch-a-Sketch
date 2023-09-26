const container = document.querySelector(".container");

function grid(num) {
    const totalNum = num * num;
    for (let j = 0; j < totalNum; j++) {
        const gridSize = 490;
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

function changeGridColor() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    return `rgb(${a}, ${b}, ${c})`;
}

function raibowColour(){
    const gridItems = document.querySelectorAll(".item");
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = changeGridColor();
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = changeGridColor();
        });
    });
}


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



const rainbowButton = document.querySelector(".rainbowButton");
rainbowButton.addEventListener('click',() =>{
                return raibowColour();
});



const blackButton = document.querySelector(".blackButton");
blackButton.addEventListener('click',() =>{
                return hovering();
});