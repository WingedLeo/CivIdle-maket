const gameBoard = document.getElementById("game-board");

function createHexagon(row, col) {
    const hex = document.createElement("div");
    hex.classList.add("hex");
    hex.setAttribute("data-row", row);
    hex.setAttribute("data-col", col);
    hex.addEventListener("click", () => {
        hex.classList.toggle("selected");
        alert(`Выбран шестиугольник: (${row}, ${col})`);
    });
    return hex;
}

for (let row = 0; row < 50; row++) {
    for (let col = 0; col < 50; col++) {
        gameBoard.appendChild(createHexagon(row, col));
    }
}
