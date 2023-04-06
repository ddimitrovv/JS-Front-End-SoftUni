function needForSpeed(inputArray) {
    const num = Number(inputArray.shift());
    let allCars = {};
    for ( i = 0; i < num; i++ ) {
        const [car, mileage, fuel] = inputArray.shift().split('|');
        allCars[car] = {
            mileage: Number(mileage), 
            fuel: Number(fuel)
        };
    }
    while (true) {
        currentCommand = inputArray.shift();
        if (currentCommand === 'Stop') {
            outputFunction(allCars);
            break
        } else if (currentCommand.includes('Drive')) {
            driveCar(currentCommand);
        } else if (currentCommand.includes('Refuel')) {
            refuelCar(currentCommand);
        } else if (currentCommand.includes('Revert')) {
            revertCar(currentCommand);
        }
    }

    function driveCar(command) {
        const [ _, car, distanceToPass, fuelNeeded] = command.split(' : ');
        const fuel = Number(fuelNeeded);
        const distance = Number(distanceToPass);
        if (allCars[car].fuel < fuel) {
            console.log('Not enough fuel to make that ride');
            return
        }
        allCars[car].fuel -= fuel;
        allCars[car].mileage += distance;
        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        if (allCars[car].mileage > 100000) {
            delete allCars[car];
            console.log(`Time to sell the ${car}!`);
        }
    }

    function refuelCar(command) {
        const [ _, car, fuelForRefill] = command.split(' : ');
        const fuel = Number(fuelForRefill);
        const fuelNeeded = (allCars[car].fuel + fuel > 75)? (75 - allCars[car].fuel) : fuel; 
        allCars[car].fuel = (allCars[car].fuel + fuel > 75)? 75 : allCars[car].fuel + fuel;
        console.log(`${car} refueled with ${fuelNeeded} liters`)
    }

    function revertCar(command) {
        const [ _, car, kilometersToRevert] = command.split(' : ');
        const kilometers = Number(kilometersToRevert);
        if (allCars[car].mileage - kilometers < 10000) {
            allCars[car].mileage = 10000;
            return
        }
        allCars[car].mileage -= kilometers;
        console.log(`${car} mileage decreased by ${kilometers} kilometers`)
    }

    function outputFunction(cars) {
        for (const car in cars) {
            console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`)
        }
    }
}

needForSpeed(
    [
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
      ]
)