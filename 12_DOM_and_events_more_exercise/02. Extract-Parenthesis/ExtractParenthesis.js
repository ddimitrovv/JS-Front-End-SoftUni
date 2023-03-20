function extract(content) {
    const target = document.getElementById(content).textContent;
    let matches = target
        .match(/\(([^)]+)\)/g)
        .map(x => x.replace(/[()]/g, ""))
        .toString()
        .split(',')
        .join('; ');
    return matches;
}