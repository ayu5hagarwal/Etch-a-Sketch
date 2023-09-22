const container = document.querySelector(".container");




function createGrid(){
    container.replaceChildren();


    const num = prompt("Enter no. of grid");
const totalNum = num * num;


    for (let j = 0; j < totalNum; j++) {
        if (totalNum <= 10000) {
  

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

createGrid();


const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener('click',() => {
    return createGrid();
})







