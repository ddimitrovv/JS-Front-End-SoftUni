function piccolo(inputArray) {
    let parkedCars = [];

    for (i = 0; i < inputArray.length; i++) {
        let current = inputArray[i].split(', ');

        if ((current[0] === 'IN' &&  parkedCars.includes(current[1])) || (current[0] === 'OUT' && !(parkedCars.includes(current[1])))) {
            continue;
        }

        if (current[0] === 'IN') {
            parkedCars.push(current[1]);
        } else if (current[0] === 'OUT') {
            let index = parkedCars.indexOf(current[1]);
            parkedCars.splice(index, 1);
        }
    }

    if (parkedCars.length > 0) {
        console.log(parkedCars.sort((a, b) => a.localeCompare(b)).join('\n'))
    } else {
        console.log(`Parking Lot is Empty`)
    }
}