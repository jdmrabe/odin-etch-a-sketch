const grid = document.querySelector(".grid");
const gridDimension = 540;
let cellAmount = 16;
let mouseDown = false;

function createGrid(cells) {
  grid.style.height = gridDimension + "px";
  grid.style.width = gridDimension + "px";

  for (let i = 0; i < cells * cells; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    div.style.width = gridDimension / cells + "px";
    div.style.height = gridDimension / cells + "px";

    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "#121212";
    });

    grid.appendChild(div);
  }
}

createGrid(cellAmount);

const configureCell = document
  .getElementById("rebuild-btn")
  .addEventListener("click", () => {
    let newCellAmount = slider.value;
    if (
      newCellAmount < 0 ||
      newCellAmount > 100 ||
      newCellAmount === cellAmount
    )
      return;
    cellAmount = newCellAmount;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
    createGrid(cellAmount);
  });

const slider = document.getElementById("grid-size");
const output = document.getElementById("output");
output.value = slider.value;

slider.oninput = function () {
  output.value = this.value;
};

output.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    slider.value = output.value;
  }
});
