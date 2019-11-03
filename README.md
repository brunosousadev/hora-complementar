<h2 align="center">
    <img alt="GoStack MeetApp" src="https://res.cloudinary.com/doxmygrwc/image/upload/v1570365301/g982_mpoeoz.png" />
    <br>    
  Projeto Hora Complementares
</h2>
<h4 align="center">
  Um web site que permite que os usuários gerencie e organizem suas horas complementares.
</h4>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/badge/NODE-v8.10.0-green.svg">

  <img alt="GitHub language count" src="https://img.shields.io/badge/NPM-v3.5.2-blue.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/badge/ADONISJS-v4.0.12-red.svg">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/license/nhn/tui.image-editor.svg">
  
</p>

# 👨🏼‍💻 Desenvolvedor 

- [Bruno Sousa](https://www.linkedin.com/in/brunosousa01/)

# Por quê?

Este projeto faz parte do meu portfólio pessoal, portanto, ficarei feliz se você puder me fornecer algum feedback sobre o projeto, código, estrutura ou qualquer coisa que você possa relatar que possa me tornar um desenvolvedor melhor!

Email-me: brse01@gmail.com

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/brunosousa01/).

Além disso, você pode usar este projeto como desejar, estudar, fazer melhorias ou ganhar dinheiro com ele!

É grátis!

# Banco de Dados
## Tabelas 
- **Curso**;
- **Usuário**;
- **Categoria**; 
- **Atividade**;
- **Comprovante**.

  ## Composição das Tabelas ##
### Curso ###
|    CAMPO   | TIPO        | NULO | EXTRA          | COMENTARIOS                  |
|------------|-------------|------|----------------|------------------------------|
| id         | INT         | NO   | AUTO_INCREMENT |                              |
| nome       | VARCHAR(45) | NO   |	               |                              |
| quantidade | INT         | NO   |                |                              |


### Usuário ###
|    CAMPO   | TIPO        | NULO | EXTRA          | COMENTARIOS                  |
|------------|-------------|------|----------------|------------------------------|
| id         | INT         | NO   | AUTO_INCREMENT |                              | 
| nome       | VARCHAR(45) | NO   |	               |                              |
| matricula  | VARCHAR(30) | NO   |	               |                              |
| avatar     | VARCHAR(30) |      |                |                              |
| email      | VARCHAR(30) | SI   |	               |                              |
| senha      | VARCHAR(100)| SI   |	               |                              |
| horas_computadas | VARCHAR(50)  | NO   |	       |  TEM VALOR PADRÃO INCIAL. 0  |
| id_curso   | INT         | NO   |                | CHAVE EXTRAGEIRA             |

## Categoria ##
|    CAMPO   | TIPO        | NULO | EXTRA          | COMENTARIOS                  |
|------------|-------------|------|----------------|------------------------------|
| id         | INT         | NO   | AUTO_INCREMENT |                              | 
| nome       | VARCHAR(45) | NO   |	               |                              |
| descricao  | VARCHAR(250) | NO   |	             |                              |
| observacao       | VARCHAR(45) | NO   |	         |                              |
| limite     | INT        | NO   |                 |                              |
| id_curso   | INT         | NO   |                | CHAVE EXTRAGEIRA             |

## Atividade ##
|    CAMPO   | TIPO        | NULO | EXTRA          | COMENTARIOS                  |
|------------|-------------|------|----------------|------------------------------|
| id         | INT         | NO   | AUTO_INCREMENT |                              | 
| nome       | VARCHAR(45) | NO   |	               |                              |
| descricao  | VARCHAR(250) | NO   |	             |                              |
| tipo_comprovante       | VARCHAR(45) | NO   |	   |                              |
| valor     | INT        | NO   |                  |                              |
| id_categoria   | INT         | NO   |            | CHAVE EXTRAGEIRA             |

## Comprovante ##
|    CAMPO   | TIPO        | NULO | EXTRA          | COMENTARIOS                  |
|------------|-------------|------|----------------|------------------------------|
| id         | INT         | NO   | AUTO_INCREMENT |                              | 
| nome       | VARCHAR(45) | NO   |	               |                              |
| descricao  | VARCHAR(250) | NO  | 	             |                              |
| valor      | INT        | NO    |                |                              |
| id_usuario | INT        | NO    |                | CHAVE EXTRAGEIRA             |
| id_atividade| INT       | NO    |                | CHAVE EXTRAGEIRA             |


# Funcionalidades

## API REST
1. ```index```: **Listar** todos registros;
2. ```show```: **Exibir** um registro;
3. ```store```: **Criar** novo registro;
4. ```update```: **Alterar** um registro;
5. ```destroy```: **Remover** um registro.


# Backend  
  ## Test Driven Development-TDD
> "O desenvolvimento do backend está sendo feito por desenvolvimento Orientado por Testes (Test Driven Development). Desenvolvimento orientado a TDD baseia-se em pequenos ciclos de repetições, onde onde para cada funcionalidade do sistema um teste é criado antes. Este novo teste criado inicialmente falha, já que ainda não temos a implementação da funcionalidade em questão e, em seguida, implementamos a funcionalidade para fazer o teste passar!" ( [Devmedia](https://www.devmedia.com.br/test-driven-development-tdd-simples-e-pratico/18533),2018).
    
 #### Ciclo de desenvolvimento
 Red,Green, Refactor. Ou seja:

1. Escrevemos um Teste que inicialmente não passa (```Red```);
2. Adicionamos uma nova funcionalidade do sistema;
3. Fazemos o Teste passar (```Green```);
4. Refatoramos o código da nova funcionalidade (```Refactoring```);
5. Escrevemos o próximo Teste.

![](https://arquivo.devmedia.com.br/artigos/Fabio_Gomes_Rocha/TDD/TDD_1.jpg)


## Validação das requisições
  Precisa instalar o provedor de validação do adonis

  ```adonis install @adonisjs/validator```

  Adiciona lá no start/app.js
```
  const providers = [
        '@adonisjs/validator/providers/ValidatorProvider'
    ]
```

A validação de `AdonisJ` usa o  [Indicative](https://indicative.adonisjs.com/guides/master/introduction). Para detalhes completos sobre o uso, consulte a documentação indicativa oficial.

Indicativo é uma biblioteca de validação de dados para validar objetos de dados complexos, definindo um esquema legível por humanos. Em poucas palavras, você pode

1.  Valide objetos e matrizes aninhados.;
2.  Defina mensagens de erro de validação personalizadas;
3.  Use formatadores de erro para definir o formato das mensagens de erro. Por exemplo: JSON: formatador de API para formatar mensagens de erro de acordo com a especificação JSON: API;
4.  Opção para remover propriedades não validadas do objeto de dados;
5.  Suporte para validações assíncronas;
6.  API extensível para adicionar regras personalizadas;
7.  Desinfetante de dados.

Obs:  Um erro que estava ocorrendo nas validações era na questão de inteiros e isso se apresentou como bug no repositório do Adonisjs porém, já foi corrigida na versão 4.1 do AdonisJs. Para fazer a atualização basta seguir os paços abaixo:

O primeiro passo é atualizar todas as dependências.

Usamos o `npm-check` para obter as versões mais recentes dos pacotes:

``` 
npm install -g npm-check

```
Execute o seguinte comando para atualizar as dependências interativamente:

``` 
npm-check -u

``` 
Mais informações em : [Documentação](https://adonisjs.com/docs/4.1/upgrade-guide#_getting_started)
  
# Frontend


# :information_source: Como usar

Para clonar e executar este aplicativo, você precisará do Git, Node.js v10.16 ou superior + Yarn v1.13 ou superior + AdonisJs 4.0 ou superior instalado no seu computador. Na sua linha de comando:

```bash
# Clonar este repositório
$ https://github.com/brunosousadev/hora-complementar.git

# Entre no repositório
$ cd hora-complementar

# Instalar dependências
$ yarn install

# Execute o servidor
$ adonis serve --dev
```

# Como contribuir

1. Faça um fork do repositório.
2. Clone este fork. 
    ```
    $ git clone URLDOSEUFORK
    ```
3. Crie sua branch para realizar as modificações desejadas.
    ``` 
    $ git checkout -b minha-modificacao
    ```
4. Realize as modificações.
5. Confirme suas alterações.
    ```
    $ git commit -am 'Modifica algo'
    ```
    ou 
    ```
    $ git add .
    $ git commit -m 'Modifica Algo'
    ```
6. Realize um push para a branch remota do seu fork.
    ```
    git push origin minha-modificacao
    ```
7. Na interface do github, em seu fork, crie um pull request 


# :memo: Licença
Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](https://github.com/brunosousadev/hora-complementar-api/blob/master/LICENSE) para obter detalhes

