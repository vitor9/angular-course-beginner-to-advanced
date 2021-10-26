# Estrutura do projeto angular

## Hierarquia e2e

Apenas contem arquivos para os nossos testes end-to-end. Eles sao basicamente testes automatizados que simulam um usuario real. Codificamos para abrir o navegador, navegar a funcionalidade da app, clica em alguns links, preenche formulario e valida se deu resultado na pagina.

---

## Hierarquia node_modules

Aonde armazenamos todas as libs de terceiro que a nossa app depende. Utilizado para desenvolvimento. Quando compilamos nossa app, parte dessas libs serao juntadas e sera feito o deploy da nossa app. Nao sera feito o deploy dessa pasta no servidor. Iremos aprender mais nas proximas aulas.

---

## Hierarquia src

Pasta aonde fica o codigo fonte da nossa appA pasta src possui as seguintes pastas:

- app: dentro dela temos o arquivo component e module
- assets: aonde fica os assetos estaticos da nossa app. Se tivermos arquivos de imagens, icones, ficam armazenados aqui.
- environments: aonde armazenamos arquivos de configuracao de diferentes ambientes. Nele estao os arquivos environment.prod.ts e o environment.ts

### Arquivos dentro da pasta src

- main.ts - ponto inicial da nossa app. Como se fosse um metodo main. No nosso caso, eh o trecho que ira inicializar. O angular reconhece e sabe que tudo vai iniciar apartir de (AppModule):
    `platformBrowserDynamic().bootstrapModule(AppModule)`
- polyfills.ts - importa scripts necessarios para rodar o Angular. Pega os recursos que o js precisa e que sao compativeis com o navegador.
- test.ts - utilizado para testar nosso ambiente.
- angular-cli.json - config para o ang-cli
- .editorconfig - utilizado para tentar fazer com que todos que mexam na app tenham as mesmas config na sua ide.
- karma.conf.js - arqv de config, test runner de codigo js</li>
- protractor.conf.js - ferramenta para rodar testes e2e(end to end)</li>
- tsconfig.json - contem configs para o nosso compilador typescript, como o ecmascript, etc.
- tslint.json - configs para o tslint. Tslint eh uma ferramenta estatica para analise de codigo typescript. Valida o nosso codigo para leitura, escalabilidade, manutencao e erros de funcionalidade

### Um dos arquivos mais importantes

- package.json:
  - dependencies - determina as libs que nossa app depende.
  - devDependencies - libs que precisamos para desenvolver nossa app. Isso eh puramente para a maquina do dev. Temos libs como o karma para rodar o seu arqv karma.conf

---

## Webpack

O angular-cli utiliza uma ferramenta chamada de webpack no qual eh uma ferramenta de build. Pega todos os nossos scripts e style sheets(tipo css) e os junta em um bundle e depois ele "minimiza" os bundles para otimizacao.

- polyfills: inclui todos os scripts para preenche a brecha entre a versao do js que o angular precisa, e a versao de js compativel com os navegadores
- main.bundle.js - todo o codigo fonte da nossa app
- style.bundle.js - eh para o nosso style sheet. No video, ele fica armazenado em bundle de javascript, mas no nosso codigo esta em um styless.css
- vendor.bundle.js - inclui todas as libs de terceiros

O webpack automaticamente recompila a nossa app e recarrega os nossos bundles.
Isso eh um recurso do webpack chamado de Hot Module Replacement/Reloading(HMR).
Sempre que um arquivo fonte eh modificado, o webpack recarrega a nossa pagina

---

## Historia das versoes do Angular

- AngularJS foi lancado em 2010
- Angular 2 - Apos a popularidade do AngularJS, Os devs do AngularJS passaram add novos recursos ate que o Angular 2 foi desenvolvido em typescript, se tornou mais complexo e completamente diferente do seu antecessor.
- Angular 4 - por conta de que algumas libs que eram distribuidas como pacotes separados pelo NPM. Como o @angular/core, compiler, http, router, etc, e o versionamento delas eram todos iguais exceto pelo router. Para acertar essas versoes e evitar confusoes no futuro, o time do Angular decidiu ir direto para o Angular 4. Em comparacao com o 2, nao tem muita diferenca, podendo ate ser chamado de Angular 2.4.

Para evitar mais confusao, o time do Angular decidiu chamar as versões do Angular 2+ escrito em typescript, simplesmente de Angular, e o Angular 1 escrito em JavaScript puro, de AngularJS.
