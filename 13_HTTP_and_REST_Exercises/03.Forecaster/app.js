function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations'
    const CURRENT_CONDITIONS_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const THREE_DAY_FORECAST_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
    const location = document.getElementById('location');
    const getWeather = document.getElementById('submit');
    const displayForecast = document.getElementById('forecast');
    const forecastIcons = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    }

    getWeather.addEventListener('click', getWeatherForecast)
    
    function getWeatherForecast() {
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            let currentLocation = null;
            let currentCode = null;
            for (const elem of data) {
                if (elem.name === location.value) {
                    currentLocation = location.value;
                    currentCode = elem.code;
                    break;
                }
            }
            fetch(`${CURRENT_CONDITIONS_URL}${currentCode}`)
                .then((response) => response.json())
                .then((data) => {
                    div = document.createElement('div');
                    div.className = 'forecasts';
                    displayForecast.style.display = 'block';
                    currentElement = document.getElementById('current')
                    currentElement.appendChild(div);
                    let spanMain = document.createElement('span');
                    spanMain.className = 'condition';
                    const {forecast, name} = data;
                    let spanName = document.createElement('span');
                    spanName.className = 'forecast-data';
                    spanName.textContent = name;
                    let spanTemp = document.createElement('span');
                    spanTemp.className = 'forecast-data';
                    spanTemp.textContent = `${forecast['low']}\u00B0/${forecast['high']}\u00B0`
                    let newSpan = document.createElement('span');
                    newSpan.textContent = `${forecast['condition']}`;
                    newSpan.className = 'forecast-data'
                    spanMain.appendChild(spanName);
                    spanMain.appendChild(spanTemp);
                    spanMain.appendChild(newSpan);
                    let iconSpan = document.createElement('span');
                    iconSpan.className = 'condition symbol';
                    iconSpan.innerHTML = forecastIcons[forecast['condition']];
                    div.appendChild(iconSpan);
                    div.appendChild(spanMain);
                })
                .catch((error) => catchError())

            fetch(`${THREE_DAY_FORECAST_URL}${currentCode}`)
                .then((response) => response.json())
                .then((data) => {
                    currentElement = document.getElementById('upcoming')
                    let div = document.createElement('div');
                    div.className = 'forecast-info';
                    currentElement.appendChild(div);
                    data['forecast'].forEach((day) => {                        
                        let spanMain = document.createElement('span');
                        spanMain.className = 'upcoming';
                        let spanTemp = document.createElement('span');
                        spanTemp.className = 'forecast-data';
                        spanTemp.textContent = `${day['low']}\u00B0/${day['high']}\u00B0`
                        let newSpan = document.createElement('span');
                        newSpan.textContent = `${day['condition']}`;
                        newSpan.className = 'forecast-data';
                        let iconSpan = document.createElement('span');
                        iconSpan.className = 'symbol';
                        iconSpan.innerHTML = forecastIcons[day['condition']];
                        spanMain.appendChild(iconSpan);
                        spanMain.appendChild(spanTemp);
                        spanMain.appendChild(newSpan);
                        div.appendChild(spanMain);
                    })
                })
                .catch((error) => catchError())
        })
        .catch((error) => catchError())
    }

    function catchError () {
        const forecastDiv = document.getElementById('forecast');
        forecastDiv.style.display = 'block';
        forecastDiv.textContent = 'Error'
    }
}

attachEvents();