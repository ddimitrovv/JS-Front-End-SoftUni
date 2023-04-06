function heroesOfCodeAndLogic(inputArray) {
    let heroes = {};
    const numHeroes = inputArray.shift();
    for (let i = 0; i < numHeroes; i++) {
        const [ heroName, hp, mp] = inputArray.shift().split(' ');
        heroMaker(heroName, hp, mp, heroes);
    }

    while (true) {
        current = inputArray.shift();
        if (current === 'End') {
            getHeroes(heroes)
            break;
        } else if (current.includes('CastSpell')) {
            castSpell(current, heroes);
        } else if (current.includes('TakeDamage')) {
            takeDamage(current, heroes);
        } else if (current.includes('Recharge')) {
            recharge(current, heroes);
        } else if (current.includes('Heal')) {
            heal(current, heroes);
        }
    }

    function heroMaker(name, hp, mp, heroes) {
        const heroHp = Number(hp);
        const heroMp = Number(mp);
        heroes[name] = { 
            HP: heroHp, 
            MP: heroMp
        }
    }

    function castSpell(current, heroes) {
        const [ _, heroName, mp, spellName ] = current.split(' - ');
        mpNeeded = Number(mp);
        if (heroes[heroName].MP < mpNeeded) {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            return;
        }
        heroes[heroName].MP -= mpNeeded;
        console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].MP} MP!`);
    }

    function takeDamage(current, heroes) {
        const [ _, heroName, damageTaken, attacker] = current.split(' - ');
        const damage = Number(damageTaken);
        heroes[heroName].HP -= damage;
        if (heroes[heroName].HP <= 0) {
            console.log(`${heroName} has been killed by ${attacker}!`); 
            delete heroes[heroName];
            return;
        }
        console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].HP} HP left!`)
    }

    function recharge(current, heroes) {
        const [ _, heroName, mpAmount ] = current.split(' - ');
        mp = Number(mpAmount);
        if ((heroes[heroName].MP + mp) > 200) {
            const diff = 200 - heroes[heroName].MP;
            heroes[heroName].MP = 200;
            console.log(`${heroName} recharged for ${diff} MP!`)
            return;
        }
        heroes[heroName].MP += mp;
        console.log(`${heroName} recharged for ${mp} MP!`)
    }

    function heal(current, heroes) {
        const [ _, heroName, hpAmount ] = current.split(' - ');
        hp = Number(hpAmount);
        if ((heroes[heroName].HP + hp) > 100) {
            const diff = 100 - heroes[heroName].HP;
            heroes[heroName].HP = 100;
            console.log(`${heroName} healed for ${diff} HP!`)
            return;
        }
        heroes[heroName].HP += hp;
        console.log(`${heroName} healed for ${hp} HP!`)
    }

    function getHeroes(heroes) {
        if (Object.keys(heroes).length === 0) {
            return;
        }
        for (const hero in heroes) {
            console.log(`${hero}\n  HP: ${heroes[hero].HP}\n  MP: ${heroes[hero].MP}`)
        }
    }
}

heroesOfCodeAndLogic(
    [2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']
)

heroesOfCodeAndLogic(
    [
        4,
        'Adela 90 150',
        'SirMullich 70 40',
        'Ivor 1 111',
        'Tyris 94 61',
        'Heal - SirMullich - 50',
        'Recharge - Adela - 100',
        'CastSpell - Tyris - 1000 - Fireball',
        'TakeDamage - Tyris - 99 - Fireball',
        'TakeDamage - Ivor - 3 - Mosquito',
        'End'
    ]
)