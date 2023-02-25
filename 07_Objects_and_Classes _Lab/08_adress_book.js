function addressBook(info) {
    let addressInfo = {};
    for (const person of info) {
        personInfo = person.split(':');
        addressInfo[personInfo[0]] = personInfo[1];
    }

    function sortByKeys(dict) {

        let sortedNames = Object
            .keys(dict)
            .sort((a, b) => a.localeCompare(b));
    
        let tempDict = {};
        for(let i = 0; i < sortedNames.length; i++) {
            tempDict[sortedNames[i]] = dict[sortedNames[i]];
        }
    
        return tempDict;
    }

    let sorted = sortByKeys(addressInfo)

    for (const [name, address] of Object.entries(sorted)) {
        console.log(`${name} -> ${address}`);
    }
}