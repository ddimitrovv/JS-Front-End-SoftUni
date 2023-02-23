function numberModifier(number) {
    number = number.toString().split('');
    let numbersArray = []

    for (let i = 0; i < number.length; i++) {
        numbersArray.push(Number(number[i]))
    }

    while (true) {
        let currentAverage = 0;
        for (num of numbersArray) {
            currentAverage += num
        }
        if (currentAverage / numbersArray.length < 5) {
            numbersArray.push(9)
            continue;
        } else {
            console.log(numbersArray.join(''));
            break;
        }
    }
}