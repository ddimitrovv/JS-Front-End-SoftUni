function printDna(input) {

    const symbols = 'ATCGTTAGGG'.split('')
    let counter = 1

    for (let i = 0; i < input; i++) {
        let firstLetter = symbols.shift()
        let secondLetter = symbols.shift()

        if (counter === 5) {
            counter = 1
        }
        if (counter === 1) {
            console.log(`**${firstLetter}${secondLetter}**`);
        }
        if (counter === 2) {
            console.log(`*${firstLetter}--${secondLetter}*`);
        }   
        if (counter === 3) {
            console.log(`${firstLetter}----${secondLetter}`);
        }
        if (counter === 4) {
            console.log(`*${firstLetter}--${secondLetter}*`);
        }

        symbols.push(firstLetter, secondLetter);
        counter++;
    }
}

printDna(10)