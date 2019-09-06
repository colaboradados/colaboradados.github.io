---
layout: default
title: Raspagem de dados
author: Ana Paula Mendes
tags: raspagem de dados, raspagem, dados, análise, scraping, web scraping
---

Imagine que você queira criar uma plataforma que faça comparações de preços de produtos ou passagens aéreas. Talvez analisar o perfil de alguém em redes sociais? Ou quem sabe automatizar tarefas que manualmente são repetitivas e cansativas? De modo geral, você quer extrair dados para posteriormente analisá-los. Por meio da raspagem de dados você pode realizar a busca e extração de dados que servirá para determinado problema que você se proponha solucionar. Também conhecida em inglês como *web scraping*, a prática de raspagem de dados pode ser feita com o acesso ao protocolo [HTTP (*Hypertext Transfer Protocol*)](https://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol) ou diretamente através do [navegador web (*web browser*)](https://pt.wikipedia.org/wiki/Navegador_web). Alguns sites disponibilizam também uma [API (*Application Programming Interface*)](https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es), o que facilita a vida das pessoas que queiram trabalhar com análise de dados.
Os dados na web não são armazenados de forma estruturada, o que vai acontecer após a raspagem. Esses dados podem ainda ser estruturados em banco de dados, planilhas, xml, JSON, etc.
O fluxograma é o seguinte:

---

<center><strong>Páginas Web → Raspagem → Dados Estruturados</strong></center>

---

Esses dados podem ser estruturados em banco de dados, planilhas, xml, JSON, etc.

Os sites podem, entretanto, criar barreiras para a raspagem de dados. Alguns bloqueiam [endereços IP](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IP) com base em alguns critérios, e com isso dificultam o acesso de bots que façam raspagem. Eles também podem não fornecer ou bloquear API's.
Os sites também usam o arquivo [*robots.txt*](https://rockcontent.com/blog/robots-txt/) para "filtrar" o que poderá ou não ser acessado por bots. Os bots podem ser reconhecidos através do *[user agent string](http://loopinfinito.com.br/2013/01/09/a-historia-do-user-agent-string/)*.
Há também tentativas de bloqueio por meio de [CAPTCHA](https://pt.wikipedia.org/wiki/CAPTCHA), mas já existem técnicas para contornar essa barreira.
Algumas páginas web são construídas de forma inacessível, o que dificulta tanto o scraping como o uso de leitores de tela para acessibilidade. Outras vezes são construídas com JavaScript/AJAX tornando *id's* e *classes* aleatórias, dentre outras "artimanhas". Isso faz com que as requisições não sejam possíveis, o que dificulta a construção do script de raspagem, que busca sempre por padrões. O uso de mecanismos de renderização JavaScript é uma solução para essa barreira.


Para contornar as dificuldades existem várias técnicas e maneiras de implementar o seu script/bot:

 - Raspagem manual, o famoso copiar e colar: O processo é realmente manual,  mais trabalhoso e repetitivo. Porém, é utilizado para contornar sites que bloqueiam bots.

 - Raspagem automatizada:

	 - Análise de HTML (*HTML Parsing*): Por meio do padrão do HTML é possível raspar conteúdo como textos, links e e-mails. É feito por meio de *tags* do HTML.

	 - Análise DOM (*DOM Parsing*): [DOM (*Document Object Model*)](https://pt.wikipedia.org/wiki/Modelo_de_Objeto_de_Documentos) define a estrutura dos elementos contidos em páginas web. É utilizado quando se deseja obter mais sobre a estrutura da página e/ou raspar o conteúdo. Para esta, utiliza-se geralmente a ferramenta XPath. Quando não há *id's* e *classes* padrões, é mais simples usar a análise DOM raspando pelo padrão em que o conteúdo está estruturado.

---

Há muitas outras técnicas, inclusive feitas por grandes companhias que vendem softwares praticamente construídos sem interferência humana. São utilizadas técnicas de machine learning, visão computacional e inteligência artificial em geral para simular realmente o comportamento humano e contornar as barreiras criadas para dificultar a raspagem de dados.

Ferramentas e frameworks também podem facilitar a construção desses scripts, como esses abaixo:

 - [cURL](https://curl.haxx.se/): É uma ferramenta que você transfere dados através de requisição/resposta por protocolo.

 - [Selenium](https://www.seleniumhq.org/): Um software utilizado para automatizar testes web e fazer também raspagem de dados.

 - [Splinter](https://splinter.readthedocs.io/en/latest/why.html): Splinter é uma camada de abstração sobre as ferramentas de automação de navegador existentes, como Selenium e zope.testbrowser. Possui uma API de alto nível que facilita a criação de testes automatizados de aplicativos da web. Uma criação brasileira do [Cobra Team](https://github.com/cobrateam/splinter).

 - [Wget](https://www.gnu.org/software/wget/): Recupera conteúdo de servidores da web.  Suporta o download via protocolos HTTP, HTTPS e FTP. Faz parte do projeto GNU.

 - [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/): É um pacote Python para analisar documentos HTML e XML. Ele cria árvores de análise que são úteis para extrair os dados facilmente.

 - [Pandas](https://pandas.pydata.org/): Biblioteca Python usada para manipulação e análise de dados. É usado para extrair os dados e armazená-los no formato desejado. A famosa biblioteca que o [Fernando Masanori](https://twitter.com/fmasanori) usa em seus workshops para Jornalistas de Dados.

 - [Scrapy](https://scrapy.org/): Um framework Python, open source e colaborativo para extrair os dados de sites.

---

Se você conhece outras ferramentas/frameworks para raspagem de dados, não deixe de nos enviar para aumentar este leque de opções!
