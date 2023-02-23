function passwordValidator(password) {

    let condition = true;
    let letterNumber = /^[0-9a-zA-Z]+$/;
    let count = (password.match(/\d/g) || []).length;
    
    if (password.length < 6 || 10 < password.length) {
        condition = false;
        console.log('Password must be between 6 and 10 characters');
    }
    if (!password.match(letterNumber)) {
        condition = false;
        console.log('Password must consist only of letters and digits');
    }
    if (count < 2) {
        condition = false;
        console.log('Password must have at least 2 digits');
    }
    if (condition) {
        console.log('Password is valid');
    }
}