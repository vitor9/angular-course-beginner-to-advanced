class Point {

    constructor(private _x?: number, private _y?: number) {}

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    
    set x(value) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0');
        }
        this._x = value;
    }

    get x() {
        return this._x;
    }

}

let point = new Point(1,2);

let pointX = point.x;
point.x = 10;

point.draw();