class Calc {

    add(x, y) {
        this.x = x;
        this.y = y;
        return this.x + this.y;
    }

    sub(x, y) {
        this.x = x;
        this.y = y;
        return this.x - this.y;
    }

    mul(x, y) {
        this.x = x;
        this.y = y;
        return this.x * this.y;
    }

    div(x, y) {
        this.x = x;
        this.y = y;
        return this.x / this.y;
    }
}


let a = new Calc();

console.log(a.add(50, 60)); // => 110
console.log(a.sub(50, 60)); // => -10
console.log(a.mul(50, 60)); // => 3000
console.log(a.div(50, 60)); // => 0.8333333333333334