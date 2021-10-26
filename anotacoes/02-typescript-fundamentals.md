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

