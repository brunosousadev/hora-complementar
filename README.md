# hora-complementar-api


# A ideia do projeto é

Uma plataforma para gerenciar as horas complementares dos cursos da Universidade Federal do Ceará - Campus Crateús

# Por quê?

Este projeto faz parte do meu portfólio pessoal, portanto, ficarei feliz se você puder me fornecer algum feedback sobre o projeto, código, estrutura ou qualquer coisa que você possa relatar que possa me tornar um desenvolvedor melhor!

Email-me: brse01@gmail.com

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/brunosousa01/).

Além disso, você pode usar este projeto como desejar, estudar, fazer melhorias ou ganhar dinheiro com ele!

É grátis!

# Banco de Dados
## Tabelas 
- **Curso**: 
- **Pessoa** 
- **Categoria** 
- **Atividade**
- **Comprovante** 

  ## Campos das Tabelas ##
### Curso ###
|    CAMPO   | TIPO        | NULO | EXTRA          | COMENTARIOS                  |
|------------|-------------|------|----------------|------------------------------|
| id         | INT         | NO   | AUTO_INCREMENT |                              |
| nome       | VARCHAR(45) | NO   |	               |                              |
| quantidade | INT         | NO   |                |                              |


### aluno ###
|    CAMPO   | TIPO        | NULO | EXTRA          | COMENTARIOS                  |
|------------|-------------|------|----------------|------------------------------|
| id         | INT         | NO   | AUTO_INCREMENT |                              | 
| nome       | VARCHAR(45) | NO   |	               |                              |
| matricula  | VARCHAR(30) | SI   |	               |                              |
| email      | VARCHAR(30) | SI   |	               |                              |
| senha      | VARCHAR(100)| SI   |	               |                              |
| horas_computadas | VARCHAR(50) | SI   |	         |                              |
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

## Atividade ##
|    CAMPO   | TIPO        | NULO | EXTRA          | COMENTARIOS                  |
|------------|-------------|------|----------------|------------------------------|
| id         | INT         | NO   | AUTO_INCREMENT |                              | 
| nome       | VARCHAR(45) | NO   |	               |                              |
| descricao  | VARCHAR(250) | NO  | 	             |                              |
| valor      | INT        | NO    |                |                              |
| id_pessoa  | INT        | NO    |                | CHAVE EXTRAGEIRA             |
| id_atividade| INT       | NO    |                | CHAVE EXTRAGEIRA             |


# Funcionalidades


# Pré-requisitos
  ## backend
  ## frontend

# Instalando

# Instalando dependências
# Como contribuir
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request.


# Licença
Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](https://github.com/brunosousadev/hora-complementar-api/blob/master/LICENSE) para obter detalhes

