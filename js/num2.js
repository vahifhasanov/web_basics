"use strict";
const car = {
    speedometer: 0
};

Object.defineProperties(car, {
    setSpeedometer: {
        value: function (value) {
            this.speedometer = Number(value) || 0;
        },
        writable: true,
        configurable: true,
        enumerable: false
    },

    getSpeedometer: {
        value: function () {
            return this.speedometer;
        },
        writable: true,
        configurable: true,
        enumerable: false
    },

    clearSpeedometr: {
        value: function () {
            this.speedometer = 0;
        },
        writable: true,
        configurable: true,
        enumerable: false
    }
});


Object.defineProperties(car, {
    setSpeed: {
        value: function (value) {
            this.setSpeedometer(value);
            return this;
        },
        writable: true,
        configurable: true,
        enumerable: false
    },

    getSpeed: {
        value: function () {
            console.log("Актуаліті швидкість:", this.getSpeedometer());
            return this;
        },
        writable: true,
        configurable: true,
        enumerable: false
    },

    clearSpeed: {
        value: function () {
            this.clearSpeedometr();
            console.log("Швидкість була цейво сброшена");
            return this;
        },
        writable: true,
        configurable: true,
        enumerable: false
    }
});


car.setSpeedometer(120);
console.log("метод getSpeedometer():", car.getSpeedometer());
car.clearSpeedometr();
console.log("Після методу clearSpeedometr():", car.getSpeedometer());


car
    .setSpeed(200)
    .setSpeed(300)
    .getSpeed()
    .clearSpeed()
    .getSpeed();
