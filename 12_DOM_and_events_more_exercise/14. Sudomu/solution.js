function solve() {
    const checkButton = document.querySelector('#exercise > table > tfoot > tr > td > button:nth-child(1)');
    const clearButton = document.querySelector('#exercise > table > tfoot > tr > td > button:nth-child(2)');
    const tableRows = Array.from(document.querySelectorAll('tbody > tr'));
    const table = document.querySelector('table');
    const outputParagraph = document.querySelector('#check > p');

    checkButton.addEventListener('click', () => {
        let matrix = [];
        tableRows.forEach(row => {
            cells = Array.from(row.querySelectorAll('td > input'));
            let newMatrixRow = [];
            cells.forEach(cell => {
                newMatrixRow.push(Number(cell.value));
            })
            matrix.push(newMatrixRow);
        })

        if (checkMatrix(matrix)) {
            table.style.border = '1px solid green';
            outputParagraph.textContent = 'You solve it! Congratulations!';
            outputParagraph.style.color = 'green';
        } else {
            table.style.border = '1px solid red';
            outputParagraph.textContent = 'NOP! You are not done yet...';
            outputParagraph.style.color = 'red';
        }
    });

    clearButton.addEventListener('click', () => {
        tableRows.forEach(row => {
            cells = Array.from(row.querySelectorAll('td > input'));
            cells.forEach(cell => {
                cell.value = '';
            })
        })
        table.style.border = 'none';
        outputParagraph.textContent = '';
        outputParagraph.style.color = '';
    })



    function checkMatrix(matrix) {
        const matrixLen = matrix.length;
        // check row
        for (let i = 0; i < matrixLen; i++) {
            let occurrences = {};
            for (let j = 0; j < matrixLen; j++) {
                let num = matrix[i][j]
                if (num > matrixLen || num < 1) {
                    return false;
                }
                if (!occurrences.hasOwnProperty(num)) {
                    occurrences[num] = 0
                }
                occurrences[num]++;
                if (occurrences[num] > 1) {
                    return false;
                }
            }
        }

        // check column
        for (let i = 0; i < matrixLen; i++) {
            let occurrences = {};
            for (let j = 0; j < matrixLen; j++) {
            let num = matrix[j][i]
                if (num > matrixLen || num < 1) {
                    return false;
                }
                if (!occurrences.hasOwnProperty(num)) {
                    occurrences[num] = 0
                }
                occurrences[num]++;
                if (occurrences[num] > 1) {
                    return false;
                }
            }
        }
        return true;
    }
}