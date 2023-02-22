function hashTag(sentence) {
    sentence = sentence.split(' ');
    let desiredWords = [];

    for (i = 0; i < sentence.length; i++) {
        let current = sentence[i];
        if (current.startsWith('#') && current.length > 1){
            current = current.slice(1, current.length)
            let letters = /^[A-Za-z]+$/;
            if(current.match(letters)) {
                desiredWords.push(current.replace(',', ''));
            }
        }
    }
    console.log(desiredWords.join('\n'));
}