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
`tsc main.ts | node main.js`

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
`tsc main.ts | node main.js`

Recebemos o mesmo erro que vimos antes
> Cannot find name 'i'.ts(2304)

Se abrirmos o nosso arquivo transpilado js, podemos ver que o i ainda esta como var e nao let. Por padrao, o compilador do typescript compila nosso codigo typescript para ES5 que eh a versao antiga do js que eh compativel com todos os navegadores, isso nao o torna um codigo invalido.

Ou seja, apesar do TS reportar esses erros, ele ainda gera codigo javascript valido. De agora em diante, vamos apenas gerar variaveis com let.

---

