function wordsTracker(inputArray) {
    let words = inputArray.shift(inputArray[0]).split(' ');
    let wordsCount = {};

    for (const word of words) {
        wordsCount[word] = 0;
    }

    for (const currentWord of inputArray) {
        if (currentWord in wordsCount) {
            wordsCount[currentWord]++;
        }
    }

    wordsCount = Object.entries(wordsCount)
    .sort(([,a],[,b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    for (const [word, count] of Object.entries(wordsCount)) {
        console.log(`${word} - ${count}`);
    }
}