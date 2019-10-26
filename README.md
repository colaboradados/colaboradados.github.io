# Colaboradados

<a href="https://colaboradados.github.io"> <img src="images/colaboradados.png" width="200"></a>

O banco colaborativo de bases de dados. Acesse [**aqui**](https://colaboradados.github.io).

---

## Stack

- [Jekyll][https://jekyllrb.com/] para geração de páginas estáticas
- [SCSS][https://sass-lang.com/] para estilos

---

## Índice

- Instalação
  - [Docker](#docker)
  - [Windows](#windows)
  - [Linux Ubuntu](#linux-ubuntu)
  - [Mac](#mac)
- [Indexando a busca no Algolia](#indexando-a-busca-no-Algolia)
- [Colaborando com a bases de dados](#colaborando-com-a-bases-de-dados)
- [Créditos](#créditos)
- [The MIT License (MIT)](<#the-mit-license-(mit)>)

---

## Instalação

### Docker

Para que prefere utilizar [Docker](https://www.docker.com/) (evita a instalação do Ruby e do Jekyll na máquina), é necessário rodar apenas um comando que rapidamente o servidor de desenvolvimento estará disponível.

Pré-requisitos:

- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

#### Rodando o projeto

`docker-compose up`

### Windows

Pré-requisitos:

- [**Ruby**](https://rubyinstaller.org/)
- [**Jekyll**](https://jekyllrb.com/docs/installation/windows/)
- [**GitBash**](https://gitforwindows.org/)

Siga os formatos padrões de instalação.
Ao fim, não se esqueça de abrir o GitBash instalar o Bundler com o comando `gem install jekyll bundler`.

#### Rodando o projeto

1. Clone o repositório digitando `$ git clone https://github.com/colaboradados/colaboradados.github.io.git` no Gitbash.
2. Pela linha de comand, vá até a pasta onde você clonou o repositório em seu computador.
3. Digite `$ bundle install` e depois `$ bundle exec jekyll serve` no GitBash.  
   Caso não tenha dado nenhum erro, pule para a etapa **5**.
4. Caso tenha dado erro na execução do jekyll, você provavelmente precisará instalar a Gem. Escreva `$ touch Gemfile` no GitBash. Abra o arquivo **Gemfile** que você acabou de criar na pasta do seu projeto no editor de sua preferência. Escreva dentro do arquivo `source "https://rubygems.org" gem "jekyll" gem "jekyll-gist"`
   Se tudo deu certo, prossiga para a etapa **5**.
5. Abra o seu navegador e digite `http://localhost:4000/`. Se tudo deu certo você conseguirá ver o site rodando localmente em seu computador.

### Linux Ubuntu

#### Instalando

Pré-requisitos:

- [**Ruby**](https://jekyllrb.com/docs/installation/ubuntu/)
- [**Jekyll**](https://jekyllrb.com/docs/installation/ubuntu/)
- [**GitBash**](https://git-scm.com/download/linux)

1. Abra o terminal do [**Ubuntu**](https://www.ubuntu.com/) e digite `$ sudo apt-get update` para atualizar a lista de repositórios.
2. Depois de atualizar a lista de repositórios digite `$ sudo apt-get install ruby-full build-essential zlib1g-dev` para instalar o Ruby e dependencias que são requeridas para rodar o projeto.
3. Após a instalação do Ruby, digite `$ gem install jekyll bundler`
4. Instale tambem o Git, digite `$ sudo apt-get install git`

#### Rodando o projeto

1. Clone o repositório digitando `$ git clone https://github.com/colaboradados/colaboradados.github.io.git` no Gitbash.
2. Vá até a pasta onde você clonou o repositório em seu computador.
3. Digite `$ bundle install` e depois `$ bundle exec jekyll serve` no Terminal.
4. Abra o seu navegador e digite `http://localhost:4000/`. Se tudo der certo você conseguirá ver o site rodando localmente em seu computador.

### Mac

A ser redigido

---

### Indexando a busca no Algolia

Para carregar o índice corretamente defina as variáveis abaixos no `_config.yml`:

```ruby
algolia:
  application_id: GVM6HECTJP
  index_name: colaboradados
  search_only_api_key: rvtp4mqkxaeqyf9d6wkj52xj9lahmjg4
```

Depois execute o comando:

```bash
$ ALGOLIA_API_KEY='<password>' bundle exec jekyll algolia
```

---

## Colaborando com a bases de dados

O **Colaboradados** é uma iniciativa sem fins lucrativos e feita para comunidade
 e com a ajuda da mesma. Para ajudar com nossa base de dados você precisará 
 editar o arquivo conforme a seguir:
 
 1. **Esfera Federal:** Conteúdo encontrado em 
 [_posts/AAAA-MM-DD-esfera-federal.md](_posts).
 
 1. **Esfera Estadual:** Conteúdo encontrado em 
 [_posts/AAAA-MM-DD-esfera-estadual.md](_posts).
 
 1. **Esfera Municipal:** Conteúdo encontrado na pasta [_states](_states),
 em arquivos específicos para cada estado.
 
 1. **Cinema:** Conteúdo encontrado em 
 [_posts/AAAA-MM-DD-cinema.md](_posts).
 
 1. **Músicas:** Conteúdo encontrado em 
 [_posts/AAAA-MM-DD-musica.md](_posts).
 
 1. **Saúde:** Conteúdo encontrado em 
 [_posts/AAAA-MM-DD-saude.md](_posts).
 
 1. **Educação:** Conteúdo encontrado em 
 [_posts/AAAA-MM-DD-educacao.md](_posts).
 
 1. **Países:** Conteúdo encontrado em 
 [_posts/AAAA-MM-DD-paises.md](_posts).
 
 1. **IBGE:** Conteúdo encontrado em 
 [_posts/AAAA-MM-DD-ibge.md](_posts).
 
 1. **Coleções:** Conteúdo encontrado em 
 [_posts/AAAA-MM-DD-colecoes.md](_posts).
 
 1. **Segurança Pública:** Conteúdo encontrado em 
 [_posts/AAAA-MM-DD-seguranca-publica.md](_posts).
 
 Os arquivos estão em `Markdown` e você poderá abrir no Visual Studio Code ou em
 seu ambiente de desenvolvimento preferido. Os arquivos precisam ser editados 
 seguindo **exatamente** o mesmo padrão para listas e títulos. Isso deixará o 
 trabalho organizado e facilitará para que o 
[**@colabora_bot**](https://twitter.com/colabora_bot), nosso bot do Twitter, 
 consiga funcionar plenamente.
Se tiver dúvidas, entre em contato conosco.


---

## Créditos

Este projeto foi desenvolvido por [Judite Cypreste](https://juditecypreste.github.io), e contou com a grande colaboração de [Jessica Temporal](https://github.com/jtemporal), [João Ernane](https://github.com/jovemadulto) e [Miriam Retka](https://github.com/Auralcat).

O site foi desenvolvido com design de [HTML5 UP](http://html5up.net), com integração ao Jekyll de [Andrew Banchich](https://github.com/andrewbanchich/phantom-jekyll-theme).

---

## The MIT License (MIT)

### Português (tradução livre)

Copyright (c) 2019 Judite Cypreste

A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados (o "Software"), para lidar com o software sem restrições, incluindo, sem limitação, os direitos de uso, cópia, modificação, merge, publicar, distribuir, sublicenciar e / ou vender cópias do Software e permitir que as pessoas a quem o software é fornecido o façam, sob as seguintes condições:

A declaração de direitos autorais acima e esta permissão devem ser incluídos em todas as cópias ou partes substanciais do software.

O SOFTWARE É FORNECIDO "TAL COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO MAS NÃO SE LIMITANDO A GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA E NÃO INFRACÇÃO. EM NENHUM CASO OS AUTORES OU TITULARES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTRA RESPONSABILIDADE, SEJA EM AÇÃO DE CONTRATO, TORT OU OUTRA FORMA, DECORRENTE DE, FORA DE OU RELACIONADO AO SOFTWARE OU O USO DE PROUTOS.

### Inglês (original)

Copyright (c) 2019 Judite Cypreste

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
