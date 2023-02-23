function perfectNumber(number) {
    let num = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            num += i;
        }
    }
    if(num / 2  === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    } 
}