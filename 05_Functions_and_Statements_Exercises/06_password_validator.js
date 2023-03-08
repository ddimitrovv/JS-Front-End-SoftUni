function passwordValidator(password) {

    let condition = true;
    let letterNumber = /^\w+$/;
    let count = (password.match(/\d/g) || []).length >= 2;
    
    if (password.length < 6 || 10 < password.length) {
        condition = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!password.match(letterNumber)) {
        condition = false;
        console.log('Password must consist only of letters and digits');
    }
    if (count) {
        condition = false;
        console.log('Password must have at least 2 digits');
    }
    if (condition) {
        console.log('Password is valid');
    }
}

// function passwordValidator(password) {

//     let condition = true;
    
//     if (lengthValidation(password)) {
//         condition = false;
//         console.log('Password must be between 6 and 10 characters');
//     }
//     if (letterNumber(password)) {
//         condition = false;
//         console.log('Password must consist only of letters and digits');
//     }
//     if (!passwordMatch(password)) {
//         condition = false;
//         console.log('Password must have at least 2 digits');
//     }
//     if (condition) {
//         console.log('Password is valid');
//     }

//     function lengthValidation(pass) {
//         return password.length < 6 || 10 < password.length
//     }
//     function passwordMatch(pass) {
//          return (password.match(/\d/g) || []).length >= 2;
//     }
//     function letterNumber(pass) {
//         let letterNumber = /^\w+$/;
//         return !pass.match(letterNumber)
//     }
// }