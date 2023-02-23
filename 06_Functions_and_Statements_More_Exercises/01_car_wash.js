function carWash (commandsArray) {

    let percenrClean = 0;

    for (let command of commandsArray) {
        if (command === 'soap') {
            percenrClean += 10;
        } else if (command === 'water') {
            percenrClean += percenrClean * 0.2;
        } else if (command === 'vacuum cleaner') {
            percenrClean += percenrClean * 0.25;
        } else if (command === 'mud') {
            percenrClean -= percenrClean * 0.1;
        }
    }

    console.log(`The car is ${percenrClean.toFixed(2)}% clean.`)
}