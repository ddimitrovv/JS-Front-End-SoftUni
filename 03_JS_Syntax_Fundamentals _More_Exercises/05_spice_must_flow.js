function solve(yield) {
    let workingDays = 0;
    let spices = 0;

    while (yield > 99) {
        
        workingDays++;
        spices += yield - 26;
        yield -= 10;
    }
    
    if (workingDays > 0) {
        spices -= 26;
    }
    
    console.log(workingDays);
    console.log(spices);
    
}