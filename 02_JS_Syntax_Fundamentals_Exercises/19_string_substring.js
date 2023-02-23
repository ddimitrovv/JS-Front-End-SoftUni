function findSubstring(word, sentence) {
    sentence = sentence.split(' ');
    let condition = false;

    for (i = 0; i < sentence.length; i++) {
        current = sentence[i];

        if (word.toLowerCase() === current.toLowerCase()) {
            console.log(word);
            condition = true;
            break;
        }
    }
    if (condition === false) {
        console.log(`${word} not found!`)
    }
}