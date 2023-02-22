function gladiatorExpences(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expences = 0;
    let shiedBroken = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            expences += helmetPrice;
        }
        if (i % 3 === 0) {
            expences += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            expences += shieldPrice;
            shiedBroken++;
            if (shiedBroken % 2 === 0) {
                expences += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
}