function censoredWords(sentence, word) {
    let censored=sentence.replace(word, '*'.repeat(word.length))
    do {
        censored=censored.replace(word, '*'.repeat(word.length))
    } while (censored.includes(word));
    
    console.log(censored)
}