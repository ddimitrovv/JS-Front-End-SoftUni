function validityChecker(numbersArray) {
    let x1 = Number(numbersArray[0]);
    let y1 = Number(numbersArray[1]);
    let x2 = Number(numbersArray[2]);
    let y2 = Number(numbersArray[3]);
    let firstNum = Number.isInteger(Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2)));
    let secondNum = Number.isInteger(Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2)));
    let thirdNum = Number.isInteger(Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)));
    
    if (firstNum) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    if (secondNum) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    if (thirdNum) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}