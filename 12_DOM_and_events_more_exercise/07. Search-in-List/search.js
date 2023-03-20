function search() {
    const towns = Array.from(document.getElementById('towns').children);
    const searched = document.getElementById('searchText');
    const result = document.getElementById('result');
    const searchedWord = searched.value;
    let found = []
    for (const town of towns) {
        if (town.textContent.includes(searchedWord) && searchedWord !== '') {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            found.push(town.textContent)
        }
    }
    searched.value = ''
    result.textContent = `${found.length} matches found`
}
