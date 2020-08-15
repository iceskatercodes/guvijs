
class TV {
    constructor() {
        this.brand = "Panasonic";
        this.price = 15200;
        this.channel = 1;
        this.volume = 50;
        this.default_channel = 1;
        this.default_volume = 50;
        this.maxChannel = 80;
        this.on_off = "on";
    }

    increaseVolume() {
        if (this.volume <= 100) {
            this.volume += 1;
        }
        return `${this.brand} is at channel ${this.channel}, volume ${this.volume}`;
    }

    decreaseVolume() {
        if (this.volume != 0) {
            this.volume -= 1;
        }
        return `${this.brand} is at channel ${this.channel}, volume ${this.volume}`;
    }

    setChannel(arg) {
        if (0 < arg && arg <= this.maxChannel) {
            this.channel = arg;
        }
        return `${this.brand} is at channel ${this.channel}, volume ${this.volume}`;
    }

    resetTV() {
        this.channel = this.default_channel;
        this.volume = this.default_volume;
        return `${this.brand} is at channel ${this.channel}, volume ${this.volume}`;
    }

    status() {
        return `${this.brand} is at channel ${this.channel}, volume ${this.volume}`;
    }
}

class LED_TV extends TV {
    constructor() {
        super();
        this.screenThickness = "55 inches";
        this.energyUsage = "220W";
        this.lifeSpan = "2 years";
        this.refreshRate = "90 HZ";
        this.viewingAngle = "30 degree";
        this.backlight = "20%";
    }

    displayDetails() {
        return this;
    }
}

class Plasma_TV extends TV {
    constructor() {
        super();
        this.screenThickness = "32 inches";
        this.energyUsage = "140W";
        this.lifeSpan = "3 years";
        this.refreshRate = "120 HZ";
        this.viewingAngle = "45 degree";
        this.backlight = "10%";
    }

    displayDetails() {
        return this;
    }
}

let a = new TV();

console.log(a.increaseVolume()); // => Panasonic is at channel 1, volume 51
console.log(a.decreaseVolume()); // => Panasonic is at channel 1, volume 50
console.log(a.increaseVolume()); // => Panasonic is at channel 1, volume 51
console.log(a.setChannel(23)); // => Panasonic is at channel 23, volume 51
console.log(a.setChannel(85)); // => Panasonic is at channel 23, volume 51
console.log(a.resetTV()); // => Panasonic is at channel 1, volume 50

let b = new Plasma_TV();
console.log(b.displayDetails()); // => result below