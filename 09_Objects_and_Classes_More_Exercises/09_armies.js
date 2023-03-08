function armies(inputArray) {
    let leaders = {};
    let armyCountOfLeaders = {};
    for (const element of inputArray) {

        if (element.includes('arrives')) {
            let currentLeader = element.split(' arrives')[0];
            if (!leaders.hasOwnProperty(currentLeader)) {
                leaders[currentLeader] = {};
                armyCountOfLeaders[currentLeader] = 0;
            }
        } else if (element.includes('defeated')) {
            let currentLeader = element.split(' defeated')[0];
            if (leaders.hasOwnProperty(currentLeader)){
                delete leaders[currentLeader];
                delete armyCountOfLeaders[currentLeader];
            }
        } else if (!element.includes('+')) {
            let currentLeader = element.split(': ')[0];
            if (leaders.hasOwnProperty(currentLeader)) {
                let [armyName, armyCount] = element.split(': ')[1].split(', ');
                leaders[currentLeader][armyName] = Number(armyCount);
                armyCountOfLeaders[currentLeader] += Number(armyCount);
            }
        } else if (element.includes('+')) {
            let [army, count] = element.split(' + ');
            for (const [key, value] of Object.entries(leaders)) {
                if (value.hasOwnProperty(army)) {
                    value[army] += Number(count);
                    armyCountOfLeaders[key] += Number(count);
                }
            } 
        } 
    }

    let sortedLeaders = Object.entries(armyCountOfLeaders)
    .sort(([,a],[,b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    for (const leader of Object.keys(sortedLeaders)) {
        console.log(`${leader}: ${armyCountOfLeaders[leader]}`);
        let sortedArmies = Object.entries(leaders[leader]).sort((a, b) => b[1] - a[1]);
        for (const [key, value] of sortedArmies) {
            console.log(`>>> ${key} - ${value}`)
        }
    }
}