# Projeto RhControl (Angular)

Este é o repositório do front-end de um projeto Full-stack desenvolvido em Angular. O projeto faz parte de um sistema de gerenciamento de funcionários de uma empresa, utilizando um Back-end desenvolvido em Java com Spring Boot e Spring Security.

## Deploy

O projeto está atualmente em produção e disponível online. Você pode acessá-lo no seguinte link:

[Link do Deploy](https://rhcontrol.netlify.app/)

- Login: admin@admin.com
- Senha: 123abc

## Pré-requisitos

Antes de executar o projeto, é necessário ter os seguintes pré-requisitos instalados em sua máquina:

- Node.js (https://nodejs.org)
- Angular CLI (https://angular.io/cli)

## Instalação

Caso queira clonar o projeto, siga os seguintes passos:

1. Clone este repositório em sua máquina:
```bash
  git clone https://github.com/felstylex/Angular-RhControl.git
```

2. Navegue até o diretório do projeto:
```bash
  cd rhControl
```
3. Execute o seguinte comando para instalar as dependências do projeto:
```bash
  npm install
```
4. Inicie o servidor de desenvolvimento do Angular:
```bash
  npm start
```
5. O aplicativo estará disponível em `http://localhost:4200`.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Lista de funcionários: Exibe uma lista de todos os funcionários cadastrados no sistema.
- Detalhes do funcionário: Permite visualizar os detalhes de um funcionário específico.
- Cadastro de funcionário: Permite cadastrar um novo funcionário no sistema.
- Atualização de funcionário: Permite atualizar os dados de um funcionário existente.
- Exclusão de funcionário: Permite excluir um funcionário do sistema.
- Sistema de login: Necessário para acessar as outras rotas.
- Sistema de registro: Permite cadastrar um novo usuário para acessar o projeto.

## Rotas

O projeto define as seguintes rotas:

- `/employee`: Lista de funcionários e cadastro de funcionário.
- `/employee/:id`: Detalhes de um funcionário específico além de exlusão e a possibilidade de editar as informações.
- `/login`: Necessário para acessar as outras rotas.
- `/register`: Permite cadastrar um novo usuário para acessar o projeto.

## Estilização

O projeto utiliza folhas de estilo em LESS para estilizar os componentes.

## Back end do projeto
👉 [Link do repositório](https://github.com/felstylex/Java-RhControl)
