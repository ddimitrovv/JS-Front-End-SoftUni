function perfectNumber(number) {
    let num = 0;
    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            num += i;
        }
    }
    if(num === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    } 
}