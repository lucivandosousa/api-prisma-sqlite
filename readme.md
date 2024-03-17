# API de produtos usando Prisma e SQLite

Esta é uma API construída usando o framework Express.js para Node.js e Prisma com persistência em um banco relacional SQLite. A API simula operações básicas CRUD (Criar, Ler, Atualizar e Excluir) em um banco relacional.

## Requisitos

- Node.js
- npm (gerenciador de pacotes do Node.js)
- SQLite

## Instalação

### 1. Clone o repositório para sua máquina local:

```
https://github.com/lucivandosousa/api-prisma-sqlite
```
### 2. Navegue até o diretório do projeto

### 3. Instale as dependências necessárias:

```
npm install
```
## Funcionalidades
### 1. Iniciar a API.

Criar um arquivo ".env" na raiz do projeto e adicionar a variável conforme exemplo abaixo:

```
DATABASE_URL="file:./database.sqlite"
```

Para iniciar a API, execute o seguinte comando:

```
npm run dev
```
A API será executada na porta 3000 por padrão, ou na porta especificada pela variável de ambiente PORT.

### 2. Endpoints

 - GET "/" Retorna uma mensagem indicando que a API está funcionando.

 - POST "/products" Adiciona um novo produto à lista de produtos.

 - GET "/products" Retorna a lista completa de produtos.

 - GET "/products/:id" Retorna um produto específico com base no ID fornecido.

 - PUT "/products/:id" Atualiza um produto específico com base no ID fornecido.

 - DELETE "/products/:id" Exclui um produto específico com base no ID fornecido.

### 3. Exemplo de Uso

Para adicionar um novo produto, você pode enviar uma requisição POST com os detalhes do produto no corpo da requisição:

```
{
  "description": "Produto X",
  "price": 10.5,
  "quantity": 100,
}
```
