function pascalCaseSplitter(sentence) {
    sentence = sentence.split(/(?=[A-Z])/);
    console.log(sentence.join(', '))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')