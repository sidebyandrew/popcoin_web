# 1. prisma generate

Prisma Client 是一个自动生成的数据库客户端，专为您的数据库架构量身定制。默认情况下，Prisma 客户端生成到
node_modules/.prisma/client 文件夹中，但您可以指定自定义位置。

> 重要提示：每次对 Prisma 架构进行更改后，您都需要重新运行 prisma generate 命令，以更新生成的 Prisma 客户端代码。

> 生成的文件路径是 ：_web/node_modules/.pnpm/@prisma+client@5.4.2_prisma@5.4.2/node_modules/@prisma/client

## 1.1 配置

先配置schema和.env，因为在安装 @prisma/client 时，会自动执行一次 prisma generate

```
    #File: prisma / schema.prisma
    generator client{
    provider = "prisma-client-js"
    }
```

## 1.2 安装（先配置再安装）

```bash
# NPM 
npm install @prisma/client
```

## 1.3 生成客户端

```bash
prisma generate
```

## 1.4 使用客户端

```javascript
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB
```

# 2. npx prisma db push

将本地的 prisma/schema.prisma 变更，‘应用’到数据库中。

npx prisma db push

# npx prisma db pull

将直接修改[create | alter table]数据库的结果，同步到prisma/schema.prisma

npx prisma db pull
https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/introspection-typescript-postgresql

# npx prisma db seed

根据 prisma/seed.ts 的代码执行CRUD去初始化数据库

# npx prisma studio

打开一个网页版的数据库编辑器
