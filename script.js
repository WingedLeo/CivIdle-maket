import { BuildingDefinitions } from './dist/BuildingDefinitions.js';
import { multiplyResources } from './dist/multiplyResources.js'; // Подключите файл с умножением ресурсов

const buildingSelect = document.getElementById('building');
const levelInput = document.getElementById('level');
const quantityInput = document.getElementById('quantity');
const resultsDiv = document.getElementById('results');

// Инициализация зданий
const buildingDefs = new BuildingDefinitions();
const buildings = Object.keys(buildingDefs).map(building => {
    return { name: buildingDefs[building].name, key: building };
});

// Заполнение выпадающего списка
buildings.forEach(building => {
    const option = document.createElement('option');
    option.value = building.key;
    option.textContent = building.name;
    buildingSelect.appendChild(option);
});

// Обработчик события для кнопки "Рассчитать"
document.getElementById('calculate').addEventListener('click', () => {
    const selectedBuilding = buildingSelect.value;
    const level = parseInt(levelInput.value);
    const quantity = parseInt(quantityInput.value);

    if (!selectedBuilding) {
        resultsDiv.textContent = "Пожалуйста, выберите здание.";
        return;
    }

    const building = buildingDefs[selectedBuilding];

    // Умножаем входные и выходные ресурсы на 10
    const factor = 10;
    const multipliedInput = multiplyResources({ [selectedBuilding]: building }, factor)[selectedBuilding].input;
    const multipliedOutput = multiplyResources({ [selectedBuilding]: building }, factor)[selectedBuilding].output;

    // Здесь можно произвести расчет необходимых ресурсов
    let results = `Здание: ${building.name} (Уровень ${level})\n`;
    results += `Необходимые ресурсы:\n`;
    for (const resource in multipliedInput) {
        results += `- ${resource}: ${multipliedInput[resource] * quantity * level}\n`;
    }

    results += `Выходные ресурсы:\n`;
    for (const resource in multipliedOutput) {
        results += `- ${resource}: ${multipliedOutput[resource] * quantity * level}\n`;
    }

    resultsDiv.textContent = results;
});
