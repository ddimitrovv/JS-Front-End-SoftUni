function flightSchedule(info) {
    let flightInfo = {};
    let flights = info[0];
    let statusUpdate = info[1];
    let searched = info[2][0]

    for (let flight of flights) {
        let [currentName, ...currentDestination] = flight.split(' ');
        flightInfo[`${currentName}`] = {};
        flightInfo[`${currentName}`].Destination = currentDestination.join(' ')
        flightInfo[`${currentName}`].Status = 'Ready to fly'
            
    }
    for (let currentUpdate of statusUpdate) {
        let [currentName, currentStatus] = currentUpdate.split(' ');
        if (flightInfo.hasOwnProperty(currentName)) {
            flightInfo[currentName].Status = currentStatus
        }  
    }
    for (const[_, info] of Object.entries(flightInfo)) {
        if (info.hasOwnProperty('Status')) {
            if (info.Status === searched) {
                console.log(info)
            }
        }
    }
}