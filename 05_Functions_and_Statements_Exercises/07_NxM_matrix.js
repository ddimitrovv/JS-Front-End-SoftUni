function matrixMaker(number) {
    let matrix = [];
    for (let i = 0; i < number; i++) {
        let newRow = [];
        for (let i = 0; i < number; i++) {
            newRow.push(number)
        }
        matrix.push(newRow.join(' '))
    }
    console.log(matrix.join('\n'))
}