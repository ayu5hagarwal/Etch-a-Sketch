

// make the Grid Container

const container = document.querySelector(".container");



//Create a 16x16 grid

for(let i = 0; i <16*16;i++){
    const item = document.createElement("div");
    item.classList.add("item")
    container.appendChild(item);
}

//added hovering effect

const gridItems = document.querySelectorAll(".item");

gridItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "black";
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = "black";
    });
});

