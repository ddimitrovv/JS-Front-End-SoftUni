function reverseArrow (num, items) {
    let output = []
    for (let i = num-1; i >= 0; i--) {
        output.push(items[i])
    }
    console.log(output.join(' '))
}