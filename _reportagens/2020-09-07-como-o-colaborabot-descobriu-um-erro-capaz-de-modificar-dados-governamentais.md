---
layout: posts
title: Como o Colaborabot descobriu um erro capaz de modificar dados governamentais
author: João Ernane
date: 07/09/2020
tags: investigação, vulnerabilidade, dados governamentais
---

![Como o Colaborabot descobriu um erro capaz de modificar dados governamentais]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/materia_capa.png?style=centerme)

Como algumas pessoas sabem, a base do **Colaborabot** é cooperativa e, de tempos em tempos, recebemos recomendações de portais da transparência para serem incluídos e supervisionados. O que muitas pessoas não sabem - e, nós também não tínhamos noção da escala deste problema antes deste momento - é que os órgãos governamentais modificam de forma constante os portais. Muitos mudam de endereço, outros são redirecionados para outras URLs, e alguns são até excluídos. Em novembro de 2019 realizamos a nossa primeira tentativa de revisão da base de dados sobre a qual o **Colaborabot** opera, tentando de forma manual visitar todas as páginas enumeradas e, caso fosse necessário, reformar links errados.

Na noite do dia 26 de novembro de 2019, entretanto, nosso diretor de inovação João Ernane encontrou algo que chamou sua atenção: no Portal de Transparência de Italva - RJ, na seção de publicações, existia um link para um arquivo que não deveria ser público.

Chamado safm.asp (sigla para Simple ASP File Manager) o arquivo é, como o nome diz, um gerenciador de arquivos para sistemas ASP e está disponível [neste repositório](https://github.com/nviet/simple-asp-file-manager). Comum e presente em vários sistemas de publicação de materiais na Internet, como o Wordpress e o Django, este arquivo disponível para acesso em um site representa uma falha de segurança crítica.

 Nos sites em questão, essa vulnerabilidade estava presente na forma como os sistemas foram configurados: mantendo o acesso para esta página de forma pública e acessível para qualquer um, inclusive sem a necessidade de apresentar qualquer credencial, como uma senha. Uma vez que este arquivo fosse acessado, todo o sistema de arquivos do portal seria exposto ao usuário, inclusive com permissões para adicionar, modificar e deletar conteúdos ali presentes.

![Página de Publicações do Portal da Transparência de Italva-RJ]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/imagem_1.png?style=centerme)
Página de Publicações do Portal da Transparência de Italva-RJ

![Interface do gerenciador de arquivos disponível]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/imagem_2.png?style=centerme)
Interface do gerenciador de arquivos disponível

![Ações disponíveis para quem acessar o sistema]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/imagem_3.png?style=centerme)
Ações disponíveis para quem acessar o sistema.
Destaque para o arquivo chamado “senhas.html”.

Em outras palavras, o usuário que acessar esse arquivo conseguiria, por exemplo, criar um arquivo pdf dizendo que uma prefeitura adquiriu 10 milhões de unidades de uma mamadeira erótica, aquela que ficou muito conhecida durante as eleições de 2018 em diversas mensagens falsas que circularam nas redes sociais. Ele então conseguiria acrescentar esse pdf de uma licitação dentro do portal, e deixar o arquivo disponível para qualquer um poder consultar.

Ao perceber a falha, acionamos Bruno Morassutti, conselheiro para assuntos jurídicos do **Colaboradados** e especialista em acesso à informação no Brasil, que colaborou imensamente com essa investigação. No momento que recebeu o material, Morassutti identificou a página e se lembrou que o órgão responsável pelo desenvolvimento deste sistema, denominado PRONIM (Programa Nacional de Informatização e Modernização da Gestão Pública) também desenvolveu páginas semelhantes para várias outras prefeituras do país.

Fazendo uso de uma técnica chamada Google Dork (“pronim ext:asp”), que nada mais é do que usar a pesquisa avançada do Google para filtrar o resultado da busca para que seja retornado sites vulneráveis, identificamos mais alguns portais que sofreram da mesma negligência por seus administradores. Entre eles estavam os Portais da Transparência das cidades de:
* Italva – RJ
* Iguaba – RJ
* Silva Jardim – RJ
* Arapongas – PR
* Ramilândia – PR
* Amaral Ferrador – RS
* Machadinho – RS
* Palmares do Sul – RS
* Presidente Bernardes – SP

Uma primeira tentativa de contato foi feita com o Centro de Tratamento e Resposta a Incidentes Cibernéticos de Governo (CTIR Gov), mas após algumas semanas de espera, nenhuma resposta foi obtida. Foi então que resolvemos realizar uma denúncia junto ao Ministério Público Federal no dia 19 de dezembro de 2019.

Em resposta à denúncia ajuizada pelo **Colaboradados**, a Procuradoria da República lotada no Município de Itaperuna-RJ, por meio de um laudo técnico realizado pela instituição, respondeu negando a existência da vulnerabilidade no portal de sua responsabilidade, e resolveu apontar sete municípios que apresentavam o mesmo problema, sendo eles:
* Saquarema – RJ
* Clevelândia – PR
* Arcos – MG
* Canguçu – RS
* Cidade Gauchá – PR
* Jandaia do Sul – PR
* Três Barras – PR  

Em razão da extensão, da quantidade, e variedade de municípios afetados, a Procuradoria da República do Distrito Federal foi notificada.

![Despacho]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/imagem_4.png?style=centerme)

![Despacho]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/imagem_5.png?style=centerme)

Em resposta ao processo de denúncia original, a Prefeitura de Palmares do Sul - RS  informou para a Procuradoria da República no Rio Grande do Sul que a falha havia sido corrigida pela empresa, após a notificação.

![Resposta]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/imagem_6.png?style=centerme)

Também em resposta à cópia enviada ao município de Machadinho - RS, a Procuradoria da República em Erechim - RS confirmou a existência das falhas reportadas e esclareceu alguns pontos:

![Resposta]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/imagem_7.png?style=centerme)

![Resposta]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/imagem_8.png?style=centerme)

Em resposta enviada pela Procuradoria da República no Rio Grande do Sul em Pelotas, encontramos mais informações, desta vez na forma de cópia das respostas enviadas pela própria GovBR à Prefeitura de Amaral Ferrador:

![Resposta]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/imagem_9.png?style=centerme)

![Resposta]({{ site.url }}{{ site.baseurl }}/images/blog/como-o-colaborabot-descobriu-um-erro-capaz-de-modificar-dados-governamentais/imagem_10.png?style=centerme)

As respostas recebidas até o presente momento exemplificam alguns dos problemas que a transparência governamental brasileira enfrenta como, por exemplo, a demora para a resolução dos incidentes (mais de seis meses desde a notificação de um simples problema que afeta a confiabilidade de documentos públicos), a ausência da adoção de padrão seguro e auditado por todas as figuras da Administração e a negligência generalizada, considerando verdadeira a afirmação de que a vulnerabilidade ocorreu somente em razão de versões desatualizadas de software.

Não recebemos respostas de todos os entes afetados de acordo com nosso levantamento e o realizado pela PRRJ-Itaperuna. Entretanto, por razão do que entendemos como interesse público e por ser dado mais tempo do que o necessário para que as vulnerabilidades sejam corrigidas desde a notificação do Ministério Público, e a entidade desenvolvedora do software afetado, publicamos este artigo para que mais pessoas se façam cientes da necessidade de fiscalizarmos a qualidade dos serviços públicos garantidos para nós pela Lei da Transparência que, afinal, são do interesse da sociedade que continuem funcionando de maneira correta. O **Colaboradados** e o **Colaborabot** fazem uma parte dessa fiscalização, mas precisamos todos ficarmos atentos. E, claro, para mostrarmos que os dados usados para o controle da atuação da Administração só são tão bons quanto a plataforma que os suporta.
