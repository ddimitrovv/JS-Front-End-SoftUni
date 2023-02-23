function pyramidOfDjoser (base, increment) {

    let stoneNeeded = 0;
    let marbleNeeded = 0;
    let lapisLazuliNeeded = 0;
    let goldNeeded = 0;
    let step = 0;

    while (base - 2 > 0) {

        step++;
        stoneNeeded += ((base - 2) ** 2) * increment;
        if (step % 5 === 0) {
            lapisLazuliNeeded += (base * 4 - 4) * increment;
        } else {
            marbleNeeded += (base * 4 - 4) * increment;
        }
        base -= 2 ;
        
    }

    step++;
    goldNeeded += (base ** 2) * increment;
    
    console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
    console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliNeeded)}`);
    console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}