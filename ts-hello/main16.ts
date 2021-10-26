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

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: number[][];
let g: number[] = [1,2,3];
let h: any[] = [1, true, 'a', false];

enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };

console.log(Color);