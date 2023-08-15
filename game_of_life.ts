

document.addEventListener('DOMContentLoaded', () => {

    // div contenant la grille
    const gameContainer = document.querySelector('.game-container') as HTMLElement;

    const numColumns = 30; // Nombre de colonnes
    const numRows = 30; // Nombre de lignes

    // grille permettant de simuler le jeu
    var grid = createEmptyGrid(numRows, numColumns);

    var transitionGrid = createEmptyGrid(numRows, numColumns);

    // instanciation de la grille visuel
    initializeGrid();

    // Actualise taille des cellules
    window.addEventListener('resize', adjustCellSize);

    setInterval(updateCellStyles, 1000);


    // Fonctions

    function createEmptyGrid(rows: number, columns: number) {
        
        let grid: boolean[][] = [];

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++){
                grid[i] = [];
                grid[i][j] = false;
            }
        }
        return grid;
    }

    // Initialise les cellules de la grille
    function initializeGrid() {

        gameContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
        gameContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numColumns; col++) {

                const cell = document.createElement('div');
                cell.classList.add('cell');

                cell.addEventListener('click', () => toggleCellState(row, col, cell));

                gameContainer.appendChild(cell);
                
            }
        }
        adjustCellSize();
    }


    


    

    function toggleCellState(row: number, col: number, cell: HTMLElement) {
        grid[row][col] = !grid[row][col];

        const isAlive = grid[row][col];

        cell.classList.toggle('alive', isAlive);
        //updateCellStyles();
    }



    function updateCellStyles() {

        const cells = gameContainer.querySelectorAll('.cell');

        cells.forEach((cell, index) => {

            const row = Math.floor(index / numColumns);
            const col = index % numColumns;

            const isAlive = grid[row][col];

            var count: number = 0;

            // On compte les cellules autour de notre cellule

            for (let l = row - 1; l <= row + 1; l++) {
                for (let c = col - 1; c <= col + 1; c++) {
                    
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

        cells.forEach((cell, index) => {
                
                const row = Math.floor(index / numColumns);
                const col = index % numColumns;
    
                grid[row][col] = transitionGrid[row][col];

                const isAlive = grid[row][col];

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

        if (innerWidth / innerHeight > 1){
            cellSize = window.innerWidth / 30; // Taille d'une cellule en pixels
        }
        else{
            cellSize = window.innerHeight / 30; // Taille d'une cellule en pixels
        }

        
        const cells = document.querySelectorAll('.cell') as NodeListOf<HTMLElement>;
        cells.forEach(cell => {
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
        });
    }
    
  });
  