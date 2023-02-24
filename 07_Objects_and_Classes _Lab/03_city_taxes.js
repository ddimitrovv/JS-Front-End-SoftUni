function cityTaxes(cityName, population, treasury) {
    const cityInfo = {
        'name': cityName,
        'population': population,
        'treasury':treasury,
        'taxRate': 10,
        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += this.population * (percentage / 100)
        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * (percentage / 100)
        }
    };

    return cityInfo

}