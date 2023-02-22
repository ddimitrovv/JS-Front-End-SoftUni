function wordsUppercase(sentence) {
    let words = sentence.split(/[^\w]/);
    let output = [];
    
    for (i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            output.push(words[i].toUpperCase());
        }
    }
    console.log(output.join(', '))
}