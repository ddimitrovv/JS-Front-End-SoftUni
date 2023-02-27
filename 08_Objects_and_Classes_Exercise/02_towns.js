function townsInfo(cities) {

    let towns = [];

    function townMaker(town, latitude, longitude) {
        const townObject = {
            'town': town,
            'latitude': latitude,
            'longitude': longitude,
            }
            return townObject;
        }

    for (const currentCity of cities) {
        currentInfo = currentCity.split(' | ');
        const currentTown = townMaker(
            currentInfo[0], 
            parseFloat(currentInfo[1]).toFixed(2), 
            parseFloat(currentInfo[2]).toFixed(2));
        towns.push(currentTown)
    }

    for (const town of towns){
        console.log(town)
    }
}