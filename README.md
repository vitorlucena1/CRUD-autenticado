# CRUD Autenticado

Este é um projeto backend desenvolvido com **Node.js**, **Express** e **MongoDB**, que implementa autenticação de usuários utilizando **JWT (JSON Web Token)**. O projeto segue a arquitetura de camadas para organização do código.

---

## 📂 Estrutura do Projeto

```
CRUD-autenticado/
├── api/
│   ├── controller/         # Controladores das rotas
│   ├── database/           # Configuração do banco de dados
│   ├── middleware/         # Middlewares (ex.: autenticação JWT)
│   ├── models/             # Modelos do banco de dados (ex.: User, Contact)
│   ├── routes/             # Definição das rotas
│   ├── services/           # Lógica de negócios
│   └── index.js            # Arquivo principal do servidor
├── requests/               # Exemplos de requisições (local e produção)
├── .env.example            # Exemplo de variáveis de ambiente
├── docker-compose.yml      # Configuração do Docker Compose
├── README.md               # Documentação do projeto
└── package.json            # Dependências e scripts do projeto
```

---

## 📹 Demonstração

Aqui está um vídeo explicativo sobre o projeto:

[Demonstração do Projeto](./Demonstração.mp4)

---

## 🚀 Funcionalidades

### Rotas Públicas
- **POST /users/register**: Cria um novo usuário no sistema.
- **POST /users/login**: Autentica um usuário e gera um token JWT.

### Rotas Protegidas (Requer Token JWT)
- **POST /contacts**: Cria um novo contato.
- **GET /contacts**: Lista todos os contatos do usuário autenticado.
- **GET /contacts/:id**: Retorna os detalhes de um contato específico.
- **PUT /contacts/:id**: Atualiza completamente um contato.
- **PATCH /contacts/:id**: Atualiza parcialmente um contato.
- **DELETE /contacts/:id**: Remove um contato.

---

## 🛠️ Requisitos

### Model de Usuário
O modelo `User` contém os seguintes campos:
- **username**: Nome do usuário (obrigatório e único).
- **email**: Email do usuário (obrigatório e único).
- **password**: Senha do usuário (obrigatória, armazenada como hash).

### Model de Contato
O modelo `Contact` contém os seguintes campos:
- **userId**: ID do usuário que criou o contato (obrigatório).
- **name**: Nome do contato (obrigatório).
- **email**: Email do contato (opcional).
- **phone**: Telefone do contato (obrigatório e único).
- **address**: Endereço do contato (opcional).
- **notes**: Notas adicionais sobre o contato (opcional).

### Validações
- **Email**: Deve ser único e ter um formato válido.
- **Senha**: Deve ter pelo menos 6 caracteres.
- **Token JWT**: Deve ser enviado no cabeçalho `Authorization` para acessar rotas protegidas.

---

## 🧑‍💻 Como Executar o Projeto

### 1. Configurar Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```properties
PORT=3000
MONGO_URI=mongodb://root:example@localhost:27017/
MONGO_DB_NAME=example
JWT_SECRET=sua_chave_secreta_aqui
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Executar o Servidor
```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

---

## 🐳 Usando Docker

### Subir o MongoDB com Docker Compose
Se você quiser usar o MongoDB localmente com Docker, execute:
```bash
docker-compose up -d
```

---

## 📋 Exemplos de Requisições

### Registro de Usuário (POST /users/register)
```bash
curl --request POST \
  --url http://localhost:3000/users/register \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "joaosilva",
    "email": "joao.silva@example.com",
    "password": "securepassword123"
  }'
```

### Login de Usuário (POST /users/login)
```bash
curl --request POST \
  --url http://localhost:3000/users/login \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "joao.silva@example.com",
    "password": "securepassword123"
  }'
```

### Criação de Contato (POST /contacts)
```bash
curl --request POST \
  --url http://localhost:3000/contacts \
  --header 'Authorization: Bearer <TOKEN>' \
  --header 'Content-Type: application/json' \
  --data '{
    "name": "Maria Oliveira",
    "phone": "+5511987654321",
    "email": "maria.oliveira@example.com",
    "address": "Rua das Flores, 456, Rio de Janeiro, RJ",
    "notes": "Cliente VIP"
  }'
```

---

## 🌐 Deploy em Produção

O projeto está configurado para ser implantado no **Vercel**. Certifique-se de configurar as variáveis de ambiente no painel do Vercel.

### URL de Produção
```
https://crud-autenticado.vercel.app
```

---

## 🛡️ Segurança

- **Senhas**: Armazenadas como hash utilizando `bcrypt`.
- **Tokens JWT**: Expiram após 1 hora e são validados em todas as rotas protegidas.
- **Variáveis Sensíveis**: Armazenadas em variáveis de ambiente.

---

## ✨ Autor

Desenvolvido por [Vitor Lucena](https://github.com/vitorlucena1).