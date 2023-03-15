function sumTable() {
    const target = Array.from(document.querySelectorAll('table td:nth-child(even)'));
    const sum = target.pop();
    let total = 0;
    target.forEach(element => {
        total += Number(element.textContent);
    });
    sum.textContent = total;
}