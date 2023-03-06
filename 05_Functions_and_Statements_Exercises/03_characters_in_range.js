function charsRange(charOne, charTwo) {
    let first = charOne.charCodeAt();
    let second = charTwo.charCodeAt();
    let symbols = [];
    let min = Math.min(first, second);
    let max = Math.max(first, second)

    for (i = min + 1; i < max; i++) {
    symbols.push(String.fromCharCode(i))
    }
    console.log(symbols.join(' '))
}