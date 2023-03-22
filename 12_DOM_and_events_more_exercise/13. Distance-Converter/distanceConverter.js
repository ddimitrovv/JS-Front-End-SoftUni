function attachEventsListeners() {
    const distanceToMeter = {
        'km' : function(a) {return a * 1000;},
        'm': function(a) {return a;},
        'cm': function(a) {return a / 100;},
        'mm': function(a) {return a / 1000;},
        'mi': function(a) {return a * 1609.34},
        'yrd': function(a) {return a * 0.9144},
        'ft': function(a) {return a * 0.3048},
        'in': function(a) {return a * 0.0254}
    }
    const fromMeter = {
        'km' : function(a) {return a / 1000;},
        'm': function(a) {return a;},
        'cm': function(a) {return a * 100;},
        'mm': function(a) {return a * 1000;},
        'mi': function(a) {return a / 1609.34},
        'yrd': function(a) {return a / 0.9144},
        'ft': function(a) {return a / 0.3048},
        'in': function(a) {return a / 0.0254}
    }

    const button = document.getElementById('convert');
    button.addEventListener('click', () => {
        const distance = Number(document.getElementById('inputDistance').value);
        const fromValue = document.querySelector('#inputUnits').value;
        const toValue = document.querySelector('#outputUnits').value;
        console.log(fromValue, toValue)
        const distanceInMeters = distanceToMeter[fromValue](distance);
        const wantedDistance = fromMeter[toValue](distanceInMeters);
        const outputDistance = document.getElementById('outputDistance');
        outputDistance.value = wantedDistance        
    })
}