---
layout: posts
title: "Análise de Dados em Python - Parte 1"
author: Júlio Barreto
date: 05/05/2020
tags: analise de dados, python
---

# Análise de Dados em Python - Parte 1

A análise de dados é um conjunto de técnicas que permite extrair informação sobre um conjunto de dados. Achou muito técnico? Podemos entender isso como uma forma de **conhecer melhor os dados que temos**. Caso queira se aprofundar mais nos termos, [esse post introduz bem o que é ciência de dados](https://dev.to/opendevufcg/introducao-a-ciencia-de-dados-n4c) e suas áreas.

Os tópicos que serão abordados neste post são:

1. [Python](#python)
    * [O que é](#o-que-é)
    * [Como instalar](#como-instalar)
    * [Como executar um programa](#como-executar-um-programa)
    * [Como usar Python online](#como-usar-python-online)
    * [Bibliotecas](#bibliotecas)
2. [Sintaxe](#sintaxe)
2. [Conjunto de dados = Tabelas!](#conjunto-de-dados-=-tabelas!)
3. [Abrindo tabelas em Python](#abrindo-tabelas-em-python)
4. [Primeira Visualização](#primeira-visualização)

## Python

### O que é

Como você já deve ter imaginado, Python é uma **Linguagem de Programação** de propósito geral. Isso quer dizer que diferentemente de outras linguagens, Python pode ser utilizado para diversos propósitos, dependendo do seu objetivo. Alguns possíveis são: criar e manter um site, fazer análises de dados ou até mesmo criar um programa que identifica se uma foto é de um cachorro ou um gato.

![Cats vs Dogs](https://storage.googleapis.com/kaggle-competitions/kaggle/3362/media/woof_meow.jpg)

### Como instalar

Esta seção do tutorial só é importante se você está usando o sistema operacional Windows. Se você usa alguma distribuição Linux ou MacOS, o Python já está instalado.

Nota rápida: caso você não queira instalar o Python neste momento, siga para a [próxima seção](#como-usar-python-online).

No [site oficial do Python](https://www.python.org/), você pode encontrar uma aba para downloads. Nessa aba, queremos baixar a versão *3.6.10*. Durante a instalação, marque a opção **Add Python 3.6.10 to PATH**.

### Como executar um programa

Caso você use Windows deverá abrir o o cmd. Se usa Linux ou MacOS abra o terminal. Nesse tutorial, a única diferença é o comando para listar os arquivos e pastas: no Windows, use o comando *"dir"* para listar, enquanto nos outros, use o comando *"ls"*. 

Para acessar uma subpasta, use o comando *"cd nome_da_pasta"*. Por exemplo: se você está na pasta Documentos e quer entrar na pasta códigos, use o comando *"cd codigos"*.

Para garantir que o Python está instalado, execute *"python"* na linha de comando, ou *"python3"* se você está usando Linux. Você verá algo semelhante a imagem abaixo:

![Python Shell](https://panda.ime.usp.br/pensepy/static/pensepy/_images/python_shell.png)

O lugar mágico que você acabou de acessar chama-se **shell do Python**. É uma linha de comando para executar comandos em Python. Ele serve pra calcular alguma coisa e também testar comandos. Para sair dele, execute o comando *"exit()"*.

Quando você tiver escrito um programa em Python, precisará entrar na pasta onde o arquivo está e depois usar o comando *"python nome_do_arquivo.py"* para executá-lo. O arquivo de um programa é exatamente igual a um arquivo de texto (um .txt), mas o salvamos com a extensão **.py** para representar que é um arquivo de texto Python.

### Como usar Python online

Se você escolheu executar online, há alternativas para utilizar Python, como o **Google Colab**. Para acessar, basta entrar na sua conta Google (Gmail), e abrir o seu Google Drive. Nas opções para a criação de documentos, clique em exibir mais opções e você encontrará a opção **Google Colaboratory**.

O Google Colab funciona em modo **notebook** (ou **jupyter notebook**). Se você já programou em R, é equivalente a R markdown. Num notebook, é possível adicionar textos ou códigos.

![Google Colab](https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fgregoryferenstein%2Ffiles%2F2019%2F08%2Fscreenshot-1200x688.jpg)

Como é possível ver acima, existem trechos de texto em fundo branco, e trechos de código em fundo cinza. Caso queira usar notebooks no seu computador, é possível usando Jupyter. Você pode encontrar mais informações sobre isso neste [link](https://jupyter.org/install).

### Bibliotecas

No contexto de programação, bibliotecas contém o código que já foi escrito por alguém e nos permite executar funcionalidades específicas já prontas.

Bibliotecas usualmente utilizadas na análise de dados são: 
* NumPy, que permite fazer operações matemáticas mais avançadas; 
* Pandas, que permite ler arquivos de dados mais facilmente; e 
* MatPlotLib, que permite gerar visualizações dos dados em gráficos de barras, boxplots, e outros tipos de gráficos.

Após a instalação local do Python, utilizaremos o pip (*Package Installer for Python*). O pip é o gerenciador de pacotes (bibliotecas) do Python. Utilize o comando abaixo para instalar o NumPy, Pandas e MatPlotLib:

```shell
pip install numpy pandas matplotlib
```

---

## Sintaxe

Inicialmente, é necessário entender o conceito de **variável**. Uma variável é utilizada para armazenar um valor durante a execução do programa. A sintaxe segue o seguinte formato:

```python
nome_da_variavel = valor
```

O "=" é chamado de atribuição.

```python
idade = 21
```

As variáveis podem ser utilizadas também em expressões, veja a expressão aritmética abaixo:

```python
dobro = idade * 2
```

No código acima não foi necessário utilizar o `21` novamente, pois seu valor estava armazenado na variável. Outro exemplo onde armazena-se um nome:

```python
nome = "Júlio"
```

Entre os exemplos anteriores, há uma diferença sutil: o uso das aspas. Isso faz a distinção de fierentes tipos de dados. Os tipos mais  simples (denominados **tipos literais**) são:

* **String**: é um dado que se refere uma sequência de caracteres. Por exemplo: `nome = "Júlio"`;
* **Int**: é um dado numérico que não tem valor decimal. Por exemplo: `idade = 21`;
* **Float**: é um dado numérico que possui valor decimal. Por exemplo:
`altura = 1.83`. Para valores decimais utiliza-se o ponto, e não a vírgula.

A medida que você se aprofundar, será possível encontrar tipos mais avançados de dados, inclusive criar seus próprios tipos de dados. 

## Conjunto de dados = Tabelas?

Após a breve explicação sobre variáveis e os tipos mais básicos de dados, o próximo passo é usar dados existentes nos programas.

Na análise de dados não tratamos o tipo do dado apenas como o tipo de uma variável. Entende-se que os conjuntos de dados assumem alguns tipos diferentes: dados tabulares (Excel, CSV, etc), imagens, vídeos, pdfs ou docs, páginas da internet, entre outros. Dependendo da análise, o dado pode tomar diferentes formas: um tweet, uma foto, um e-mail, entre outros.

![mnist](https://miro.medium.com/max/530/1*VAjYygFUinnygIx9eVCrQQ.png)

No decorrer deste tutorial, usaremos tabelas para representar os dados que temos interesse.

## Abrindo tabelas em Python

Usaremos como conjunto de dados os valores da Cota para o Exercício da Atividade Parlamentar (CEAP). Você pode ler mais sobre o que é a CEAP [aqui](https://www2.camara.leg.br/transparencia/acesso-a-informacao/copy_of_perguntas-frequentes/cota-para-o-exercicio-da-atividade-parlamentar), mas pode-se resumir como um auxílio financeiro para os deputados para gastos com hotelaria, transporte, passagens, etc. Você pode baixar a tabela *dadosCEAP1.csv* [aqui](https://raw.githubusercontent.com/juliobguedes/predictive-data-science/master/lab1/datasets/dadosCEAP1.csv).

Para abrir uma tabela, podemos usar a biblioteca Pandas. O código que precisamos escrever para incluir a biblioteca é:

```python
import pandas as pd
```

A linha acima torna as funcionalidades existentes na biblioteca Pandas para o nosso código através da variável *pd*. Em seguida, podemos abrir a tabela:

```python
tabela = pd.read_csv('dadosCEAP1.csv')
```

Para visualizar nossa tabela, podemos usar o comando *.head()*:

```python
tabela.head()
```

Isso nos permite ver as cinco primeiras linhas da nossa tabela para entendermos melhor os dados que estamos lidando. Se você tiver executando na linha de comando, será algo como:

![tabela head cli](https://i.imgur.com/E849hBx.png)

Caso esteja executando em um notebook, será assim:

![tabela head](https://i.imgur.com/mLBdjWP.png)

Agora que abrimos a nossa tabela com Python, podemos fazer diversas coisas, incluindo visualizar os dados. 

## Primeira Visualização

Um dos gráficos mais simples que podemos gerar é um histograma. Uma variável interessante para analisar é o valor gasto, que está presente na tabela na coluna *valorLíquido*. Quando pensamos nas perguntas: "Quantos reembolsos foram pedidos até o valor de cinco mil reais? E entre cinco e dez mil reais?", podemos respondê-las usando um histograma.

Para gerar o histograma, usaremos a biblioteca *matplotlib*, mais especificamente a função *pyplot* que existe nessa biblioteca. Novamente, importamos a biblioteca com o seguinte comando:

```python
from matplotlib import pyplot as plt
```

Acima, estamos importando apenas a função *pyplot* da biblioteca inteira e colocando essa função na variável *plt*. Anteriormente importamos a biblioteca Pandas por completo, mas apenas utilizamos a função *read_csv*. poderíamos também ter feito isso através do comando:

```python
from pandas import read_csv as abre_csv
```

Abrindo dessa forma, ao invés de abrir o csv utilizando *pd.read_csv*, usamos *abre_csv*. 

Continuando com o código para gerar nosso histograma, podemos declarar o início de uma nova figura:

```python
plt.figure()
```

Em seguida, geramos o histograma da coluna valorLíquido:

```python
plt.hist(tabela['valorLíquido'])
```

Acima, a coluna da tabela foi acessada usando colchetes e colocando o nome da coluna dentro, *tabela['valorLíquido']*. Por fim, podemos salvar nosso gráfico como uma imagem png usando o comando:

```python
plt.savefig('histograma.png')
```

Ao abrir, teremos o gráfico:

![plot](https://i.imgur.com/wooSP9w.png)

Pelo gráfico, entendemos que mais de 500 mil reembolsos foram pedidos com o valor até 25 mil reais. Ainda assim, observando a extensão do eixo X, observa-se que há pelo menos um reembolso com valor próximo a 175 mil.

---

Na próxima parte do tutorial, abordaremos tópicos mais avançadas que podemos fazer usando apenas essas bibliotecas, e assim entender ainda mais o nosso conjunto de dados.

Agradeço a leitura, e fique a vontade para ler mais textos na minha página do [Medium](https://medium.com/@juliobguedes) e na minha página do [Dev.to](https://dev.to/juliobguedes). Se quiser entrar em contato, [@juliobguedes](https://twitter.com/juliobguedes).
