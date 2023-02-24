function radioCrystals(numbers) {
    
    let thickness = numbers.shift();
 
    for (const current of numbers) {
        let currentThickness = current;
 
        console.log(`Processing chunk ${currentThickness} microns`);
 
        let totalCut = 0;
        let totalLap = 0;
        let totalGrind = 0;
        let totalEtch = 0;
 
        while (currentThickness !== thickness) {
            while (currentThickness / 4 >= thickness) {
                currentThickness /= 4;
                totalCut++;
            }
            if (totalCut > 0) {
                console.log(`Cut x${totalCut}`);
                // transportingWashing(currentThickness);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }
 
            while (currentThickness * 0.8 >= thickness) {
                currentThickness *= 0.8;
                totalLap++;
            }
            if (totalLap > 0) {
                console.log(`Lap x${totalLap}`);
                // transportingWashing(currentThickness);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }
 
            while (currentThickness - 20 >= thickness) {
                currentThickness -= 20;
                totalGrind++;
            }
            if (totalGrind > 0) {
                console.log(`Grind x${totalGrind}`);
                // transportingWashing(currentThickness);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }
 
            while (currentThickness - 2 >= thickness - 1) {
                currentThickness -= 2;
                totalEtch++;
            }
            if (totalEtch > 0) {
                console.log(`Etch x${totalEtch}`);
                // transportingWashing(currentThickness);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }
 
            if (currentThickness < thickness) {
                currentThickness += 1;
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${thickness} microns`);
    }

    // function transportingWashing(num) {
    //     console.log(`Transporting and washing`)
    //     return Math.floor(num)
    // }
}