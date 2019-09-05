---
layout: default
title: Raspagem de dados
author: Ana Paula Mendes
tags: raspagem de dados, raspagem, dados, análise, scraping, web scraping
---

Imagine que você queira criar uma plataforma que faça comparações de preços de produtos ou passagens aéreas, ou que você queira analisar o perfil de alguém em redes sociais, quem sabe até automatizar tarefas que manualmente são repetitivas e cansativas. De modo geral, você quer extrair dados para posteriormente analisá-los. Então, é através da raspagem de dados que você pode realizar a busca e extração de dados que vai servir para determinado problema que você se proponha solucionar. A raspagem de dados, também é conhecida famosamente como *web scraping*, o termo em inglês.
Ferramentas de raspagem de dados acessam dados através do protocolo [HTTP (*Hypertext Transfer Protocol*)](https://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol) ou diretamente através do [navegador web (*web browser*)](https://pt.wikipedia.org/wiki/Navegador_web). Alguns sites disponibilizam já [API (*Application Programming Interface*)](https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es), o que facilita a vida das pessoas que queiram trabalhar com análise de dados.
Os dados na web não são armazenados de forma estruturada, após a raspagem de dados obtém-se esses dados armazenados de forma estruturada.
O fluxograma é o seguinte:

---

<center><strong>Páginas Web -----> Raspagem -----> Dados Estruturados</strong></center>

---

Esses dados podem ser estruturados em banco de dados, planilhas, xml, JSON, etc.

No entanto, são criadas algumas barreiras para a raspagem de dados em páginas web. Alguns sites bloqueiam [endereços IP](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IP) com base em alguns critérios para dificultar o acesso de bots que façam scraping, podem também não fornecer ou bloquear API's.
Os sites também usam o arquivo [*robots.txt*](https://rockcontent.com/blog/robots-txt/) para "filtrar" o que poderá ou não ser acessado por bots. Os bots podem ser reconhecidos através do *[user agent string](http://loopinfinito.com.br/2013/01/09/a-historia-do-user-agent-string/)*.
Há tentativas de bloquear bots através do [CAPTCHA](https://pt.wikipedia.org/wiki/CAPTCHA), mas hoje há várias técnicas para contornar essa barreira. Outras vezes é mais simples identificar a diferença de um humano para um bot através do excesso de requisições à página.
Algumas páginas web são construídas de forma inacessível, o que dificulta tanto o scraping como o uso de leitores de tela para acessibilidade. Outras vezes são construídas com JavaScript/AJAX tornando *id's* e *classes* aleatórias, entre outras "artimanhas", que para usar requisições não é possível, o que dificulta bastante a construção do script de raspagem, já que para isso buscamos padrões, então geralmente utiliza-se mecanismos de renderização JavaScript.


Para contornar várias dessas dificuldades existem várias técnicas e maneiras de implementar o seu script/bot.

 - Raspagem manual, o famoso copiar e colar: O processo é realmente manual,  mais trabalhoso e repetitivo. Mas é utilizado para contornar sites que bloqueiam bots.

 - Raspagem automatizada:

	 - Análise de HTML (*HTML Parsing*): Por meio do padrão do HTML é possível raspar conteúdo como textos, links, e-mails. Então é feito por meio de *tags* do HTML.

	 - Análise DOM (*DOM Parsing*): [DOM (*Document Object Model*)](https://pt.wikipedia.org/wiki/Modelo_de_Objeto_de_Documentos) define a estrutura dos elementos contidos em páginas web. É utilizado quando se deseja obter mais sobre a estrutura da página e/ou raspar o conteúdo. Para esta utiliza-se geralmente a ferramenta XPath. Quando não há *id's* e *classes* padrões, é mais simples usar a análise DOM raspando pelo padrão em que o conteúdo está estruturado.

---

Há muitas outras técnicas, inclusive feitas por grandes companhias que vendem softwares praticamente construídos sem interferência humana. Então são utilizadas técnicas de machine learning, visão computacional e inteligência artificial em geral para simular realmente o comportamento humano e contornar as barreiras criadas para dificultar a raspagem de dados.

Há muitas ferramentas e frameworks que facilitam nossa vida na construção desses scripts de raspagem de dados. Abaixo listo alguns caso você queira começar a construir o seu script ou bot logo logo:

 - [cURL](https://curl.haxx.se/): É uma ferramenta que você transfere dados através de requisição/resposta por protocolo.

 - [Selenium](https://www.seleniumhq.org/): Um software utilizado para automatizar testes web e fazer também raspagem de dados.

 - [Splinter](https://splinter.readthedocs.io/en/latest/why.html): Splinter é uma camada de abstração sobre as ferramentas de automação de navegador existentes, como Selenium e zope.testbrowser. Possui uma API de alto nível que facilita a criação de testes automatizados de aplicativos da web. É uma criação brasileira do [Cobra Team](https://github.com/cobrateam/splinter). Já usei e recomendo bastante!

 - [Wget](https://www.gnu.org/software/wget/): Recupera conteúdo de servidores da web. Faz parte do projeto GNU. Ele suporta o download via protocolos HTTP, HTTPS e FTP.

 - [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/): É um pacote Python para analisar documentos HTML e XML. Ele cria árvores de análise que são úteis para extrair os dados facilmente.

 - [Pandas](https://pandas.pydata.org/): É uma biblioteca Python usada para manipulação e análise de dados. É usado para extrair os dados e armazená-los no formato desejado. A famosa biblioteca que o [Fernando Masanori](https://twitter.com/fmasanori) usa em seus workshops para Jornalistas de Dados.

 - [Scrapy](https://scrapy.org/): Um framework Python, open source e colaborativo para extrair os dados de sites.

---

Se você conhece outras ferramentas/frameworks para raspagem de dados, não exite em nos mostrar para aumentar o leque de opções. E em breve teremos um tutorial de raspagem de dados com splinter, essa maravilha brasileira. Aguardem os próximos posts!
