---
layout: posts
title: "Tutorial Ultra Rápido: Visualizando dados espaciais com Python"
author: Michel Nascimento
date: 06/06/2020
tags: python, dados espaciais, visualização
---

## Objetivo deste tutorial

Demonstrar de forma simples e rápida o processo de criação de mapas em python. Como exemplo prático, são utilizados dados sobre casos confirmados da COVID-19 no Brasil.


## O que é preciso?

Apenas acesso à Internet ou ter o python instalado na máquina.

Neste último caso, basta escolher a IDE de prefência, Jupyter, PyCharm, Spyder, etc...

Se não possui e não quer instalar o python, basta acesssar o [Google Colabs](https://colab.research.google.com/notebooks/intro.ipynb) e continuar o tutorial!

## Preparando o ambiente de trabalho

A primeira atividade é importar as ferramentas necessárias para poder trabalhar com o mapa.


```python
# Para manipular dataframes
import pandas as pd
# Fazer alguns cálculos
import numpy as np
# Tratar o mapa
import folium
# Manipular arquivos json
import json
```

Em caso de estar utilizando o python e não ter alguns dos pacotes descritos, basta instalá-los através do instalador pip:

    python3 -m pip install folium

    python -m pip install pandas

Ou caso use o conda:

    conda install -c conda-forge folium

## Gerando o mapa base
Para gerar o mapa do pacote folium, basta executar o código abaixo e pronto! Uma base para o mapa já é renderizada.


```python
mapa = folium.Map()
```

![mapa_base](https://codimd.s3.shivering-isles.com/demo/uploads/upload_dc75558112b52a195ac86b44e7e1ba61.png)


Acontece que para o objetivo do tutorial, a análise dos dados se dá especificamente no Brasil, para isso, deve-se customizar um pouco o mapa...


```python
mapa = folium.Map(
    # centralização do mapa no Brasil
    location = [-14.2350, -51.9253],
    # zoom
    zoom_start = 4
)

```

![mapa_brasil](https://codimd.s3.shivering-isles.com/demo/uploads/upload_5169dd6496911fee5660e8802a1719c8.png)

E tem-se então uma base adequada para explorar os dados!

## E os dados?
Para a analise, serão utilizados os dados fornecidos pelo [brasil.io](https://brasil.io/dataset/covid19/caso?format=csv), que devem ser salvos em um dataframe usando o pandas.


```python
df = pd.read_csv('https://brasil.io/dataset/covid19/caso?format=csv')

# visualizando alguns dados
df.head(5)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>date</th>
      <th>state</th>
      <th>city</th>
      <th>place_type</th>
      <th>confirmed</th>
      <th>deaths</th>
      <th>is_last</th>
      <th>estimated_population_2019</th>
      <th>city_ibge_code</th>
      <th>confirmed_per_100k_inhabitants</th>
      <th>death_rate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2020-04-12</td>
      <td>MG</td>
      <td>Abaeté</td>
      <td>city</td>
      <td>1</td>
      <td>0.0</td>
      <td>True</td>
      <td>23237.0</td>
      <td>3100203.0</td>
      <td>4.30348</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2020-04-12</td>
      <td>MG</td>
      <td>Alfenas</td>
      <td>city</td>
      <td>1</td>
      <td>0.0</td>
      <td>True</td>
      <td>79996.0</td>
      <td>3101607.0</td>
      <td>1.25006</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2020-04-12</td>
      <td>MG</td>
      <td>Alpercata</td>
      <td>city</td>
      <td>1</td>
      <td>0.0</td>
      <td>True</td>
      <td>7424.0</td>
      <td>3101805.0</td>
      <td>13.46983</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2020-04-12</td>
      <td>MG</td>
      <td>Araguari</td>
      <td>city</td>
      <td>7</td>
      <td>0.0</td>
      <td>True</td>
      <td>117267.0</td>
      <td>3103504.0</td>
      <td>5.96928</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2020-04-12</td>
      <td>MG</td>
      <td>Arcos</td>
      <td>city</td>
      <td>4</td>
      <td>0.0</td>
      <td>True</td>
      <td>40092.0</td>
      <td>3104205.0</td>
      <td>9.97705</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>



Como se vê, esses dados vêm separados por cidades e estados, já que a intenção é visualizar no mapa apenas os casos confirmados nos estados, a tabela é filtrada para se ter apenas as informações necessárias.


```python
# filtrando a tabela, separando casos confirmados por estado
df_por_estados = df.loc[df.place_type == 'state', ['state', 'confirmed','is_last']]
# considerando apenas as últimas medições de cada estado
df_por_estados = df_por_estados.loc[df.is_last == True, ['state', 'confirmed']]
df_por_estados.head(5)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>state</th>
      <th>confirmed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>100</th>
      <td>MG</td>
      <td>806</td>
    </tr>
    <tr>
      <th>106</th>
      <td>AC</td>
      <td>72</td>
    </tr>
    <tr>
      <th>112</th>
      <td>AL</td>
      <td>48</td>
    </tr>
    <tr>
      <th>131</th>
      <td>AM</td>
      <td>1049</td>
    </tr>
    <tr>
      <th>135</th>
      <td>AP</td>
      <td>193</td>
    </tr>
  </tbody>
</table>
</div>



## Como separar as regiões?

Neste exemplo, o mapa do Brasil deve estar separado visualmente pelas fronteiras de seus estados.

Primeiramente busca-se um json, este é um arquivo que contem dados sobre as linhas fronteiriças que separam os espaços dentro do mapa. Um exemplo pode ser encontrado aqui [br_states](https://raw.githubusercontent.com/datalivre/Conjunto-de-Dados/master/br_states.json), após o download desse arquivo deve-se adicioná-lo na mesma pasta em que o código está sendo executado.

A mesma coisa pode ser feita com os municípios, caso houvesse a intenção de se analisar algum estado apenas, bastaria utilizar um json previamente separado por municípios.

Os dados estão disponíveis na api do IBGE, basta usar o código do município aqui: [malha IBGE](https://servicodados.ibge.gov.br/api/v2/malhas/?formato=application/vnd.geo+json).


```python
# criando um objeto com os geo dados
dados_geo = json.load(open("br_states.json"))
```

Agora há um objeto para delineamento dos estados no mapa, é hora de usá-lo!


```python
mapa = folium.Map([-14.2350, -51.9253], zoom_start=4)

folium.Choropleth(
    geo_data=dados_geo,
    # paleta de cores
    fill_color='YlGnBu',
    fill_opacity=0.3,
    line_weight=2,
    data = df_por_estados,
    columns = ['state', 'confirmed'],
    key_on = 'feature.id',
).add_to(mapa)

```

    <folium.features.Choropleth at 0x24c7c5c1d68>

![mapa_estados](https://codimd.s3.shivering-isles.com/demo/uploads/upload_3e288fdaac96bc50dfdc868771981352.png)

Como pode-se perceber, os estados estão separados, porém as cores da legenda não parecem muito bem distribuídas, para resolver isso, utiliza-se uma técnica de normalização simples e comum, a escala logarítmica.


```python
# normalizando os valores de casos confirmados
df_por_estados['confirmed'] = np.log(df_por_estados['confirmed'])

# Imprimindo novamente o mapa
mapaFim = folium.Map([-14.2350, -51.9253], zoom_start=4)

folium.Choropleth(
    geo_data=dados_geo,
    # utilizando outra paleta de cores
    fill_color='PuRd',
    fill_opacity=0.9,
    line_weight=2,
    data = df_por_estados,
    columns = ['state', 'confirmed'],
    key_on = 'feature.id',
    legend_name = "Casos em escala logarítmica"
).add_to(mapaFim)

```




    <folium.features.Choropleth at 0x24c16fdd860>




![mapa estados customizados](https://codimd.s3.shivering-isles.com/demo/uploads/upload_11238de0e63098ca75da3e6ff74d5c45.png)

Agora o mapa apresenta uma boa divisão, também foram alteradas a opacidade e a paleta de cores.

## Customização

A capacidade de customização de mapas com essa biblioteca é enorme, pode-se adicionar interatividade, animações, marcas, etc...
O intuito do tutorial é trazer apenas uma forma simples e rápida de se iniciar no processo de renderização de mapas. Tem muita coisa legal aqui: [Folium](https://python-visualization.github.io/folium/).


c.q.d

Fim
