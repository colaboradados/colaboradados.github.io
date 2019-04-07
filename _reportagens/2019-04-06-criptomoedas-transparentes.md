---
layout: default
title: "CRIPTOMOEDAS TRANSPARENTES"
author: Judite Cypreste
tags: criptomoedas, transparencia municipal, Alagoas, Cacimbinhas, Pão de Açúcar, União dos Palmares, São Miguel dos Milagres
date: 2019-04-06
---

### CRIPTOMOEDAS TRANSPARENTES: PORTAIS MUNICIPAIS DE DADOS ABERTOS FAZEM PROPAGANDA DE MOEDAS DIGITAIS

Portais da transparência municipais estão divulgando mais que os dados de suas administrações. Uma investigação do [Colaboradados](https://colaboradados.github.io/) identificou ao menos quatro portais, todos eles pertencentes à cidades do Estado de Alagoas, onde uma propaganda de um site de moedas virtuais aparece, em estilo 'pop-up', assim que o usuário os acessa.

![print screen dos portais de transparência das cidades de Cacimbinhas, Pão de Açúcar, União dos Palmares e São Miguel dos Milagres-Alagoas com o pop-up de propaganda para site de moedas virtuais](/images/blog/criptomoedas-transparentes/pic01.jpg)

Nos portais das cidades de [Cacimbinhas](http://cacimbinhas.al.gov.br/transparencia.htm), [Pão de Açúcar](https://www.paodeacucar.al.gov.br/transparencia.htm), [União dos Palmares](https://jpconsultoriaeassessoria.com.br/transparenciamunicipal/uniaodospalmares/) e [São Miguel dos Milagres](https://cmsaomigueldosmilagres.al.gov.br/transparencia.htm), a publicidade que figura nos portais governamentais remete ao site Webchain.network, entusiasta da modalidade de comércio por criptomoedas e da tecnologia blockchain. Também é este o site responsável pelo serviço CoinIMP que, segundo investigou o [Colaboradados](https://colaboradados.github.io/), seria o provedor do serviço de mineração utilizados pelos sites.

Tomando como exemplo o Portal de Transparência do Município de Cacimbinhas, ao analisar o código de fonte da página, nos deparamos com o fato de que ela é preenchida quase que completamente por um *iframe* com o conteúdo de uma página de um terceiro domínio (linha 25)

![print screen do código fonte da página do portal da transparência da cidade de Cacimbinhas](/images/blog/criptomoedas-transparentes/pic02.jpg)

O código fonte desta página referenciada, no entanto, é mais complexo e representa de fato o que o usuário enxerga e também é carregado pelo seu navegador. É nesta página que está incluído o script malicioso, em seu rodapé (linhas 429 e seguintes).

![print screen do código fonte da página do portal da transparência da cidade de Cacimbinhas](/images/blog/criptomoedas-transparentes/pic03.jpg)

Ao procurar por mais informações sobre o código utilizado no Google, encontramos a documentação oficial do CoinIMP.com, que deixa claro de que se trata de um código JavaScript malicioso que utiliza o poder de processamento dos dispositivos os internautas para a mineração de moedas virtuais sem seu devido conhecimento e, claro, permissão.

![print screen da documentação do CoinIMP.com](/images/blog/criptomoedas-transparentes/pic04.jpg)

Através da análise das máquinas utilizadas para o acesso aos portais de transparência das cidades, o [Colaboradados](https://colaboradados.github.io/) também percebeu que o uso de suas CPUS estavam altíssimos, o que poderia indicar que as máquinas dos usuários estariam sendo usadas, sem nenhuma permissão, para o serviço de mineração de moedas virtuais enquanto estivessem navegando nos portais de transparência das cidades.

![print screen do portal da transparência de Cacimbinhas. em cima, uma janela mostra que o uso alto da CPU enquanto o site se encontra aberto](/images/blog/criptomoedas-transparentes/pic05.jpg)

Não é a primeira vez que sites governamentais estariam sendo usados para a mineração de moedas virtuais. Em novembro de 2017, o [Portal Cidadão.SP](http://www.cidadao.sp.gov.br/), do Governo do Estado de São Paulo, realizava o mesmo processo, também causando lentidão nos computadores dos usuários. Segundo reportagem do [*Portal G1*](https://g1.globo.com/tecnologia/noticia/site-do-governo-de-sp-usou-computador-de-visitante-para-minerar-moeda-virtual.ghtml), não há informações de quanto tempo o portal governamental ficou com o mecanismo no ar.

Por meio de LAI, pedimos maiores explicações sobre o caso para as administrações das cidades alagoanas Cacimbinhas, Pão de Açúcar e São Miguel dos Milagres, mas ainda tivemos nenhuma resposta. O site oficial da Prefeitura de União dos Palmares no momento da edição desta newsletter estava indisponível.

Veja abaixo, o questionamento enviado por meio de LAI para as prefeituras alagoanas.

>Requisitamos acesso às informações listadas abaixo, referentes ao site “Portal da Transparência da Prefeitura (insira aqui o nome da cidade)” (insira aqui o endereço do site), criado e hospedado pela JP Consultoria. Para facilitar a compreensão das informações fornecidas, requisitamos que cada item seja respondido separadamente, indicando o número a que se refere:  
1 – Quem é o responsável pela manutenção do site  “Portal da Transparência da Prefeitura de (insira aqui o nome da cidade)”?  
1.1 – Qual é a data em que o site foi atualizado pela última vez, antes do envio deste pedido de acesso à informação ser enviado?  
1.2 – Caso o mantenedor seja a Prefeitura de (insira aqui o nome da cidade):  
1.2.1  – Quantos funcionários fazem parte da equipe de atualização do site?  
1.2.2  – Quais seriam seus nomes e suas matrículas de servidores públicos?  
1.3 – Caso o mantenedor seja uma empresa contratada:  
1.3.1 – Requisitamos acesso ao inteiro teor digitalizado do contrato de licitação firmado entre a prefeitura e a empresa mantenedora do site.  
O site “Portal da Transparência da Prefeitura de (insira aqui o nome da cidade)” apresenta uma propaganda, em formato conhecido como pop-up, do site https://webchain.network/ em sua página inicial.  
2 – Desde quando esta propaganda está visível no site?  
2.1 – Por quais motivos, de fato e direito, esta propaganda está disponível?  
2.2 – Caso seja em virtude de alguma decisão administrativa:  
2.2.1 – Quem foi a autoridade pública responsável pela decisão? Qual o seu nome?  
2.2.2 – Requisitamos acesso ao inteiro teor digitalizado desta decisão e indicação do número do processo administrativo referente a ela.  
O referido site publicizado é de um serviço de criptomoedas, e reparamos que ao acessar o Portal da Transparência da Prefeitura de (insira aqui o nome da cidade), utiliza recursos do computador do visitante excessivamente:  
3 – O referido site “Portal da Transparência da Prefeitura de (insira aqui o nome da cidade)” está utilizando computadores dos usuários como vetor para transmissão de scripts provenientes do site https://webchain.network/?  
3.2 – Caso os computadores dos usuários estejam sendo utilizados para este fim:  
3.2.1 – Essa foi uma decisão da Prefeitura de (insira aqui o nome da cidade)? Quem foi a autoridade pública responsável pela decisão? Qual o seu nome?  
3.2.2 – Requisitamos acesso ao inteiro teor digitalizado desta decisão e indicação do número do processo administrativo referente a ela.
