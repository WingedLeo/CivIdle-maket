// script.js

const gameBoard = document.getElementById("game-board");

// Размеры шестиугольников
const hexSize = 50; // Размер шестиугольника
const gridWidth = 10; // Ширина сетки (в шестиугольниках)
const gridHeight = 10; // Высота сетки (в шестиугольниках)

// Функция для создания шестиугольников
function createHexagon(x, y) {
    const hex = document.createElement("div");
    hex.classList.add("hex");
    hex.style.left = `${x}px`;
    hex.style.top = `${y}px`;

    hex.addEventListener("click", () => {
        hex.classList.toggle("selected");
    });

    return hex;
}

// Создание карты шестиугольников
for (let row = 0; row < gridHeight; row++) {
    for (let col = 0; col < gridWidth; col++) {
        const x = col * (hexSize * 1.5); // Учитываем ширину шестиугольника
        const y = row * (hexSize * Math.sqrt(3)) + (col % 2) * (hexSize * (Math.sqrt(3) / 2)); // Учитываем высоту шестиугольника и смещение для четных/нечетных колонок
        const hexagon = createHexagon(x, y);
        gameBoard.appendChild(hexagon);

        // Отладочное сообщение
        console.log(`Hexagon created at position: (${x}, ${y})`);
    }
}

// Проверка на наличие шестиугольников в gameBoard
console.log(`Total hexagons in game board: ${gameBoard.childElementCount}`);
