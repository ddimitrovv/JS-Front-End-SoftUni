function vacationPrice(amountOfPeople, typeOfPeople, dayOfWeek) {
    let totalAmount = 0;
    if (typeOfPeople === `Students`) {
        if (dayOfWeek === `Friday`) {
            totalAmount = amountOfPeople * 8.45;
        } else if (dayOfWeek === `Saturday`) {
            totalAmount = amountOfPeople * 9.80;
        } else if (dayOfWeek === `Sunday`) {
            totalAmount = amountOfPeople * 10.46;
        }
        if (amountOfPeople >= 30) {
            totalAmount -= totalAmount * 0.15;
        }
    } else if (typeOfPeople === `Business`) {
        let pricePerPerson = 0;
        if (dayOfWeek === `Friday`) {
            totalAmount = amountOfPeople * 10.90;
            pricePerPerson = 10.90;
        } else if (dayOfWeek === `Saturday`) {
            totalAmount = amountOfPeople * 15.60;
            pricePerPerson = 15.60;
        } else if (dayOfWeek === `Sunday`) {
            totalAmount = amountOfPeople * 16;
            pricePerPerson = 16;
        }
        if (amountOfPeople >= 100) {
            totalAmount -= pricePerPerson * 10;
        }
        
    } else if (typeOfPeople === `Regular`) {
        if (dayOfWeek === `Friday`) {
            totalAmount = amountOfPeople * 15;
        } else if (dayOfWeek === `Saturday`) {
            totalAmount = amountOfPeople * 20;
        } else if (dayOfWeek === `Sunday`) {
            totalAmount = amountOfPeople * 22.50;
        }
        if (amountOfPeople >= 10 && amountOfPeople <= 20) {
            totalAmount -= totalAmount * 0.05;
        }
    }
    console.log(`Total price: ${totalAmount.toFixed(2)}`);
}