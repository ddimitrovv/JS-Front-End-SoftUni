function plantDiscovery(inputArray) {
    const num = Number(inputArray.shift());
    let allPlants = {};
    for (let i = 0; i < num; i++) {
        const [ plant, rarity] = inputArray.shift().split('<->');
        allPlants[plant] = {
            rarity: Number(rarity),
            rating: []
        };
    }
    while (true) {
        const currentCommand = inputArray.shift();
        if (currentCommand === 'Exhibition') {
            console.log('Plants for the exhibition:')
            for (plant in allPlants) {
                let sum = 0;
                if (allPlants[plant].rating.length > 0) {
                    let total = allPlants[plant].rating.reduce((a, b) => a + b);
                    sum = total / allPlants[plant].rating.length
                } else {
                    sum = 0
                }
                console.log(`- ${plant}; Rarity: ${allPlants[plant].rarity}; Rating: ${sum.toFixed(2)}`);
            }
            break
        } else if (currentCommand.includes('Rate')) {
            ratePlant(currentCommand)
        } else if (currentCommand.includes('Update')) {
            updatePlant(currentCommand)
        } else if (currentCommand.includes('Reset')) {
            resetPlant(currentCommand)
        }
    }

    function ratePlant(command) {
        const [ _command, plant, _, rating ] = command.split(' ');
        if (!(plant in allPlants)) {
            console.log('error')
            return
        }
        allPlants[plant].rating.push(Number(rating));
    }

    function updatePlant(command) {
        const [ _command, plant, _, newRarity ] = command.split(' ');
        if (!(plant in allPlants)) {
            console.log('error')
            return
        }
        allPlants[plant].rarity = Number(newRarity);
    }

    function resetPlant(command) {
        const [ _, plant ] = command.split(' ');
        if (!(plant in allPlants)) {
            console.log('error')
            return
        }
        allPlants[plant].rating = [];
    }
}

plantDiscovery(
    (["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)

plantDiscovery(
    (["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
)