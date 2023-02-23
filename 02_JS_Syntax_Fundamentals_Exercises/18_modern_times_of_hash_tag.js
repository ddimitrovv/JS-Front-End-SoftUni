function hashTag(sentence) {
    
    sentence = sentence.split(' ');
    let desiredWords = [];
    let letters = /^[A-Za-z]+$/;

    for (const word of sentence) {
        let current = word;
        if (current.startsWith('#') && current.length > 1){
            current = current.slice(1, current.length)
            
            if(current.match(letters)) {
                desiredWords.push(current.replace(',', ''));
            }
        }
    }
    console.log(desiredWords.join('\n'));
}