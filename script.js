

// make the Grid Container

const container = document.querySelector(".container");



//Create a 16x16 grid

for(let i = 0; i <16*16;i++){
    const div = document.createElement("div");
    container.appendChild(div);
}
    