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

    div.addEventListener("mousedown", () => {
      div.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
}

createGrid(cellAmount);

const configureCell = document
  .getElementById("cell-amount")
  .addEventListener("click", () => {
    cellAmount = parseInt(
      prompt("Please input grid size: (1-100)", cellAmount)
    );
    if (cellAmount < 0 || cellAmount > 100) return;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
    createGrid(cellAmount);
  });

function setButtonState(e) {
  mouseDown = (e.buttons & 1) === 1;
}

document.addEventListener("mousedown", setButtonState);
document.addEventListener("mousemove", setButtonState);
document.addEventListener("mouseup", setButtonState);
