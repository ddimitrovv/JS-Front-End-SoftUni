function namesList(names) {
    let sortedNames = names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    for (let i = 0; i < sortedNames.length; i++) {
        console.log(`${i + 1}.${sortedNames[i]}`)
    }
}