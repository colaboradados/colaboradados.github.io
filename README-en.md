# Collaborators
### THE COLLABORATIVE VEHICLE ON TRANSPARENCY AND OPEN DATA IN BRAZIL.

<a href="https://colaboradados.github.io"> <img src="images/colaboradados.png" width="200"></a>

This repository refers to our website and collaborative database. Access it here [**aqui**](https://colaboradados.github.io).

---

## Stack

- [Ruby][https://www.ruby-lang.org/en/] the necessary programming language for Jekyll.
- [Jekyll][https://jekyllrb.com/] for generating static pages.
- [SCSS][https://sass-lang.com/] for styles.

---

## Index

- Installation
  - [Docker](#docker)
  - [Windows](#windows)
  - [Linux Debian-based](#linux-Debian-based)
  - [Mac](#mac)
- [Indexing the search in Algolia](#indexing-the-search-in-Algolia)
- [Collaborating with databases](#collaborating-with-databases)
- [Credits](#créditos)
- [The MIT License (MIT)](<#the-mit-license-(mit)>)

---

## Installation

### Docker

For those who prefer to use [Docker](https://www.docker.com/) (avoid installing Ruby and Jekyll on the machine), it is necessary to run only one command, quickly the development server will be available.

Prerequisites:

- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

#### Running the project

`sudo docker-compose up`

### Windows

Pré-requisitos:

- [**Ruby**](https://rubyinstaller.org/)
- [**RubyGems**](https://rubygems.org/pages/download)
- [**Jekyll**](https://jekyllrb.com/docs/installation/windows/)
- [**GitBash**](https://gitforwindows.org/)

Follow the standard installation formats.
At the end, don't forget to open GitBash install Bundler with the `gem install jekyll bundler`.

#### Running the project

1. Fork the [repositório](https://github.com/colaboradados/colaboradados.github.io) for your Github.
2. Clone the repository by typing `$ git clone https://github.com/<seu_usuario>/colaboradados.github.io.git` at Gitbash.
3. From the command line, go to the folder where you cloned the repository on your computer.
4. Type `$ bundle install` and then `$ bundle exec jekyll serve` in GitBash.  
   If you have not given any errors, proceed to the step **5**.
5. Open the link in your browser [http://localhost:4000/](http://localhost:4000/). You will see the site running locally on your computer.

### Linux Debian-based

#### Installing

Prerequisites:

- [**Ruby**](https://jekyllrb.com/docs/installation/ubuntu/)
- [**RubyGems**](https://rubygems.org/pages/download)
- [**Jekyll**](https://jekyllrb.com/docs/installation/ubuntu/)
- [**Git**](https://git-scm.com/download/linux)

1. Open the Linux terminal and type `$ sudo apt-get update` to update the list of repositories.
2. After updating the list of repositories type `$ sudo apt-get install ruby-full build-essential zlib1g-dev` to install Ruby and dependencies needed to run the project.
3. Install RubyGem with `sudo apt install rubygems`.
4. After installing Ruby and RubyGems, type `$ gem install jekyll bundler`

#### Running the project

1. Fork the [repositório](https://github.com/colaboradados/colaboradados.github.io) for your Github.
2. Clone the repository by typing `$ git clone https://github.com/<seu_usuario>/colaboradados.github.io.git` in the Terminal.
3. Go to the folder where you cloned the repository on your computer.
4. Type `$ bundle install` and then `$ bundle exec jekyll serve` in the Terminal.
If you didn't make a mistake, go to step **5**.
5. Open the link in your browser [http://localhost:4000/](http://localhost:4000/). You will see the site running locally on your computer.

### Mac

The Mac already has both git and ruby by default, requiring only Bundler and Jekyll to be installed.

`gem install --user-install bundler jekyll`

#### Running the project

1. Fork the [repositório](https://github.com/colaboradados/colaboradados.github.io) for your Github.
2. Clone the repository by typing `$ git clone https://github.com/<seu_usuario>/colaboradados.github.io.git` in the Terminal.
3. Go to the folder where you cloned the repository on your computer.
4. Type `$ bundle install` and then `$ bundle exec jekyll serve` in the Terminal.
If you didn't make a mistake, go to step **5**.
5. Open the link in your browser [http://localhost:4000/](http://localhost:4000/). You will see the site running locally on your computer.

---

### Indexing the search in Algolia

To load the index correctly set the variables below in `_config.yml`:

```ruby
algolia:
  application_id: GVM6HECTJP
  index_name: colaboradados
  search_only_api_key: rvtp4mqkxaeqyf9d6wkj52xj9lahmjg4
```

Then execute the command:

```bash
$ ALGOLIA_API_KEY='<password>' bundle exec jekyll algolia
```

---

## Collaborating with databases

O **Colaboradados** is a non-profit initiative made for and with the help of the community. To help with our database you will need to follow the path of the folder  `colaboradados.github.io/_posts` and choose the file with the name of the base to which you want to collaborate. The files are in  `Markdown` and you can open them in Visual Studio Code or in your preferred development environment. The files need to be edited following **exactly** the same pattern for lists, titles and alphabetical order. This will leave the work organized and make it easier for [**@colabora_bot**](https://twitter.com/colabora_bot), our Twitter bot, to work properly.

If you have any questions, please contact us.

---

## Credits

This project was developed by [Judite Cypreste](https://juditecypreste.github.io), and had the great collaboration of [Jessica Temporal](https://github.com/jtemporal), [João Ernane](https://github.com/jovemadulto) and [Miriam Retka](https://github.com/Auralcat).

The site was developed with the design of [HTML5 UP](http://html5up.net), with integration to Jekyll by [Andrew Banchich](https://github.com/andrewbanchich/phantom-jekyll-theme).

---

## The MIT License (MIT)

### Inglês (original)

Copyright (c) 2019 Judite Cypreste

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Português (tradução livre)

Copyright (c) 2019 Judite Cypreste

A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados (o "Software"), para lidar com o software sem restrições, incluindo, sem limitação, os direitos de uso, cópia, modificação, merge, publicar, distribuir, sublicenciar e / ou vender cópias do Software e permitir que as pessoas a quem o software é fornecido o façam, sob as seguintes condições:

A declaração de direitos autorais acima e esta permissão devem ser incluídos em todas as cópias ou partes substanciais do software.

O SOFTWARE É FORNECIDO "TAL COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO MAS NÃO SE LIMITANDO A GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA E NÃO INFRACÇÃO. EM NENHUM CASO OS AUTORES OU TITULARES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTRA RESPONSABILIDADE, SEJA EM AÇÃO DE CONTRATO, TORT OU OUTRA FORMA, DECORRENTE DE, FORA DE OU RELACIONADO AO SOFTWARE OU O USO DE PROUTOS.