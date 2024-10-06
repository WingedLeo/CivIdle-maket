// Определяем размеры шестиугольников и сетки
const hexSize = 30; // Размер шестиугольника
const hexHeight = Math.sqrt(3) * hexSize; // Высота шестиугольника
const gridWidth = 50; // Ширина сетки
const gridHeight = 50; // Высота сетки

// Получаем доступ к элементу canvas и его контексту
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Устанавливаем размеры холста
canvas.width = gridWidth * hexSize * 1.5 + 500; // 500px для меню
canvas.height = gridHeight * hexHeight + 200; // 200px отступ сверху

// Функция для рисования фона
function drawBackground() {
    context.fillStyle = '#f0f0f0'; // Цвет фона
    context.fillRect(0, 0, canvas.width, canvas.height); // Рисуем фон
}

// Функция для рисования шестиугольника
function drawHexagon(x, y, size) {
    context.beginPath();
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const xOffset = x + size * Math.cos(angle);
        const yOffset = y + size * Math.sin(angle);
        context.lineTo(xOffset, yOffset);
    }
    context.closePath();
    context.stroke();
    context.fillStyle = 'rgba(100, 150, 200, 0.5)'; // Цвет заливки
    context.fill();
}

// Функция для рисования сетки шестиугольников
function drawHexagonGrid() {
    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            const xOffset = x * hexSize * 1.5 + 200; // Смещение по оси X (с учетом меню)
            const yOffset = y * hexHeight + (x % 2) * (hexHeight / 2) + 100; // Смещение по оси Y
            drawHexagon(xOffset, yOffset, hexSize);
        }
    }
}

// Инициализация игры
function init() {
    drawBackground(); // Рисуем фон
    drawHexagonGrid(); // Рисуем сетку шестиугольников
}

// Запускаем инициализацию
init();
