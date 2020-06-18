interface Customer {
    name: string,
    age: number
}

let customer: Customer ={
    name: "phamthaihung",
    age: 18
};

console.log(customer);

class Shape {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }
}

interface IArea {
    area(): number;
}

class Rect extends Shape implements IArea {
    public width: number;
    public height: number;

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width*this.height;
    }
}

const rect = new Rect(5, 5, 25, 25);

console.log(rect.toString());
console.log(rect.area());

console.log(rect);