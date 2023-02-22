function login(inputString) {
    let username = inputString[0];
    let attempts = 0;

    for (let i = 1; i <= inputString.length - 1; i++) {
        let current = inputString[i].split("").reverse().join("");

        if (username === current) {
            console.log(`User ${username} logged in.`);
        } else {
            attempts++;
            if (attempts === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log(`Incorrect password. Try again.`);
        }
        if (attempts === 4) {
            break;
        }
    }
}