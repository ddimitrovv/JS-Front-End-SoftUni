function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const arriveButton = document.getElementById('arrive');
    const departButton = document.getElementById('depart');
    const outputInfo = document.querySelector('.info');
    let busId = 'depot'
    let currentStop = null;


    function depart() {
        departButton.disabled = true;
        arriveButton.disabled = false;
        fetch(`${BASE_URL}${busId}`)
            .then((response) => response.json())
            .then((data) => {
                currentStop = data.name;
                outputInfo.textContent = `Next stop ${currentStop}`;
                busId = data.next;
            })
    }

    async function arrive() {
        departButton.disabled = false;
        arriveButton.disabled = true;
        outputInfo.textContent = `Arriving at ${currentStop}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();