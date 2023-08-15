

document.addEventListener('DOMContentLoaded', () => {

    const numColumns = 30; // Nombre de colonnes
    const numRows = 30; // Nombre de lignes

    const grid = createEmptyGrid(numRows, numColumns);
    

    function createEmptyGrid(rows: number, columns: number) {
        const grid = new Array(rows);
        for (let i = 0; i < rows; i++) {
            grid[i] = new Array(columns).fill(false);
        }
        return grid;
    }

    function initializeGrid(grid: boolean[][]) {
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numColumns; col++) {
                
            }
        }
    }
    

    
  });
  