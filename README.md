
# hora-complementar

![nodejs](https://img.shields.io/badge/NODE-v8.10.0-green)
![npm version](https://img.shields.io/badge/NPM-v3.5.2-blue)
![adonisjs](https://img.shields.io/badge/ADONISJS-v4.0.12-red)
![license](https://img.shields.io/github/license/nhn/tui.image-editor.svg)


# A ideia do projeto é

Uma plataforma para gerenciar as horas complementares dos cursos da Universidade Federal do Ceará - Campus Crateús.

# Por quê?

Este projeto faz parte do meu portfólio pessoal, portanto, ficarei feliz se você puder me fornecer algum feedback sobre o projeto, código, estrutura ou qualquer coisa que você possa relatar que possa me tornar um desenvolvedor melhor!

Email-me: brse01@gmail.com

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/brunosousa01/).

Além disso, você pode usar este projeto como desejar, estudar, fazer melhorias ou ganhar dinheiro com ele!

É grátis!

# Banco de Dados
## Tabelas 
- **Curso**: 
- **Usuário** 
- **Categoria** 
- **Atividade**
- **Comprovante** 

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
| matricula  | VARCHAR(30) | SI   |	               |                              |
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
5. ```destroy```: **Remover** um registro;


# Pré-requisitos
  ## backend  
  ## Test Driven Development-TDD
> "O desenvolvimento do backend está sendo feito por desenvolvimento Orientado por Testes (Test Driven Development). Desenvolvimento orientado a TDD baseia-se em pequenos ciclos de repetições, onde onde para cada funcionalidade do sistema um teste é criado antes. Este novo teste criado inicialmente falha, já que ainda não temos a implementação da funcionalidade em questão e, em seguida, implementamos a funcionalidade para fazer o teste passar!" ( [Devmedia](https://www.devmedia.com.br/test-driven-development-tdd-simples-e-pratico/18533),2018).
    
 #### Ciclo de desenvolvimento
 Red,Green, Refactor. Ou seja:


1. Escrevemos um Teste que inicialmente não passa (```Red```)
2. Adicionamos uma nova funcionalidade do sistema
3. Fazemos o Teste passar (```Green```)
4. Refatoramos o código da nova funcionalidade (```Refactoring```)
5. Escrevemos o próximo Teste

![](https://arquivo.devmedia.com.br/artigos/Fabio_Gomes_Rocha/TDD/TDD_1.jpg)

  ## frontend

# Instalando

# Instalando dependências
# Como contribuir

1. faça seu cópia !
2. Crie sua ramificação de recursos: git checkout -b my-new-feature
3. Confirme suas alterações: git commit -am 'Add some feature'
4. Pressione para a ramificação: git push origin my-new-feature
5. Envie uma solicitação de recebimento.


# Licença
Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](https://github.com/brunosousadev/hora-complementar-api/blob/master/LICENSE) para obter detalhes

