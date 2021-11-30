class Point2 {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

}

let pointX = new Point2();

// pointX.x = 3;
// pointX.y = 2;
/*
    As duas linhas acima geram o seguinte erro de compilacao
    
    "Property 'x' is private and only accessible within class"
    
    Devido ao membros que estao sendo atribuido os seus valores serem
    de modificador de acesso "private".
*/

point.draw();