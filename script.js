const gameBoard = document.getElementById("game-board");

// Функция для создания шестиугольников
function createHexagon(row, col) {
    const hex = document.createElement("div");
    hex.classList.add("hex");
    hex.setAttribute("data-row", row);
    hex.setAttribute("data-col", col);
    
    // Добавление события клика для выделения шестиугольника
    hex.addEventListener("click", () => {
        hex.classList.toggle("selected"); // Переключение класса для выделения
    });

    return hex;
}

// Создание карты 50x50
for (let row = 0; row < 50; row++) {
    for (let col = 0; col < 50; col++) {
        gameBoard.appendChild(createHexagon(row, col));
    }
}
