function ageDeterminate(age) {
    if (0 <= age && age <= 2) {
        console.log(`baby`);
    } else if (3 <= age && age <= 13) {
        console.log(`child`);
    } else if (14 <= age && age <= 19) {
        console.log(`teenager`);
    } else if (20 <= age && age <= 65) {
        console.log(`adult`);
    } else if (66 <= age ) {
        console.log(`elder`);
    } else {
        console.log(`out of bounds`);
    }
}