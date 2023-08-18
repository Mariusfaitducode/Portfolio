document.addEventListener('DOMContentLoaded', function () {
    // div contenant la grille
    var gameContainer = document.querySelector('.game-container');
    var numColumns = 30; // Nombre de colonnes
    var numRows = 30; // Nombre de lignes
    // grille permettant de simuler le jeu
    var grid = createEmptyGrid(numRows, numColumns);
    var transitionGrid = createEmptyGrid(numRows, numColumns);
    // instanciation de la grille visuel
    initializeGrid();
    // Actualise taille des cellules
    window.addEventListener('resize', adjustCellSize);
    setInterval(updateCellStyles, 1000);
    // Fonctions
    function createEmptyGrid(rows, columns) {
        var grid = [];
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                grid[i] = [];
                grid[i][j] = false;
            }
        }
        return grid;
    }
    // Initialise les cellules de la grille
    function initializeGrid() {
        gameContainer.style.gridTemplateColumns = "repeat(".concat(numColumns, ", 1fr)");
        gameContainer.style.gridTemplateRows = "repeat(".concat(numRows, ", 1fr)");
        var _loop_1 = function (row) {
            var _loop_2 = function (col) {
                var cell = document.createElement('div');
                cell.classList.add('cell');
                cell.addEventListener('mouseover', function () { return toggleCellState(row, col, cell); });
                gameContainer.appendChild(cell);
            };
            for (var col = 0; col < numColumns; col++) {
                _loop_2(col);
            }
        };
        for (var row = 0; row < numRows; row++) {
            _loop_1(row);
        }
        adjustCellSize();
    }
    function toggleCellState(row, col, cell) {
        grid[row][col] = !grid[row][col];
        var isAlive = grid[row][col];
        cell.classList.toggle('alive', isAlive);
        //updateCellStyles();
    }
    function updateCellStyles() {
        var cells = gameContainer.querySelectorAll('.cell');
        cells.forEach(function (cell, index) {
            var row = Math.floor(index / numColumns);
            var col = index % numColumns;
            var isAlive = grid[row][col];
            var count = 0;
            // On compte les cellules autour de notre cellule
            for (var l = row - 1; l <= row + 1; l++) {
                for (var c = col - 1; c <= col + 1; c++) {
                    if (l >= 0 && l < numRows && c >= 0 && c < numColumns) {
                        if (l != row || c != col) {
                            if (grid[l][c] == true) {
                                count++;
                            }
                        }
                    }
                }
            }
            if (count == 3 || count == 2 && isAlive == true) {
                transitionGrid[row][col] = true;
            }
            else {
                transitionGrid[row][col] = false;
            }
            // cell.classList.toggle('alive', isAlive);
        });
        cells.forEach(function (cell, index) {
            var row = Math.floor(index / numColumns);
            var col = index % numColumns;
            grid[row][col] = transitionGrid[row][col];
            var isAlive = grid[row][col];
            if (isAlive == true) {
                cell.classList.add('alive');
            }
            else {
                cell.classList.remove('alive');
            }
        });
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
});
