document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const card = document.getElementById('bingo-card');
    
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            cell.classList.toggle('light');
            checkBingo();
        });
    });
    
    function checkBingo() {
        const grid = Array.from(cells).map(cell => cell.classList.contains('light'));
        const size = 5;
        let win = false;

        // Проверка по горизонтали
        for (let i = 0; i < size; i++) {
            if (grid.slice(i * size, (i + 1) * size).every(Boolean)) {
                win = true;
                break;
            }
        }

        // Проверка по вертикали
        for (let i = 0; i < size; i++) {
            if ([0, 1, 2, 3, 4].map(j => grid[i + j * size]).every(Boolean)) {
                win = true;
                break;
            }
        }

        // Проверка по диагонали
        if ([0, 1, 2, 3, 4].map(i => grid[i * (size + 1)]).every(Boolean) ||
            [0, 1, 2, 3, 4].map(i => grid[(i + 1) * (size - 1)]).every(Boolean)) {
            win = true;
        }

        // Изменение фона карты
        if (win) {
            card.classList.add('green');
        } else {
            card.classList.remove('green');
        }
    }
});
