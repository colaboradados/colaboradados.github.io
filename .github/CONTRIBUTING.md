# Contribuições

Os arquivos de adição de bases estão localizados na pasta `_posts /` e são dividos por categorias, antes de realizar a submissão é interessante verificar se a base já não existe em nenhuma categoria.

O colabora dados é um projeto que preza por informações fidedignas, por este motivo só aceitamos bases oficiais de fontes seguras.

### Encontrei uma base, o que fazer?!

1. Verificar se base não existe em nenhuma das categorias e sub-categorias.
2. Verificar em qual das categorias existentes a base pertence.
3. Formatar o link da base no formato [Markdown](https://pt.wikipedia.org/wiki/Markdown), uma linguagem simples de marcação. Afim de manter uma padronização do projeto observe como seguir o modelo.

Estrutura padrão:

`- **[Nome da Base](link)**: link`

E ficaria assim:

`- **[Dados Abertos Ministério da Agricultura, Pecuária e Abastecimento](http://dados.agricultura.gov.br/)**: http://dados.agricultura.gov.br/`

4. Apesar do Ministério da Agricultura, Pecuária e Abastecimento ser da esfera federal, dentro do documento `2019-01-21-esfera-federal.md` existe uma subcategoria neste caso por ministérios, como ainda não existe, iremos criar um título de nivel 2 usando duas vezes o `#` :

`## Ministério da Agricultura, Pecuária e Abastecimento` 

O resultado final do nosso commit seria:

```
## Ministério da Agricultura, Pecuária e Abastecimento

- **[Dados Abertos Ministério da Agricultura, Pecuária e Abastecimento](http://dados.agricultura.gov.br/)**: http://dados.agricultura.gov.br/

```

Segue ainda um [tutorial](https://docs.microsoft.com/pt-br/contribute/how-to-write-use-markdown) bem completo de utilização do Markdown totalmente em **Pt-BR**.

Um [curso](https://www.udemy.com/course/aprenda-markdown/) na Udemy Gratuito, curtinho do [Roberto Achar](https://twitter.com/RobertoAchar)



## Processo de Pull Request

* Antes de realizar o Pull Request é interessante ter a ultima versão do [repositório oficial](https://github.com/colaboradados/colaboradados.github.io.git) atualizada, para evitar conflitos na hora de submeter o commit, saiba como faze-lo [aqui](https://blog.da2k.com.br/2015/02/04/git-e-github-do-clone-ao-pull-request/).

## Para manter o repositório local sincronizado com o repositório remoto

    $  git remote  -v

    $  git remote add upstream https://github.com/{originaluser}/{originalrepository}.git

    $  git fetch upstream

    $  git merge upstream/master

    $  git push


### Issues

No GitHub é uma ótima maneira de manter o controle de tarefas, melhorias e reporte de bugs para o projeto, ficando assim mais fácil a correção de problemas e a obtenção das informações para simulação de erros na aplicação.

**Boas praticas na hora de trabalhar com `ISSUES`**

* Deixe que as pessoas saibam do seu interesse de resolver a **Issue**, uma boa prática é comentar na issue.
* Ao resolver a **issue**, na hora de submeter o [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request), o ideal é comentar o pull request com alguma coisa que faça referência ao numero da ISSUE, como por exemplo: **`"Close issue #30"`**, assim o git irá reconhecer e seu commit estará adicionando na issue uma notificação automaticamente. Inclusive você pode submeter vários commits em apenas um pull request.
