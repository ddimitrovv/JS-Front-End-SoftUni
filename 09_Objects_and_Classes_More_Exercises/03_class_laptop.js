class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
    }

    get price() {
        return Number((800 - (this.info['age'] * 2) + (this.quality * 0.5)).toFixed(1))
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
    }
    turnOff() {
        this.isOn = false;
        this.quality--;
    }
    showInfo() {
        return JSON.stringify(this.info)
    }
}