## Boilerplate com Swagger, Prisma, JWT e ZOD

### Configuração do arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

JWT_SECRET='secret'

```

### Comandos para inicialização do Prisma

1. Inicialize o Prisma:
  ```bash
  npx prisma init
  ```

2. Gere os arquivos necessários:
  ```bash
  npx prisma generate
  ```
