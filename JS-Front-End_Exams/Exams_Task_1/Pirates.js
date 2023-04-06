function pirates(inputArray) {
    let cities = {};
    while (true) {
        current = inputArray.shift();
        if (current === 'Sail') {
            break;
        }
        makeCity(cities, current);
    }

    while (true) {
        current = inputArray.shift();
        if (current === 'End') {
            (Object.keys(cities).length > 0)? citiesLeftOutput(cities) : citiesNotLeftOutput();
            break;
        } else if (current.includes('Plunder')) {
            plunderCity(cities, current);
        } else if (current.includes('Prosper')) {
            prosperCity(cities, current);
        }
    }

    function makeCity(cities, current) {
        const [ cityName, cityPopulation, cityGold ] = current.split('||');
        const population = Number(cityPopulation);
        const gold = Number(cityGold);
        if (!(cityName in cities)) {
            cities[cityName] = {
                population: 0,
                gold: 0
            }
        }
        cities[cityName].population += population;
        cities[cityName].gold += gold;
    }

    function plunderCity(cities, current) {
        const [_, city, numberOfPeople, amountOfGold ] = current.split('=>');
        const peopleKilled = Number(numberOfPeople);
        const goldStolen = Number(amountOfGold);
        if (!(city in cities)) {
            return;
        }

        cities[city].population -= peopleKilled;
        cities[city].gold -= goldStolen;
        console.log(`${city} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`)

        if ((cities[city].population <= 0) || (cities[city].gold <= 0)) {
            delete cities[city];
            console.log(`${city} has been wiped off the map!`)
            return;
        }        
    }

    function prosperCity(cities, current) {
        const [ _, city, goldEarned] = current.split('=>');
        const goldToAdd = Number(goldEarned);
        if (!(city in cities)) {
            return;
        }
        if (goldToAdd < 0) {
            console.log(`Gold added cannot be a negative number!`);
            return;
        }
        cities[city].gold += goldToAdd;
        console.log(`${goldToAdd} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`)
    }    

    function citiesLeftOutput(cities) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for ( const city in cities ) {
            console.log(`${city} -> Population: ${cities[city].population} citizens, Gold: ${cities[city].gold} kg`)
        }
    }

    function citiesNotLeftOutput() {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}

pirates(
    ["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]
)

pirates(
    ["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]
)