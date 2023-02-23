function palindromeChecker(numbersArray) {
    for (let number of numbersArray) {

        let num = number.toString()
        let firtsHalf = num.slice(0, Math.floor(num.length / 2));
        let secondHalf = 0;

        if (num.length % 2 === 0) {
            secondHalf = num.slice(Math.floor(num.length / 2), num.length).split("").reverse().join("");
        } else {
            secondHalf = num.slice(Math.floor(num.length / 2 + 1), num.length).split("").reverse().join("");
        }
        
        if (firtsHalf === secondHalf) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}