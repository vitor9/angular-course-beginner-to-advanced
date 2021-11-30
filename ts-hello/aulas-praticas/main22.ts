class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

}

let point = new Point(1, 2);
let point2 = new Point(); // Sem erros de compilacao com vars opcionais( identificador ?)

point.draw();