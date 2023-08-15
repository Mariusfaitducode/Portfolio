

document.addEventListener('DOMContentLoaded', () => {

    const gameContainer = document.querySelector('.game-container') as HTMLElement;

    if (gameContainer) {

        const numColumns = 30; // Nombre de colonnes
        const numRows = 30; // Nombre de lignes

        const cellSize = window.innerWidth / 30; // Taille d'une cellule en pixels

        
        
        gameContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
        gameContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
    
        for (let i = 0; i < numColumns * numRows; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            gameContainer.appendChild(cell);
        }
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


    window.addEventListener('resize', adjustCellSize);

  });
  
      