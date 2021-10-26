let message; 
message = 'abc'
let endsWithC = (<string>message).endsWith('c')
let alternativeWay = (message as string).endsWith('c');

console.log("endsWithC:\t" + endsWithC);
console.log("alternativeWay:\t" + alternativeWay);

// OBS: O TS nao consegue executar o metodo endsWith se o compilador estiver como ES5. Teria de altera-lo para ES6:
// tsc -t ES6 main17.ts && node main17.js