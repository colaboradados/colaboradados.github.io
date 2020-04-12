---
layout: posts
title: "Resgatando os dados do Portal da Copa do Mundo de 2014"
author: João Ernane
date: 06/09/2019
tags: dados da copa 2014, transparencia, lai
---

# Resgatando os dados do Portal da Copa do Mundo de 2014

Os ouvintes do **Coluna7** já sabem desde o nosso episódio de apresentação, mas quem ainda não conhece a história do **Colaboradados**, vale a pena fazermos um pequeno flashback até 2018, quando nossa diretora Judite Cypreste atuava na redação de um veículo.

Durante este período, para que as matérias a respeito deste tema pudessem ser produzidas, era comum recorrer ao Portal da Copa, uma página de transparência mantida pela CGU com extratos, cópias de contratos e tabelas de gastos relacionados ao esforço estatal de preparar o país para a Copa do Mundo da FIFA de 2014. No ano passado, porém, durante a produção de uma reportagem, este portal foi desativado e a possibilidade acesso a estes arquivos foi perdida.

Até hoje.

Graças aos esforços de Judite e Bruno Morasutti, advogado porto-alegrense especialista em Direito Público e Processo Civil e consultor jurídico do **Colaboradados**, nós conseguimos ter acesso a todos os arquivos que uma vez estavam disponíveis à sociedade e se perderam.

Através de uma série de pedidos realizados sob o fundamento da Lei de Acesso à Informação (para saber mais [clique aqui](http://colaboradados.com.br/podcasts/episodio-004.html) e ouça nosso episódio a respeito desta ferramenta fundamental), nos foi enviado uma série de arquivos compactados e divididos em 27 partes, totalizando 124,8 GB que, após descompressão, alcançam a marca de 186.765 e 134,4GB.
Como nossa motivação não é sermos os detentores deste material que, por sua essência é público e deve poder ser consultado por toda a sociedade, nos últimos meses temos nos dedicado a fazer seu upload de volta para um servidor aberto. Neste momento lembramos de um tweet viralizado no início do ano por um representante da Internet Archive.

![Tweet do usuário @textfiles: I don't speak Portuguese, so spread as you see fit: If you have Brazilian culture, content or data, please upload it directly to the Internet Archive, or mail hard drives out to us to store your material. An incredible amount of material is going to be lost. We will host it.](https://i.imgur.com/TcKQodN.png)

[Link do tweet original](https://twitter.com/textfiles/status/1080512855345123338)


Enviar um disco rígido ainda não é viável para nós, então, pensando nisso, recorremos às ferramentas da instituição para realizar o upload dos arquivos obtidos.

Em razão da enorme quantidade de arquivos, a melhor forma de subí-los é através da ferramenta de linha de comando disponibilizada pelo Internet Archive chamada `internetarchive` [aqui](https://archive.org/services/docs/api/internetarchive/cli.html).

Dentre as várias funcionalidades desta ferramenta, como fazer download e realizar buscas, focaremos, por enquanto na capacidade de fazer upload por meio de linha de comando.

Para tanto, basta instalar a ferramenta e configurar por meio do comando `ia configure`, utilizando as credenciais criadas no momento do registro da conta de usuário, repetindo o e-mail e a senha.

Para upload, a sintaxe esperada é um pouco diferente, segundo a [documentação oficial](https://archive.org/services/docs/api/internetarchive/cli.html#upload):

`$ ia upload <identifier> file1 file2 --metadata="mediatype:texts" --metadata="blah:arg"`

Onde:
- `ia upload` é o programa a ser executado seguido de sua função.
- `<identifier>` é o nome da coleção de arquivos criada a partir do usuário. No nosso caso elas se chamam *Portal-Copa-2014_anexos* e *Portal-Copa-2014_tabelas* em razão da estrutura de dados que nos foi disponibilizada.
- `file1 file2...filen` são todos os arquivos que o usuário deseje fazer o upload.
- Os demais argumentos são opcionais e dizem respeito aos metadados dos arquivos, o que pode facilitar a navegação e descoberta dos mesmos através do motor de busca da plataforma.

Fazer o upload de quase cento e quarenta mil arquivos desta maneira, porém, é impraticável. Neste cenário é aconselhável (e optamos por) utilizar a opção de *upload em massa*.

Para tanto, precisamos preparar uma série de arquivos `.csv` com cabeçalhos e o caminho dos arquivos a serem subidos, cujo formato se segue:

(Os exemplos a seguir utilizarão a subpasta `anexo` para fins de ilustração.)


| identifier               | file                               | description |
|--------------------------|------------------------------------|-------------|
| Portal-Copa-2014_anexos  |anexos/Portal da Copa anexo/**1**   | Arquivos do Portal da Copa 2014 adquiridos pela equipe do Colaboradados via Lei de Acesso à Informação em Maio-Junho/2019 |
| Portal-Copa-2014_anexos  |anexos/Portal da Copa anexo/**2**   | Arquivos do Portal da Copa 2014 adquiridos pela equipe do Colaboradados via Lei de Acesso à Informação em Maio-Junho/2019
| Portal-Copa-2014_anexos  |anexos/Portal da Copa anexo/**3**   | Arquivos do Portal da Copa 2014 adquiridos pela equipe do Colaboradados via Lei de Acesso à Informação em Maio-Junho/2019
| ...  | ... | ... |
| Portal-Copa-2014_anexos  |anexos/Portal da Copa anexo/***enésima pasta*** | Arquivos do Portal da Copa 2014 adquiridos pela equipe do Colaboradados via Lei de Acesso à Informação em Maio-Junho/2019

Ao apontar o caminho das pastas, o programa `ia` automaticamente realiza o upload dos arquivos dentro destas, sem a necessidade de apontar o caminho destes individualmente.

Para obter o caminho das pastas e gerar o arquivo `.csv` automaticamente foi utilizado o script em Python que se segue:

```python

from pathlib import Path
import pandas as pd
import os

pasta = Path("anexos")
iteracao = 0
for (sub1, sub2, arquivos) in os.walk(pasta):
    df = pd.DataFrame(columns=["identifier", "file", "description"])
    df.at["1", "identifier"] = "Portal-Copa-2014_anexos"
    df.file = sub1
    df.description = "Arquivos do Portal da Copa 2014 adquiridos pela equipe do Colaboradados via Lei de Acesso à Informação em Maio-Junho/2019"
    iteracao += 1
    df.to_csv(f"tabela-anexos_{iteracao}.csv")
```
Algumas centenas de arquivos `.csv` foram obtidos e utilizados, juntamente com outro script em Python, para fazer upload automaticamente. Este se segue:

```python
import os
from pathlib import Path
from time import sleep
from requests import exceptions

def execute_ia(arquivo):
    os.system(f"ia upload --retries=120 --sleep=120 --spreadsheet={arquivo}")

if __name__ == "__main__":
    base = Path(os.get_cwd())
    arquivos = os.listdir(base)
    upload = []
    for item in arquivos:
        if items.endswith(".csv"):
            upload.append(items)
    upload.sort()
    try:
        for arquivo in upload:
            print("**subindo arquivo {arquivo}**")
            execute_ia(arquivo=arquivo)
            print("**upload finalizado**")
            sleep(600)
    except exceptions.ConnectionError:
        print(f"**erro no arquivo: {arquivo}**")

```

Executando este script por algumas semanas conseguimos subir *quase* todos os arquivos, sendo alguns recusados pela plataforma do Internet Archive por estarem corrompidos, impossíveis de se confirmar o conteúdo no caso de arquivos `.rar` ou simplesmente vazios, apresentando 0 *bytes* de informação.

A lista dos arquivos que apresentam problemas pode ser encontrada clicando [aqui](https://docs.google.com/spreadsheets/d/1jxvjYAoCtILu8nUIVSijSDlusObHQmZ708LIJRvoAus/edit?usp=sharing).

Estamos trabalhando continuamente para que estes arquivos sejam disponibilizados pela CGU e, assim que recebermos novas informações, atualizaremos estas bibliotecas. Informamos também que há pedidos de nossa autoria para que o site original retorne ao ar.

Para maiores informações ouça o episódio 07 do podcast **Coluna7**.
