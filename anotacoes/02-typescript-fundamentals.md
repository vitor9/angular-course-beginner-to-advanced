# Typescript Fundamentals

---

## Intro

Teremos uma nocao dos seguintes topicos:

* Type annotations
* Arrow functions
* Interfaces
* Classes
* Constructors
* Access modifiers
* Properties
* Modules

---

## O que é o TypeScript?

Primeiramente, typescript nao eh uma linguagem, e sim uma "sub-linguagem" do javascript. Isso significa que qualquer codigo valido de javascript, eh valido tbm para o typescript.
Porém, typescript tem recursos adicionais que nao existem na versao atual do javascript compativeis com o navegador.

Esses recursos sao:

* Tipagem. Opcional, porem eh melhor para debug
* Recursos de orientacao a objetos, como classes, interface, modificadores, visibilidade, etc.
* Erros e compilação, além de só em tempo de compilacao.
* Otimas ferramentas, como intelisense e lint.

---

## 14. Primeiro programa TypeScript

Primeiramente devemos instalar o typescript globalmente em nossa maquina. Para isso, rodamos o comando:
`npm install -g typescript`

Listamos a versao do nosso compilador typescript:
`tsc --version`

Ao criar o arquivo main.ts, precisamos transpilar o arquivo typescript em javascript
`tsc main.ts`

Apos rodar o comando, o javascript nos gera o arquivo `main.js`. Esse processo  de transpilacao acontece automaticamente de baixo dos panos. Nao precisamos manualmente chamar por `tsc` sempre que vamos rodar o comando `ng serve` do angular cli.

Podemos tambem executar o arquivo main.js com o node:
`node main.js`

Para logar a msg:
> "Hello World"

---

## 15. Declarando Variaveis

Em TypeScript, existem duas maneiras para declarar variaveis:

```javascript
var number = 1;
let count = 2;
```

JavaScript tem 2 versoes:

* ES5(ECMAScript 5): Compatibilidade com todos os navegadores
* ES6(2015)
* ES2016, ES2017...

Em ES6, também tem o let.

Apos criar o arquivo main15.ts, transpilamos o ts e rodamos com o node o js:
`tsc main.ts && node main.js`

E temos o seguinte resultado:
>0
1
2
3
4
Finally: 5

No mundo do typescript, isso eh uma ma pratica, ja que o conteudo do `i` esta visivel fora do escopo em que ele foi declarado.

Em JS, uma variavel declarada com `var` eh visivel em qualquer lugar da funcao mais proxima, que no caso eh `doSomething()`.

Se formos no arquivo ts e mudarmos a declaracao da variavel dentro do for, de `var i = 0;` para `let i = 0;`, recebemos um erro de compilacao do typescript, aonde esta sendo logado o i fora do escopo do for:
`console.log('Finally: ' + i);`
> Cannot find name 'i'.ts(2304)

Por conta de que a variavel `i` declarada com `let` foi armazenada no escopo do `for`, impossibilitando de dar visilibdade fora do escopo do `for`. Esse eh tambem eh um padrao do typescript.

Se rodarmos novamente os comandos para rodar nossos arquivos:
`tsc main.ts && node main.js`

Recebemos o mesmo erro que vimos antes
> Cannot find name 'i'.ts(2304)

Se abrirmos o nosso arquivo transpilado js, podemos ver que o i ainda esta como var e nao let. Por padrao, o compilador do typescript compila nosso codigo typescript para ES5 que eh a versao antiga do js que eh compativel com todos os navegadores, isso nao o torna um codigo invalido.

Ou seja, apesar do TS reportar esses erros, ele ainda gera codigo javascript valido. De agora em diante, vamos apenas gerar variaveis com let.

---

## 16. Tipos

Conforme o arquivo main16.ts, ao criar a variavel count como `let count = 5`, se tentarmos alterar seu valor para outro tipo, como por exemplo `count = 'a'`, iremos receber um erro de compilacao:
> Type 'string' is not assignable to type 'number'.ts(2322)

Podemos fazer isso no JavaScript, porem, no typescript, recebemos o erro por conta da tipagem do ts. Se validarmos o nosso codigo transpilado:

```javascript
var count = 5;
count = 'a';
```

Notamos que o tipo de dado esta como var, por conta de que o ts transpilou para um codigo compativel com os navegadores.
Porem, codigo como esse eh garantido dar problema no futuro, porque pode ser que por exemplo, utilizemos essa variavel count dentro de um for.

Se validarmos no nosso codigo TS passando o mouse em `count`, vemos que o ts definiu `count` como `number` por conta de que atribuimos o valor dela para 5, entao certamente espera um numero.
O que sera que acontece se declararmos uma variavel sem falor?
`let a`, ao passar o mouse em cima da variavel: `let a: any`. Isso eh exatamente a forma que fica com as variaveis de js. Com isso, podemos atribuir qualquer valor para essa variavel, `a = 1, a = true, a = 'a'` que nem mesmo o TS reclama.
Temos uma solucao para isso, quando nao sabemos o valor da variavel logo de cara, podemos utilizar o type annotations.

Declaramos `let a: number`, e todas as diversas atribuições anteriores que fizemos irão dar erro, com exceção do `a = 1;`. Temos as seguintes type annotations:

```javascript
// Eh possivel ter as seguintes variaveis com type annotations:
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: number[][];
let g: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];
```

Tambem temos o tipo ENUM. Por exemplo, Se estivermos trabalhando com um grupo de constantes relacionadas, tipo cores. Em javascript puro/antigo, iriamos fazer da seguinte maneira:

```javascript
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
```

Em um ENUM, podemos colocar todas as constantes relacionadas em um "container". Em TypeScript, podemos declarar um ENUM da seguinte maneira:

```javascript
enum Color { Red, Green, Blue }
let backGroundColor = Color.Red //Intelisense sugere os ENUMs criados
```

Os ENUMs de cores automaticamente já recebem um número como valor, nao eh necessario especificar os numeros de cada valor do Enum, mas por boas praticas, eh melhor deixar explicito.

Esse é o resultado que temos ao logar a variavel Color:
> { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }

Ao especificar os numeros de cada elemento do Enum, temos o seguitne resultado

```javascript
enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };
console.log(Color);
```

>{
  '0': 'Red',
  '1': 'Green',
  '2': 'Blue',
  '3': 'Purple',
  Red: 0,
  Green: 1,
  Blue: 2,
  Purple: 3
}

---

## 17. Type Assertions

Algumas vezes, o TS acaba se confundindo com o tipo de variavel, por exemplo,
Por padrao, quando inicialisamos uma variavel e nao damos um valor/tipo a ela, ela sera do tipo `any`.

```javascript
let message; // aqui ja esta sendo enxergado como any
message = 'abc'
let endsWithC = message.endsWith('c');
```

Intelisense so sugeriu os metodos para a variavel quando ela estava com o seu valor/tipo declarado.
Neste caso, precisamos falar explicitamente para o compilador do TypeScript que essa mensagem de variavel eh na verdade uma String, e eh isso que chamamos de Type Assertions.

Podemos fazer isso de 2 maneiras, a primeira eh para colocar um prefixo nessa variavel:

```javascript
let message; 
message = 'abc'
let endsWithC = (<string> message).endsWith('c'); // Aqui ja deu sugestoes do intelisense
```

E da outra maneira

```javascript
let message; 
message = 'abc'
let endsWithC = (message as string).endsWith('c'); // Aqui ja deu sugestoes do intelisense
```

Esse sera o resultado:
> endsWithC:      true
alternativeWay: true

**NOTA:** O TS nao consegue executar o metodo endsWith se o compilador estiver como ES5. Teria de altera-lo para ES6:
`tsc -t ES6 main17.ts && node main17.js`

---

## 18. Arrow Functions

Em outras linguagens como Java e C#, temos o conceito de Lambda Expressions, no JavaScript, ela se chama Arrow Functions

Antes escreviamos funcoes curtas assim:

```javascript
let log = function(message) {
    console.log(message);
}
```

Com arrow functions, escrevemos assim

```javascript
let log = (message) => {
    console.log(message);
}
```

Se nosso codigo tiver apenas uma linha, podemos deixar
mais minimalista e limpo com uma linha só:

```javascript
let log = (message) => console.log(message);
```

Se tiver apenas um parametro, retiramos os parenteses do parametro, porem, torna o codigo menos facil de ler, por que nao ficaa explicito que eh um parametro:

```javascript
let log = message => console.log(message);
```

Agora se nao tivermos nenhum parametro, podemos remover os parenteses:

```javascript
let log = () => console.log();
```

---

## 19. Interfaces

Quando estivermos trabalhando na escalabilidade de um metodo, pode ser que uma funcao termine com varios parametros, como por exemplo:

```javascript
let drawPoint = (x, y, a, b, c, d, e) => {
    // ...
}
```

Eh provavel que um grupo desses parametros, ou talvez todos eles, pertencem a apenas um conceito só. Por exemplo, carro tem varios propriedades, como bancos, farois, portas, pneus, etc. Nao eh uma boa pratica passar todos eles por parametros, mas sim, **encapsular eles em um objeto e passar por parametro.**

```javascript
let drawPoint = (point) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
})
```

Apesar de estarmos passando um objeto por parametro, o nosso algoritmo ainda esta esperando os parametros x, y. A primeira solucao para isso, seria utilizar in-line annotation, que ficaria dessa forma:

```javascript
let drawPoint = (point: { x: number, y: number }) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
})
```

Em casos simples, isso eh facil, porem, isso fica verboso, e conforme vamos escalando o nosso codigo, a quantidade de parametros vai aumentando, e também, pode ser que em algum outro lugar tenha outra funcao esperando aquele objeto `point`, nao queremos repetir esse mesmo object literal em multiplas partes de nosso codigo. Para esses casos, uma melhor solucao seria utilizar uma **interface**.

```javascript
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
})
```

Isso torna nosso codigo muito mais limpo e podemos reutilizar isso em multiplos lugares. Note tambem, a convencao da nomenclatura utilizada na interface, que eh Pascal. Entao, toda primeira letra de qualquer palavra deve ser maiuscula `Point`.

---

## 20. Classes

Em nossa ultima aula, utilizamos a aclasse main19.ts para definir a forma Point de um objeto. Porém há um problema com esta implementação.

Em POO, temos o conceito chamado de Cohesao. Isso significa que coisas que sao relacionadas, devia fazer parte de uma unidade só. Eles devem ir juntos.

Utilizamos uma interface para definir a forma de um objeto.

```javascript
interface Point {
    x: number,
    y: number
}
```

e abaixo temos uma funcao standalone

```javascript
let drawPoint = (point: Point) => {
    // ...
}
```

E eh ai aonde violamos o conceito de cohesao. O conceito de drawPoint(segundo codigo mencionado) eh altamente relacionado com a estrutura de um Point(primeiro codigo mencionado), nao deviam estar em funcoes separadas.

Outro exemplo de drawPoint violando os principios de cohesao:

```javascript
let getDistance = (pointA: Point, pointB: Point) => {
    // ...
}
```

Temos duas funcoes(o primeiro codigo e o terceiro que eh o que acabamos de escrever) que estao separadas do Point object(primeiro codigo).

Por conta de que esses codigos estao  bem relacionados, eles deviam fazer parte de apenas uma unidade. Em POO, chamamos essa unidade de Classe.

Uma classe agrupa variaveis/propriedades e funcoes(metodos) que sao relacionadas.

Em nossa implementacao atual, infelizmente nao podemos mover essas duas funcoes dentro de nossa interface Point, porque interfaces foram criadas apenas para declaracoes, elas nao podem incluir implementacao.
Porem, podemos add uma funcao declaracao que nao retornara nada.

```javascript
interface Point {
    x: number,
    y: number,
    draw: () => void
}
```

Repare que nao tem o parametro point dentro da declaracao, pq todos esses membros, x,y, draw sao todos partes de uma unidade soh, nao precisamos passar x/y como parametros para a funcao draw. Essa funcao pode diretamente acessar as propriedades x/y nessa mesma unidade.

Em interface, conforme dito antes, nao podemos ter implementacao, apenas a assinatura de uma funcao, entao com esta interface, estamos falando ao compilador de TypeScript que o nosso objeto Point deve ter duas propriedades x e y, e uma funcao chamada Draw, a implementacao disso eh em outro lugar.

O que devemos fazer agora para aplicar a cohesao nisso?

Primeiro utilizamos uma classe ao inves de interface:
`class Point {`

E trocamos em nossas propriedades, as virgulas por ponto e virgulas:
`x: number;`

Esses dois primeiros campos que trocamos as virgulas, chamamos de membros que armazenam dados. O terceiro campo eh uma funcao.
Nesta classe, podemos ter de verdade uma implementacao da funcao draw() e tambem de getDistance.

```javascript
class Point {
    x: number;
    y: number;
    draw() {
        // ...
    }

    getDistance(anotehr: Point) {
        // ...
    }

}
```

Com esta estrutura, tudo relacionado a Point, esta em uma unidade/classe. temos as coordenadas x,y e a funcao draw e getDistance. Em POO, nos referimos a estas coordenadas como campos e funcoes metodos, deve ficar atento a isso quando estes campso estiverem declarados em uma classe.

---

## 21. Objects

Para referenciarmos o campo x da nossa classe, sempre devemos chamar com o 'this.', por exemplo:
`this.x`

Porque assim, dizemos que estamos chamando pelo 'x' da classe, e nao por exemplo, de algum parametro ou outro meio externo.

Tentamos rodar o seguinte programa:

```javascript
class Point {
    x: number;
    y: number;
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(anotehr: Point) {
        // ...
    }

}

let point: Point;

point.draw();
```

Porem, recebemos o seguinte erro apontando para a linha aonde chamamos o metodo draw():
`TypeError: Cannot read properties of undefined (reading 'draw')`

Quando chamamos o metodo, o objeto Point ainda nao esta definido ou está undefined. Ao contrario de tipos basicos que temos como numeros, strings e booleanos, estamos lidando com um tipo 'customizado'.
Quando definimos um objeto de tipo 'customizado' que eh o caso de 'point: Point', precisamos alocar explicitamente memoria para o objeto.

Fazemos isso da seguinte forma:

`let point: Point = new Point();`

Podemos deixar essa declaracao mais limpa da seguinte maneira por conta de que esta sendo instanciando 'Point' 2x:

`let point = new Point()`

Pq o compilador do TS pode dizer que o tipo do objeto 'point' eh de tipo 'Point'. Podemos ver isso ao passar o mouse por cima de 'point' para ver o seu tipo.

Rodamos novamente o programa com `node ts-hello/main21.js` e temos o seguinte resultado
> X: undefined, Y: undefined

Nao recebemos nenhum erro, porem nao temos nenhum valor para as variaveis pq nao passamos nenhum valor para elas.

```javascript
point.x = 1;
point.y = 2;
```

Ao rodarmoms o programa de novo temos o resultado de:
> X: 1, Y: 2

Observacao, o point em 'class Point' é uma classe, e em 'let point' eh um objeto. Um objeto eh uma instancia de uma classe.

---

## 22. Constructors

Se pararmos para reparar, nosso codigo esta muito 'verboso', pq temos 3 linhas para criar um objeto 'point' e colocar-lo em um estado valido

```javascript
let point = new Point();
point.x = 1;
point.y = 2;
```

E se tivessemos de add mais campos e setar seus valores? 'point.z = 3' ou mais por exemplo? Tornaria nosso codigo ainda mais verboso.

Tem uma solucao mais limpa para isso. Em POO, temos um conceito chamado de 'constructor'. Toda a classe pode ter um constructor, que eh basicamente um metodo que eh chamado quando criamos uma instancia daquela classe. So relembrando, criamos uma instancia dessa maneira:

`let point = new Point();`

Criamos um construtor em nossa classe utilizando a palavra chave do TS, constructor.
Lembrando que devemos utilizar o this para mostrar q vai ser atribuido o valor do parametro do construtor, para o campo/variavel da classe:

```javascript
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
```

Ao criar o construtor, a nossa instancia declarada anteriormente ja esta acusando erro de compilacao.
Porque quando criamos uma nova instancia de Point, precisamos declarar os valores que setamos no construtor

`let point = new Point(1, 2);`

E com isso, removemos aquela atribuicao de valores 'point.x = 1/point.x = 2'

E se eu quisesse instanciar um novo objeto Point sem settar os valores do parametro?
A solucao do TS para isso, eh diferente da implementacao de outras linguagens com foco em POO, como por exemplo Java ou C#, isso pq neles, podemos ter multiplos construtores, e podemos criar um construtor com e outro sem valores para settar.

A solucao do TS, eh tornar estes parametros opcionais para serem preenchidos, eh colocando uma interrogacao na variavel do parametro, da seguinte maneira:

`constructor(x?: number, y?: number) {`

Com isso, nao teremos mais erros de compilacao ao instanciar novos objetos.

---

## 23. Access Modifiers / Modificadores de Acesso

Se quisessemos iniciar os campos, porem ,priva-los de ser modificados os seus valores, podemos utilizar os modificadores de acesso. Algumas vezes, queremos esse comportamento em nosso programa para tornar o codigo mais 'previsivel', reduz as chances para bugs.

Eles sao basicamente palavras chaves para aplicarmos para varios membros da classe para controlar o acesso externo.

Temos os seguintes modificadores de acesso:

* public

* private

* protected

Por padrao,todos os membros sao publicos.

Se declararmos um membro como private, ele não ira ..aparecer mais para ser definido o seu valor no intellisense, e se mesmo assim tentaramos atribuir valor, por exemplo:

```javascript
private x: number;

let point = new Point();

point.x = 3 // erro de compilacao

```

ira gerar erro de compilacao com a seguinte msg:
> Property 'x' is private and only accessible within class

Se quisessemos tornar um membro ou funcao publico, estariamos sendo redundantes, por conta de que por padrao, ja eh publico, devemos utilizar apenas quando necessario.