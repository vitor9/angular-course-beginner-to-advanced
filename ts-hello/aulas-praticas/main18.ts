// Antes escreviamos funcoes curtas assim:
/*
let log = function(message) {
    console.log(message);
}
*/

// Com arrow functions, escrevemos assim
/*
let doLog = (message) => {
    console.log(message);
}
*/

// Se nosso codigo tiver apenas uma linha:
// let log = (message) => console.log(message);

// Se nosso codigo tiver apenas uma linha e 1 parametro
// let log = message => console.log(message);

// Sem nenhum parametro
let log = () => console.log();