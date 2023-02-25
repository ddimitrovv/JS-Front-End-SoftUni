function carWash (commandsArray) {

    let percentClean = 0;

    for (let command of commandsArray) {
        if (command === 'soap') {
            percentClean += 10;
        } else if (command === 'water') {
            percentClean += percentClean * 0.2;
        } else if (command === 'vacuum cleaner') {
            percentClean += percentClean * 0.25;
        } else if (command === 'mud') {
            percentClean -= percentClean * 0.1;
        }
    }

    console.log(`The car is ${percentClean.toFixed(2)}% clean.`)
}