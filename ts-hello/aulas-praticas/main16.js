/*
Gera erro Type 'string' is not assignable to type 'number'.ts(2322)
let count = 5;
count = 'a';
*/
/*
let a: number;
a = 1;
// os codigos abaixo irao gerar erro por conta de que estao atribuindo outro valor
// diferente do type annotation de a
a = true;
a = 'a';
*/
var a;
var b;
var c;
var d;
var e;
var f;
var g = [1, 2, 3];
var h = [1, true, 'a', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
console.log(Color);
