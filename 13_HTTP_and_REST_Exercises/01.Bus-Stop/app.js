function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'
    const busId = document.getElementById('stopId').value;
    const busStopName = document.getElementById('stopName')
    const busesInformation = document.getElementById("buses");
    fetch(`${BASE_URL}${busId}`)
        .then((response) => response.json())
        .then((data) => {
            const {name, buses} = data;
            busStopName.textContent = name;
            for ( bus in buses ) {
                let li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
                busesInformation.appendChild(li);
            }
        })
        .catch((error) => busStopName.textContent = 'Error')
}