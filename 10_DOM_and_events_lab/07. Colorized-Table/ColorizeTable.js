function colorize() {
    const target = Array.from(document.querySelectorAll('table tr:nth-child(even)'));
    target.forEach(element => {
        element.style.backgroundColor = 'Teal';
    });
}