🌵 API Raízes do Nordeste

API REST desenvolvida para a disciplina Projeto Multidisciplinar (Trilha Back-End) do curso de Análise e Desenvolvimento de Sistemas da UNINTER.
O sistema foi projetado para atender às necessidades operacionais da rede fictícia de restaurantes Raízes do Nordeste, centralizando pedidos provenientes de múltiplos canais de atendimento e oferecendo recursos para gestão de produtos, estoque, pagamentos e fidelização de clientes.

📋 Sobre o Projeto

Em operações modernas de alimentação, os pedidos podem ser originados por diferentes canais, como aplicativos, totens de autoatendimento, balcões físicos e plataformas web.

Esta API atua como uma camada centralizadora responsável por:
Receber pedidos de diferentes canais;
Gerenciar produtos e estoque;
Validar autenticação e autorização de usuários;
Controlar o ciclo de vida dos pedidos;
Simular integrações de pagamento;
Gerenciar promoções e programas de fidelidade;
Registrar operações para auditoria.
A aplicação foi desenvolvida seguindo os princípios da arquitetura REST e boas práticas de desenvolvimento back-end utilizando TypeScript.

🚀 Tecnologias Utilizadas

Back-End

Node.js

TypeScript

Express.js

PostgreSQL

Prisma ORM

JWT (JSON Web Token)

BCrypt

Swagger / OpenAPI

Postman

🏗️ Arquitetura da Solução

A aplicação foi estruturada utilizando separação de responsabilidades para facilitar manutenção, escalabilidade e organização do código.

src/
│
├── controllers/
├── services/
├── repositories/
├── middlewares/
├── routes/
├── prisma/
├── utils/
└── types/
Camadas

Camada	Responsabilidade
Controllers: Recebem e tratam as requisições HTTP

Services: Implementam as regras de negócio

Repositories: Realizam acesso aos dados

Middlewares:	Autenticação, autorização e validações

Routes: Definição dos endpoints

Prisma: Integração com o banco PostgreSQL

⚙️ Pré-Requisitos

Certifique-se de possuir instalado:

Node.js 18 ou superior;

PostgreSQL;

npm

Verifique as versões:
node --version

npm --version

📥 Instalação

1. Clone o repositório
git clone https://github.com/andrezampar1-ops/raizes-do-nordeste---back--end.git

3. Acesse o diretório:
cd Raizes-do-nordeste---back--end

5. Instale as dependências
npm install

🔐 Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com base no .env.example.

DATABASE_URL="postgresql://usuario:senha@localhost:5432/raizes_nordeste"

JWT_SECRET="chave_secreta"

PORT=3000

🗄️ Configuração do Banco de Dados

Executar migrações

npx prisma migrate dev

Sincronizar estrutura do banco

npx prisma db push

▶️ Executando a Aplicação

Inicie o ambiente de desenvolvimento:

npm run dev

A API ficará disponível em:

http://localhost:3000

📚 Documentação da API

A documentação interativa dos endpoints está disponível através do Swagger.

Após iniciar o projeto, acesse:

http://localhost:3000/api-docs

Com ela é possível:

Consultar endpoints disponíveis;

Validar parâmetros;

Testar requisições;

Visualizar modelos de resposta.

✅ Testes com Postman

A collection utilizada durante o desenvolvimento encontra-se na raiz do projeto:

Postman_Collection_Raizes_Nordeste.json

Como executar

Abra o Postman;

Importe a collection;

Execute a rota:

POST /auth/login

Copie o token JWT retornado;

Nas demais requisições configure:

Authorization → Bearer Token

Cole o token obtido no login.

📦 Origem dos Pedidos

O sistema permite registrar pedidos oriundos de diferentes canais:

APP

WEB

BALCÃO

TOTEM

Essa informação é armazenada junto ao pedido, possibilitando futuras análises operacionais.

🔒 Autenticação

A autenticação é baseada em JWT (JSON Web Token).

Após um login bem-sucedido:

O usuário recebe um token;

O token deve ser enviado no cabeçalho das requisições protegidas.

Exemplo:

Authorization: Bearer seu_token

🎯 Funcionalidades Implementadas

✅ Cadastro e autenticação de usuários

✅ Geração de token JWT

✅ Criptografia de senhas com BCrypt

✅ Gestão de produtos

✅ Controle de estoque

✅ Criação e gerenciamento de pedidos

✅ Simulação de pagamentos

✅ Programa de fidelidade

✅ Promoções

✅ Registro de auditoria

✅ Documentação Swagger
