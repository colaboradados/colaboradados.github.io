# Colaboradados
### THE COLLABORATIVE VEHICLE ABOUT TRANSPARENCY AND OPEN DATA IN BRAZIL.

<a href="https://colaboradados.github.io"> <img src="images/colaboradados.png" width="200"></a>

This repository contains our website and collaborative database that you can access [**here**](https://colaboradados.github.io).

---

## Stack

- [**Ruby**]([https://www.ruby-lang.org/en/]): a necessary programming language for Jekyll.
- [**Jekyll**](https://jekyllrb.com/): static pages generator.
- [**SCSS**](https://sass-lang.com/): for styling.

---
## Table of Contents
- Installing
  - [Docker](#docker)
  - [Windows](#windows)
  - [Linus Debian-Based distros](#linux-debian-based)
  - [Mac](#mac)
- [Search Indexing on Algolia](#search-indexing-on-algolia)
- [Contributing with the database](#contributing-with-the-database)
- [Credits](#credits)
- [License](<#the-mit-license-(mit)>)

---
## Installing

### Docker

You can use [Docker](https://www.docker.com/) to avoid installing Ruby and Jekyll in your machine and to build the server really fast.

Pre-requisites:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

#### Running the project
``` bash
sudo docker-compose up
```

### Windows

#### Installing

Pre-requisites:

- [**Ruby**](https://rubyinstaller.org/)
- [**RubyGems**](https://rubygems.org/pages/download)
- [**Jekyll**](https://jekyllrb.com/docs/installation/windows/)
- [**GitBash**](https://gitforwindows.org/)

Install all of them as specified in their pages, open GitBash and run the following command:
``` bash
gem install jekyll bundler
```

#### Running the project

1. Fork the [repository](https://github.com/colaboradados/colaboradados.github.io)
2. Use GitBash to clone it with the following command: 
```bash
$ git clone https://github.com/<seu_usuario>/colaboradados.github.io.git
```
3. Navigate to the project folder using the command line
4. Using GitBash, run 
```bash
$ bundle install
``` 
and 
```bash
$ bundle exec jekyll serve
```
5. Open [http://localhost:4000/](http://localhost:4000/) in your browser. You'll see the website running in your machine.

### Linux Debian-based

#### Installing

Pre-requisites:

- [**Ruby**](https://jekyllrb.com/docs/installation/ubuntu/)
- [**RubyGems**](https://rubygems.org/pages/download)
- [**Jekyll**](https://jekyllrb.com/docs/installation/ubuntu/)
- [**Git**](https://git-scm.com/download/linux)

1. Open a new terminal window and run 
```bash
$ sudo apt-get update
```
2. Then, install the Ruby packages with 
```bash
$ sudo apt-get install ruby-full build-essential zlib1g-dev
```
3. Install RubyGems with 
```bash
sudo apt install rubygems
```
4. After that, run 
```
$ gem install jekyll bundler
```

#### Running the project
1. Fork the [repository](https://github.com/colaboradados/colaboradados.github.io)
2. Use the terminal to clone it with the following command:
```bash
$ git clone https://github.com/<seu_usuario>/colaboradados.github.io.git
```
3. Navigate to the project folder using the command line
4. Using the terminal, run 
```bash
$ bundle install
``` 
and 
```bash
$ bundle exec jekyll serve
```
5. Open [http://localhost:4000/](http://localhost:4000/) in your browser. You'll see the website running in your machine.

### Mac

#### Installing

Just run 

```bash
$ gem install --user-install bundler jekyll
```

#### Running the project
1. Fork the [repository](https://github.com/colaboradados/colaboradados.github.io)
2. Use the terminal to clone it with the following command:
```bash
$ git clone https://github.com/<seu_usuario>/colaboradados.github.io.git
```
3. Navigate to the project folder using the command line
4. Using the terminal, run 
```bash
$ bundle install
``` 
and 
```bash
$ bundle exec jekyll serve
```
5. Open [http://localhost:4000/](http://localhost:4000/) in your browser. You'll see the website running in your machine.

### Search Indexing on Algolia

In order to correctly load the search index you have to define these variables on `_config.yml`:

```ruby
algolia:
  application_id: GVM6HECTJP
  index_name: colaboradados
  search_only_api_key: rvtp4mqkxaeqyf9d6wkj52xj9lahmjg4
```

Then run:
```bash
$ ALGOLIA_API_KEY='<password>' bundle exec jekyll algolia
```
---
## Contributing with the database

**Colaboradados** is a community driven and non-profit organization. In order to collaborate with the database you'll have to go inside `colaboradados.github.io/_posts` and choose whatever file you want to add your contribution. All the files are in `Markdown` format and you may use wichever text editor you prefer. The files **must be** edited using the same pattern for lists, titles and alphabetical order, this will make the work more concise and helps the [**@colabora_bot**](https://twitter.com/colabora_bot) functioning. If you have questions, feel free to contact us.

---

## Credits
This project was developed by [Judite Cypreste](https://juditecypreste.github.io), with great help from [Jessica Temporal](https://github.com/jtemporal), [João Ernane](https://github.com/jovemadulto) and [Miriam Retka](https://github.com/Auralcat).

The website was developed using [HTML5 UP's](http://html5up.net) design and the Jekyll integration was made by [Andrew Banchich](https://github.com/andrewbanchich/phantom-jekyll-theme).

---
## The MIT License (MIT)

Copyright (c) 2019 Judite Cypreste

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
