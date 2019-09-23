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
`{ int: id, string: nome, int: quantidade} `
- **Pessoa** 
`{ int: id, string: nome, string: matricula, string: senha, string: email, int horas_computadas, int id_curso}`
- **Categoria** 
`{int: id, string: nome, string: descrição, string: observação, int: limite, int: id_curso}`
- **Atividade**
`{int: id, string: nome , string: descrição, string: tipo_comprovante, int: valor, string: observação, int: id_categoria}`
- **Comprovante** 
`{int: id, string: nome, srting: descrição, int: valor, int: id_pessoa, int: id_atividade}`
  
# Funcionalidades


# Pré-requisitos

Para executar este projeto no modo de desenvolvimento, você precisará de um ambiente básico para executar um aplicativo React-Native, que pode ser encontrado aqui.

Além disso, você precisará do servidor em execução localmente em sua máquina com os dados simulados. Você pode encontrar o servidor e todas as instruções para iniciar o servidor aqui.

# Instalando

# Instalando dependências

# Conectando o aplicativo ao servidor

# Licença
Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](https://github.com/brunosousadev/hora-complementar-api/blob/master/LICENSE) para obter detalhes

