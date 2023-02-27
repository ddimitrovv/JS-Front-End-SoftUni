function inventory(input) {
    let heroes = [];
    function heroMaker(heroName, heroLevel, heroItems){
        const heroObject = {
            'name': heroName,
            'level': heroLevel,
            'items': heroItems,
        }
        return heroObject;
    }

    for (const heroInfo of input) {
        let currentHeroInfo = heroInfo.split(' / ');
        const currentHero = heroMaker(
            currentHeroInfo[0],
            currentHeroInfo[1],
            currentHeroInfo[2]
        );
        heroes.push(currentHero);
    }

    sortedHeroes = [...heroes].sort((a, b) => {
         return a['level'] - b['level']
    })

    for (const hero of sortedHeroes) {
            console.log(`Hero: ${hero.name}`)
            console.log(`level => ${hero.level}`)
            console.log(`items => ${hero.items}`)
        }
    
}