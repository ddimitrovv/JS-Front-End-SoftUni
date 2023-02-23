function charsRange(charOne, charTwo) {
    let first = charOne.charCodeAt();
    let second = charTwo.charCodeAt();
    let symbols = [];

    if (first < second) {
        for (i = first + 1; i < second; i++)
        symbols.push(String.fromCharCode(i))
        console.log(symbols.join(' '))
    } else {
        for (i = second + 1; i < first; i++)
        symbols.push(String.fromCharCode(i))
        console.log(symbols.join(' '))
    }
}