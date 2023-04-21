function horseRacing(inputArray) {
    let horses = inputArray.shift().split('|');

    while (true) {
        current = inputArray.shift();
        if (current === 'Finish') {
            output()
            break;
        } else if (current.includes('Retake')) {
            retake(current);
        } else if (current.includes('Trouble')) {
            trouble(current, horses);
        } else if (current.includes('Rage')) {
            rage(current, horses);
        } else if (current.includes('Miracle')) {
            miracle(current, horses);
        }
    }

    function retake(current) {
        const [ _, overtaking, overtaken ] = current.split(' ');
        if (!(horses.includes(overtaken)) || !(horses.includes(overtaking))) {
            return
        }
        const overtakingIndex = horses.indexOf(overtaking);
        const overtakenIndex = horses.indexOf(overtaken);
        if (overtakingIndex > overtakenIndex || overtakenIndex >= horses.length || overtakenIndex < 0 || overtakingIndex >= horses.length || overtakingIndex < 0 ) {
            return
        }
        [horses[overtakenIndex], horses[overtakingIndex]] = [horses[overtakingIndex], horses[overtakenIndex]]
        console.log(`${overtaking} retakes ${overtaken}.`)
    }

    function trouble(current) {
        const [ _, horse ] = current.split(' ');
        if (!(horses.includes(horse))) {
            return
        }
        const index = horses.indexOf(horse);
        if (index === 0 || index < 0 || index >= horses.length) {
            return
        }
        [horses[index],horses[index - 1]] = [horses[index - 1], horses[index]];
        console.log(`Trouble for ${horse} - drops one position.`)
    }

    function rage(current) {
        const [ _, horse ] = current.split(' ');
        if (!(horses.includes(horse))) {
            return
        }
        const index = horses.indexOf(horse);
        if (index < 0 || index >= horses.length) {
            return
        }
        if (index === horses.length - 2) {
            horses.splice(index, 1);
            horses.splice(horses.length, 0, horse);
        } else if (index < horses.length - 2) {
            horses.splice(index, 1);
            horses.splice(index + 2, 0, horse);  
        }
        console.log(`${horse} rages 2 positions ahead.`)
    }

    function miracle() {
        const horse = horses.shift();
        horses.push(horse);
        console.log(`What a miracle - ${horse} becomes first.`)
    }

    function output() {
        console.log(horses.join('->'));
        console.log(`The winner is: ${horses[horses.length - 1]}`)
    }
}

horseRacing(
    (['Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish'])
)
console.log('------------------------------------------------')
horseRacing(
    (['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish'])
)
console.log('------------------------------------------------')
horseRacing(
    (['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])
)