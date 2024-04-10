class Triangle {
    private _sideA: number;
    private _sideB: number;
    private _sideC: number;

    constructor(sideA: number, sideB: number, sideC: number) {
        this._sideA = sideA;
        this._sideB = sideB;
        this._sideC = sideC;
    }

    // Getter'iai
    get sideA(): number {
        return this._sideA;
    }

    get sideB(): number {
        return this._sideB;
    }

    get sideC(): number {
        return this._sideC;
    }

    // Setter'iai
    set sideA(value: number) {
        if (value + this._sideB > this._sideC && value + this._sideC > this._sideB) {
            this._sideA = value;
        } else {
            throw new Error("Invalid side length for a triangle");
        }
    }

    set sideB(value: number) {
        if (this._sideA + value > this._sideC && this._sideA + this._sideC > value) {
            this._sideB = value;
        } else {
            throw new Error("Invalid side length for a triangle");
        }
    }

    set sideC(value: number) {
        if (this._sideA + this._sideB > value && this._sideA + value > this._sideB) {
            this._sideC = value;
        } else {
            throw new Error("Invalid side length for a triangle");
        }
    }
    // Metodas patikrinti ar galima sudaryti trikampį
    isValidTriangle(): boolean {
        return this._sideA + this._sideB > this._sideC &&
               this._sideA + this._sideC > this._sideB &&
               this._sideB + this._sideC > this._sideA;
    }
    // toString metodas
    toString(): string {
        return `Triangle: sides A = ${this._sideA}, B = ${this._sideB}, C = ${this._sideC}`;
    }
    // Metodas perimetro apskaičiavimui
    getPerimeter(): number {
        return this._sideA + this._sideB + this._sideC;
    }
    // Metodas ploto apskaičiavimui
    getArea(): number {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this._sideA) * (s - this._sideB) * (s - this._sideC));
    }
}
//  masyvas su trimis trikampiais
let triangles: Triangle[] = [
    new Triangle(3, 4, 5),
    new Triangle(6, 8, 10),
    new Triangle(5, 12, 13)
];

// Apskaičiuokime visų trikampių plotų sumą
let totalArea: number = 0;
for (let triangle of triangles) {
    totalArea += triangle.getArea();
}

console.log(`Total area of all triangles: ${totalArea}`);
