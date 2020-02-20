# Colaboradados
### O VEÍCULO COLABORATIVO SOBRE TRANSPARÊNCIA E OPEN DATA NO BRASIL.

<a href="https://colaboradados.github.io"> <img src="images/colaboradados.png" width="200"></a>

[**English Version**](README-en.md)

Este repositório se refere ao nosso site e banco colaborativo de bases de dados. Acesse [**aqui**](https://colaboradados.github.io).

---

## Stack

- [Ruby][https://www.ruby-lang.org/en/] a linguagem de programação necessária para o Jekyll.
- [Jekyll][https://jekyllrb.com/] para geração de páginas estáticas.
- [SCSS][https://sass-lang.com/] para estilos.

---

## Índice

- Instalação
  - [Docker](#docker)
  - [Windows](#windows)
  - [Linux Debian-based](#linux-Debian-based)
  - [Mac](#mac)
- [Indexando a busca no Algolia](#indexando-a-busca-no-Algolia)
- [Colaborando com a bases de dados](#colaborando-com-a-bases-de-dados)
- [Créditos](#créditos)
- [The MIT License (MIT)](<#the-mit-license-(mit)>)

---

## Instalação

### Docker

Para quem prefere utilizar [Docker](https://www.docker.com/) (evita a instalação do Ruby e do Jekyll na máquina), é necessário rodar apenas um comando, rapidamente o servidor de desenvolvimento estará disponível.

Pré-requisitos:

- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

#### Rodando o projeto

`sudo docker-compose up`

### Windows

Pré-requisitos:

- [**Ruby**](https://rubyinstaller.org/)
- [**RubyGems**](https://rubygems.org/pages/download)
- [**Jekyll**](https://jekyllrb.com/docs/installation/windows/)
- [**GitBash**](https://gitforwindows.org/)

Siga os formatos padrões de instalação.
Ao fim, não se esqueça de abrir o GitBash instalar o Bundler com o comando `gem install jekyll bundler`.

#### Rodando o projeto

1. Fork o [repositório](https://github.com/colaboradados/colaboradados.github.io) para o seu Github.
2. Clone o repositório digitando `$ git clone https://github.com/<seu_usuario>/colaboradados.github.io.git` no Gitbash.
3. Pela linha de comando, vá até a pasta onde você clonou o repositório em seu computador.
4. Digite `$ bundle install` e depois `$ bundle exec jekyll serve` no GitBash.  
   Caso não tenha dado nenhum erro, siga para a etapa **5**.
5. Abra o link em seu navegador [http://localhost:4000/](http://localhost:4000/). Você verá o site rodando localmente em seu computador.

### Linux Debian-based

#### Instalando

Pré-requisitos:

- [**Ruby**](https://jekyllrb.com/docs/installation/ubuntu/)
- [**RubyGems**](https://rubygems.org/pages/download)
- [**Jekyll**](https://jekyllrb.com/docs/installation/ubuntu/)
- [**Git**](https://git-scm.com/download/linux)

1. Abra o terminal do Linux e digite `$ sudo apt-get update` para atualizar a lista de repositórios.
2. Depois de atualizar a lista de repositórios digite `$ sudo apt-get install ruby-full build-essential zlib1g-dev` para instalar o Ruby e dependências necessárias para rodar o projeto.
3. Instale o RubyGem com o comando `sudo apt install rubygems`.
4. Após a instalação do Ruby e RubyGems, digite `$ gem install jekyll bundler`

#### Rodando o projeto

1. Fork o [repositório](https://github.com/colaboradados/colaboradados.github.io) para o seu Github.
2. Clone o repositório digitando `$ git clone https://github.com/<seu_usuario>/colaboradados.github.io.git` no Terminal.
3. Vá até a pasta onde você clonou o repositório em seu computador.
4. Digite `$ bundle install` e depois `$ bundle exec jekyll serve` no Terminal.
Caso não tenha dado nenhum erro, siga para a etapa **5**.
5. Abra o link em seu navegador [http://localhost:4000/](http://localhost:4000/). Você verá o site rodando localmente em seu computador.

### Mac

O Mac já possui tanto o git quanto o ruby por padrão, necessitando a instalação apenas do Bundler e do Jekyll.

`gem install --user-install bundler jekyll`

#### Rodando o projeto

1. Fork o [repositório](https://github.com/colaboradados/colaboradados.github.io) para o seu Github.
2. Clone o repositório digitando `$ git clone https://github.com/<seu_usuario>/colaboradados.github.io.git` no Terminal.
3. Vá até a pasta onde você clonou o repositório em seu computador.
4. Digite `$ bundle install` e depois `$ bundle exec jekyll serve` no Terminal.
Caso não tenha dado nenhum erro, siga para a etapa **5**.
5. Abra o link em seu navegador [http://localhost:4000/](http://localhost:4000/). Você verá o site rodando localmente em seu computador.

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

O **Colaboradados** é uma iniciativa sem fins lucrativos e feita para a comunidade e com a ajuda da mesma. Para ajudar com nossa base de dados você precisará seguir o caminho da pasta `colaboradados.github.io/_posts` e escolher o arquivo com o nome da base para a qual você quer colaborar. Os arquivos estão em `Markdown` e você poderá abrir no Visual Studio Code ou em seu ambiente de desenvolvimento preferido. Os arquivos precisam ser editados seguindo **exatamente** o mesmo padrão para listas, títulos e ordem alfabética. Isso deixará o trabalho organizado e facilitará para que o [**@colabora_bot**](https://twitter.com/colabora_bot), nosso bot do Twitter, consiga funcionar corretamente.
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
