function attachGradientEvents() {
    const target = document.getElementById('gradient');
    const result = document.getElementById('result');

    target.addEventListener('mousemove', (event) => {
        let percent = Math.trunc(event.offsetX / (event.target.clientWidth) * 100);
        document.getElementById('result').textContent = percent + "%";

    });
    
    target.addEventListener('mouseout', () => {
        result.textContent = ''
    });
}