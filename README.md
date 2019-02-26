# Colaboradados


<a href="https://colaboradados.github.io"> <img src="images/colaboradados.png" width="200"></a>

O banco colaborativo de bases de dados. Acesse [**aqui**](https://colaboradados.github.io).

## No Windows
### Instalando

Vamos precisar de:
- [**Ruby**](https://rubyinstaller.org/)
- [**Jekyll**](https://jekyllrb.com/docs/installation/windows/)
- [**GitBash**](https://gitforwindows.org/)

Siga os formatos padrões de instalação. Ao fim, não se esqueça de abrir o GitBash e escrever `gem install jekyll bundler` para instalar o Bundler.

### Abrindo

1. Clone o repositório digitando `$ git clone https://github.com/colaboradados/colaboradados.github.io.git` no Gitbash.
2. Vá até a pasta onde você clonou o repositório em seu computador.
3. Digite `$ bundle install
$ bundle exec jekyll serve` no GitBash.

Caso não tenha dado nenhum erro, pule para a etapa **5**.

4. Caso tenha dado erro na execução do jekyll, você provavelmente precisará instalar a Gem. Escreva `$ touch Gemfile` no GitBash. Abra o arquivo **Gemfile** que você acabou de criar na pasta do seu projeto. Você poderá abrir com o **Bloco de Notas**. Escreva dentro do arquivo `source "https://rubygems.org"
gem "jekyll"
gem "jekyll-gist"`
Se tudo deu certo, prossiga para a etapa **5**.

5. Abra o seu navegador e digite `http://localhost:4000/`. Se tudo deu certo você conseguirá ver o site rodando localmente em seu computador.

## No Linux Ubuntu
### Instalando

Vamos precisar de:
- [**Ruby**](https://jekyllrb.com/docs/installation/ubuntu/)
- [**Jekyll**](https://jekyllrb.com/docs/installation/ubuntu/)
- [**GitBash**](https://git-scm.com/download/linux)


1. Abra o terminal do [**Ubuntu**](https://www.ubuntu.com/) e digite `$ sudo apt-get update` para atualizar a lista de repositórios.
2. Depois de atualizar a lista de repositórios digite `$ sudo apt-get install ruby-full build-essential zlib1g-dev` para instalar o Ruby e dependencias que são requeridas para rodar o projeto.
3. Após a instalação do Ruby, digite `$ gem install jekyll bundler`
4. Instale tambem o Git, digite `$ sudo apt-get install git`

### Abrindo

1. Clone o repositório digitando `$ git clone https://github.com/colaboradados/colaboradados.github.io.git` no Gitbash.
2. Vá até a pasta onde você clonou o repositório em seu computador.
3. Digite `$ bundle install` e depois `$ bundle exec jekyll serve` no Terminal.
3. Abra o seu navegador e digite `http://localhost:4000/`. Se tudo der certo você conseguirá ver o site rodando localmente em seu computador.

## Usando o docker

Uma outra opção, para quem não deseja instalar o Ruby nem o Jekyll na máquina, é usar o [Docker](https://www.docker.com/). Para isso, só é necessário rodar apenas um comando que rapidamente o servidor de desenvolvimento estará disponível. Para tanto, além do Docker, é necessário usar o [docker-compose](https://docs.docker.com/compose/). Tendo os dois instalados, é só rodar o comando `docker-compose up`.

## Colaborando com a bases de dados (e sendo uma pessoa muito legal)

O **Colaboradados** é uma iniciativa sem fins lucrativos e feita para comunidade e com a ajuda da mesma. Para ajudar com nossa base de dados você precisará seguir o caminho da pasta `colaboradados.github.io/_posts` e escolher o arquivo com o nome da base para a qual você quer colaborar. Os arquivos estão em Markdown e você poderá abrir no Visual Studio Code ou em seu ambiente de desenvolvimento preferido. Os arquivos precisam ser editados seguindo **exatamente** o mesmo padrão para listas e títulos. Isso deixará o trabalho organizado e facilitará para que o [**@colaboradados**](https://twitter.com/colaboradados), nosso bot do Twitter, consiga funcionar plenamente.

## Créditos

Este projeto foi desenvolvido por [Judite Cypreste](https://juditecypreste.github.io), e contou com a grande colaboração de [Jessica Temporal](https://github.com/jtemporal), [João Ernane](https://github.com/jovemadulto) e [Miriam Retka](https://github.com/Auralcat).

O site foi desenvolvido com design de [HTML5 UP](http://html5up.net), com integração ao Jekyll de [Andrew Banchich](https://github.com/andrewbanchich/phantom-jekyll-theme).

## The MIT License (MIT)

Copyright (c) 2019 Judite Cypreste

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
