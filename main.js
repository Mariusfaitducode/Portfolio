document.addEventListener('DOMContentLoaded', function () {
    var gameContainer = document.querySelector('.game-container');
    if (gameContainer) {
        var numColumns = 30; // Nombre de colonnes
        var numRows = 30; // Nombre de lignes
        var cellSize = window.innerWidth / 30; // Taille d'une cellule en pixels
        gameContainer.style.gridTemplateColumns = "repeat(".concat(numColumns, ", 1fr)");
        gameContainer.style.gridTemplateRows = "repeat(".concat(numRows, ", 1fr)");
        for (var i = 0; i < numColumns * numRows; i++) {
            var cell = document.createElement('div');
            cell.classList.add('cell');
            gameContainer.appendChild(cell);
        }
        adjustCellSize();
    }
    function adjustCellSize() {
        var cellSize = 0;
        if (innerWidth / innerHeight > 1) {
            cellSize = window.innerWidth / 30; // Taille d'une cellule en pixels
        }
        else {
            cellSize = window.innerHeight / 30; // Taille d'une cellule en pixels
        }
        var cells = document.querySelectorAll('.cell');
        cells.forEach(function (cell) {
            cell.style.width = "".concat(cellSize, "px");
            cell.style.height = "".concat(cellSize, "px");
        });
    }
    window.addEventListener('resize', adjustCellSize);
});
