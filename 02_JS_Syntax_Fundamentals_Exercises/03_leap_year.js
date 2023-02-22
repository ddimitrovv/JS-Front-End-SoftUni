function leapYear(year) {
    if ((year % 2 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`yes`);
    } else {
        console.log(`no`);
    }
}