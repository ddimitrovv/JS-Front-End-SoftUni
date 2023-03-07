function garage(inputArray) {
    let garages = {};
    for (const currentString of inputArray) {
        let [garageNum, info] = currentString.split(' - ')
        let current = info.split(', ');
        let currentObj = {};
        current.forEach(element => {
            const [key, value] = element.split(': ');
            if (!garages.hasOwnProperty(garageNum)) {
                garages[garageNum] = []
            }
            currentObj[`${key}`] = value;
            
        });
        garages[garageNum].push(currentObj)
    }
    for (const [key, value] of Object.entries(garages)) {
        console.log(`Garage № ${key}`);
        
        for (const item of value) {
            let cars = [];
            for (const [k, v] of Object.entries(item)) {
                cars.push(`${k} - ${v}`)
            }
            console.log(`--- ${cars.join(', ')}`)
        }
        
    }
}