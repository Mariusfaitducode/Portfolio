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
    var interval = setInterval(updateCellStyles, 1000);
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
                //cell.addEventListener('mouseover', () => toggleCellState(row, col, cell));
                cell.addEventListener('touchstart', function () { return toggleCellState(row, col, cell); });
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
    // Controller
    var speed = 0;
    var infos = document.querySelector('.info');
    var playBtn = document.querySelector('.play');
    var stopBtn = document.querySelector('.stop');
    var running = true;
    stopBtn.addEventListener('click', function () {
        stopBtn.classList.add('hide');
        playBtn.classList.remove('hide');
        console.log('stop');
        clearInterval(interval);
        running = false;
    });
    playBtn.addEventListener('click', function () {
        stopBtn.classList.remove('hide');
        playBtn.classList.add('hide');
        console.log('play');
        interval = setInterval(updateCellStyles, 1000 * 1 / speed);
        running = true;
    });
    var speedSlider = document.getElementById('speedSlider');
    var sliderValue = document.getElementById('sliderValue');
    speedSlider.addEventListener('input', function (event) {
        var value = event.target.value;
        sliderValue.textContent = value + 'x';
        speed = +value;
        console.log(speed);
        if (running == true) {
            clearInterval(interval);
            interval = setInterval(updateCellStyles, (1000 * 1 / speed));
        }
    });
    var infoButton = document.querySelector('.info-button');
    var information = document.querySelector('.information');
    var exitInfo = document.querySelector('.exit-information');
    infoButton.addEventListener('click', function () {
        information.classList.remove('hide');
    });
    exitInfo.addEventListener('click', function () {
        information.classList.add('hide');
    });
    // autonomie mobile
    var planeur = [[-1, -1],
        [0, -1],
        [1, -1],
        [-1, 0],
        [0, 1]];
    function rotatePlaneur() {
        var newPlaneur = planeur;
        for (var _i = 0, planeur_1 = planeur; _i < planeur_1.length; _i++) {
            var coord = planeur_1[_i];
            var x = coord[0];
            var y = coord[1];
            var newX = -y;
            var newY = x;
            newPlaneur.push([newX, newY]);
        }
        return newPlaneur;
    }
    function generatePlaneur1() {
        if (window.innerWidth <= 600) {
            for (var _i = 0, planeur_2 = planeur; _i < planeur_2.length; _i++) {
                var coord = planeur_2[_i];
                console.log(coord);
                var x = coord[0] + 15;
                var y = coord[1] + 25;
                grid[x][y] = true;
            }
        }
    }
    function generatePlaneur2() {
        if (window.innerWidth <= 600) {
            for (var _i = 0, _a = rotatePlaneur(); _i < _a.length; _i++) {
                var coord = _a[_i];
                console.log(coord);
                var x = coord[0] + 0;
                var y = coord[1] + 25;
                grid[x][y] = true;
            }
        }
    }
    console.log("help");
    console.log(rotatePlaneur());
    setTimeout(generatePlaneur1, 1000);
    //setInterval(generatePlaneur2, 5000);
});
