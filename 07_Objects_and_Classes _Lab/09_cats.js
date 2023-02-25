function cats(info) {
    let catsArray = [];

    function catMaker(catName, catAge) {
    const catObject = {
        'name': catName,
        'age': catAge,
        meow() {
            return `${this.name}, age ${this.age} says Meow`
            }
        }
        return catObject;
    }
    
    for (const cat of info) {
        let currentInfo = cat.split(' ');
        const current = catMaker(currentInfo[0], currentInfo[1]);
        catsArray.push(current);
    }

    for (const currentCat of catsArray) {
        console.log(currentCat.meow());
    }
}