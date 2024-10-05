// Функции и классы, необходимые для логики игры
const gameBoard = document.getElementById("game-board");
const versionDisplay = document.getElementById("version");

// Установите версию проекта
const version = "1.0.4";
versionDisplay.textContent = `Версия: ${version}`; // Отображение версии

// Мока объектов игры (вы можете заменить их реальными данными)
const gameState = {
    tiles: new Map(),
};

// Функция для создания шестиугольников
function createHexagon(xy) {
    const hex = document.createElement("div");
    hex.classList.add("hex");
    hex.setAttribute("data-xy", xy); // Хранение координат плитки

    hex.addEventListener("click", () => {
        hex.classList.toggle("selected"); // Переключение класса для выделения
    });

    return hex;
}

// Создание карты 50x50
for (let row = 0; row < 50; row++) {
    for (let col = 0; col < 50; col++) {
        const xy = `${row},${col}`;
        gameState.tiles.set(xy, { explored: false }); // Инициализация плиток
        gameBoard.appendChild(createHexagon(xy)); // Добавление шестиугольников на карту
    }
}
