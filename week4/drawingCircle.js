class Circle {
    constructor(...arr) {
        this.radius = arr[0];
        this.color = arr[1];

        // Below in this constructor, the logic is told in the class and not from the UML.

        this.arr = arr.filter((i) => i != undefined);

        if (this.arr.length == 0) {
            console.log("Empty")
        } else if (this.arr.length == 1) {
            console.log(`Radius : ${this.radius}`)
        } else {
            console.log(`Radius : ${this.radius}, Color : ${this.color}`)
        }
    }
    
    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(rad) {
        this.radius = rad;
    }

    setColor(col) {
        this.color = col;
    }

    toString(){
        return `Radius : ${this.radius}, Color : ${this.color}`;
    }

    getArea(){
        return Math.PI * Math.pow(this.radius, this.radius);
    }

}

let a = new Circle()    // => Empty
let b = new Circle(5.5) // => Radius : 5.5
let c = new Circle(5.5, "red")  // => Radius : 5.5, Color : red