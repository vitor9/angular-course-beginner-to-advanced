### 31 - Building blocks of Angular Apps

O core de qualquer app Angular, temos um ou mais Component. Na vida real, temos dez ou centenas de apps Angular.

#### Mas o que eh um Component?

Um component encapsula os dados, o template HTML e a logica para a view.

Por exemplo, se fossemos criar um site semelhante ao da Udemy, teria o seguinte:
* Barra de navegacao/navbar
* Sidebar
* O conteudo, que sao os cursos

Podemos imaginar tudo isso, como uma view ou component, ou podemos quebrar essa view, em components menores, mais facil de dar manutencao e potencialmente reutilizavel
que ficaria tipo navbar component, sidebar component e courses component.

Semelhantemente em courses component, queremos exibir um ou mais components. Teriamos que quebrar esse courses component, em pequenos components. 
Para nos aprofundarmos mais, podemos add components de avaliacao dentro dos components de cursos, para reutilizarmos na mesma aplicacao, ou em uma aplicacao totalmente diferente.

O Angular abraca a arquitetura baseada em components, o que nos permite trabalhar em pequenos pedacos e mais faceis de dar manutencao  que podem ser reutilizados em diferentes partes.

Toda app tem pelo menos um component no qual chamamos de App component, ou Root component.
Um app na vida real, eh essencialmente uma arvore de components, comecando desse component.

No Angular, tambem temos um conceito chamado de Modulos. Um modulo eh um container para um grupo de components relacionados. Toda app em Angular tem pelo menos um modulo, no qual chamamos de App Module.
Conforme nossa app cresce, queremos quebrar esses modulos em pequenos e mais faceis de dar manutencao.

No nosso exemplo da udemy, podemos potencialmente ter modulos como 
* Course Modules    - inclui todos os components responsaveis por exibir cursos
* Messaging Module  - contem os components responsaveis por mandar msgs privadas aos instrutores
* Instructor Module - inclui os components para o dashboard de instrutor
* Admin Module      - area do site gerenciada pela equipe da Udemy.

Se estivermos contruindo uma app simples, vamos ter apenas um modulo que chamamos de App module.
Mas conforme nossa app vai crescendo, precisamos quebrar esse modulo em modulos menores, com cada modulo, responsavel por uma area especifica da nossa app.
Nesse modulo temos um monte de components relacionados.

---

### 32 - Components

Existem 3 passos que precisamos seguir para usar um Component:

* **Criar** um componente
* **Registrar** esse component em um modulo
* Add um elemento em uma **marcacao HTML**

Utilizamos a seguinte convencao para criar aplicacoes em Angular:
> nome.component.ts

Se o nome do component tem multiplas palavras, separamos elas utilizando hifen(-)
> nome-do-componente.component.ts

Comecamos criando uma classe typescript. Por convencao, sempre colocamos "component" como palavra final no nome da classe. Tambem exportamos a classe para o Angular enxergar a nossa classe.

```javascript
export class CoursesComponent {
}
```

Isso ainda nao eh um Component, para isso, precisamos utilizar metadados que o Angular entende. Utilizamos o Decorator para alcançar isso.
No Angular, temos um Decorator chamado de 'Component', que colocamos na classe para torna-la um Component.


---