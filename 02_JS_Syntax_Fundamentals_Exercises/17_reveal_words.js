function revealWords(words, sentence) {
    words = words.split(', ');
     
    for (let i = 0; i < words.length; i++){
        toReplace = '*'.repeat(words[i].length);
        if (sentence.includes(toReplace)) {
        sentence = sentence.replace(toReplace , words[i]);
        }
    }
    console.log(sentence);
}