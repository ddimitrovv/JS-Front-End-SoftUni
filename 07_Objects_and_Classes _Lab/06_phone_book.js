function phoneBook(arrayInfo) {
    let person = {};

    for (const personInfo of arrayInfo) {
        let personDetails = personInfo.split(' ');
        person[personDetails[0]] = personDetails[1]
    }
 
    for (const[name, phoneNumber] of Object.entries(person)) {
        console.log(`${name} -> ${phoneNumber}`);
    }
}