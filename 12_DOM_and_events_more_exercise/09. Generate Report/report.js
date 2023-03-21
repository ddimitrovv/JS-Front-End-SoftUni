function generateReport() {
    const output = document.getElementById('output');
    const table = document.getElementsByTagName('table');
    const tableHead = document.querySelector('body > main > table > thead');
    const checkBoxes = Array.from(tableHead.querySelectorAll('th > input'));

    let outputObj = [];
    let checkedIndices = [];
    for (const checkBox of checkBoxes) {
        if (checkBox.checked) {
            checkedIndices.push(checkBoxes.indexOf(checkBox));
        }
    }
    const tableTr = Array.from(document.querySelectorAll('tbody > tr'))
    tableTr.forEach(element => {
        let newObj = {};
        const tableTd = Array.from(element.querySelectorAll('td'));
        tableTd.forEach(element => {
            if(checkedIndices.includes(tableTd.indexOf(element))) {
                let name = tableHead
                    .querySelectorAll('th > input')[tableTd.indexOf(element)]
                    .name
                newObj[name] = element.textContent
            }
        });
        outputObj.push(newObj);
    });
    output.value = JSON.stringify(outputObj)
}
