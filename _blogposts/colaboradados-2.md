---
layout: default
title: "COLABORABOT 2.0: O RETORNO DE UM BOT DO BEM"
author: João Ernane
tags: colaborabot
---

Olá internautas, tudo bem?

Por marcar uma importante etapa do nosso projeto, resolvemos que este texto era necessário para esclarecer alguns pontos sobre uma das veias do **Colaboradados**: o [**@colaborabot**](https://twitter.com/colabora_bot).

Para aqueles que não sabem, o [**@colaborabot**](https://twitter.com/colabora_bot) é, neste momento, um robô que tem a tarefa de checar, frequentemente, se os portais de transparência e de atendimento ao cidadão (assim chamados e-SICs) estão disponíveis para o acesso e criar um registro dessa atividade.

Fruto de um desejo antigo da [Judite Cypreste](https://twitter.com/juditecypreste) para monitorar a disponibilidade destes portais e de uma mãozinha minha aqui e outra ali, criamos o robô na sua versão alpha e o executamos com a intenção de gerar tweets mencionando os órgãos públicos em seus perfis, de maneira pública, para que todos aqueles que se considerem interessados pudessem acompanhar a evolução do problema e cobrar junto conosco sua solução. 

Tudo ocorreu bem durante o que me pareceu algumas semanas (mas podem ter sido somente dias bastante longos debruçados em deixar o código de acordo com meus padrões de qualidade) até que descobrimos que o Twitter congelou nossas chaves da API, assim como a de demais bots cívicos. Neste momento, qualquer semelhança com a Rosie da Serenata não é mera coincidência. Até o presente momento ainda não recebemos nenhuma resposta oficial e somente podemos suspeitar que perfis operados por programas e scripts não podem mencionar outros perfis sem permissão.

Este é, resumidamente, o estado atual do [**@colaborabot**](https://twitter.com/colabora_bot) para quem o vê de fora, e as explicações que eu sinto que pessoalmente estou devendo àqueles que o acompanham.

Até hoje.

Depois de nos recuperar do banho de água fria jogado pelo Twitter, e de volta ao desenvolvimento do bot, decidimos implementar também nossa ferramenta em outro meio de comunicação, sem que precisássemos nos preocupar com revogações arbitrárias de chaves, linhas do tempo organizadas por algoritmos obscuros e não cronológicos, entre outras coisas. Desta investigação veio uma novidade: Nossa conta no [Mastodon](https://botsin.space/@colaborabot). 

Além disso, como nosso foco é e sempre foi o jornalismo de dados, não podemos fazer nada menos do que facilitar esta tarefa para a ferramenta que nós mesmos criamos. Esperar que um pesquisador faça raspagem de tweets para poder analisar quais os portais de transparência estão offline, com qual frequência, se seguem um padrão, entre outros… seria, no mínimo, incongruente.

Desta maneira, o [**@colaborabot**](https://twitter.com/colabora_bot), no Twitter e agora no Mastodon, gera um registro em tempo real em uma tabela no Google Sheets que pode ser acessada por todos ao mesmo tempo - mas só editada por ele - com os dados que acreditamos serem relevantes. Uma base de dados do próprio bot. 

Instalados estes dois melhoramentos no nosso robô, e buscando sempre o seu aperfeiçoamento, os próximos planos para ele são:

- gerar relatórios para que se tenha um conhecimento de maneira rápida e automática de algumas análises simples, como qual foi o portal que mais deu problema no dia anterior.
- acesso assíncrono às páginas, já prevendo que a nossa base de portais a serem monitorados deverá crescer rapidamente, começando a demorar vários minutos para serem todos checados da maneira atual.

Acredito que não só conseguimos adaptar o robô para resolver os problemas que enfrentamos no passado, mas também implementamos algumas funcionalidades úteis hoje para nos precaver de problemas que poderão acontecer no futuro. Além disso, agora você poderá seguir-lo em duas plataformas distintas: no [Twitter](https://twitter.com/colabora_bot) e no [Mastodon](https://botsin.space/@colaborabot).

E por aqui eu me despeço neste changelog de humanas. :D

Até mais, internautas. A gente se esbarra por aí na internet!


<center>By: João Ernane</center>
