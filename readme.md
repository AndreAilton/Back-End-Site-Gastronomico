# 🍴 Back-End para Site de Restaurante

Este repositório contém o código do **back-end** de um site para um restaurante. Foi desenvolvido para fins de estudo, utilizando tecnologias modernas, como **Node.js**, **Express**, **MongoDB**, e implementando funcionalidades de autenticação com **JSON Web Token (JWT)** e criptografia de senhas com **bcrypt**.

---

## 📁 Estrutura do Projeto

```plaintext
src/
  ├── config/        # Configurações de conexão e variáveis de ambiente
  ├── controllers/   # Lógica de controle para manipulação de dados
  ├── middlewares/   # Middlewares para validação e autenticação
  ├── models/        # Modelos e esquemas do MongoDB (Mongoose)
  ├── routes/        # Definição de rotas da aplicação
  └── routes.js      # Arquivo de roteamento principal
server.js             # Ponto de entrada principal da aplicação
```

---

## 🛠 Tecnologias Utilizadas

### **1. Node.js**
- **Descrição:** Ambiente de execução JavaScript no lado do servidor.
- **Uso no projeto:** Base para execução do servidor e integração com outras tecnologias.

### **2. Express**
- **Descrição:** Framework minimalista para criação de servidores em Node.js.
- **Uso no projeto:** Configuração de rotas, middlewares e estruturação do servidor.

### **3. MongoDB**
- **Descrição:** Banco de dados NoSQL orientado a documentos.
- **Uso no projeto:** Armazenamento de informações como usuários, pedidos e cardápio.

### **4. Mongoose**
- **Descrição:** Biblioteca ODM (Object Data Modeling) para MongoDB.
- **Uso no projeto:** Definição de esquemas e modelos para as entidades da aplicação.

### **5. dotenv**
- **Descrição:** Gerenciamento de variáveis de ambiente.
- **Uso no projeto:** Armazenar credenciais sensíveis, como `PORT` e URI de conexão do MongoDB, no arquivo `.env`.

### **6. cors**
- **Descrição:** Middleware para habilitar o compartilhamento de recursos entre diferentes origens (Cross-Origin Resource Sharing).
- **Uso no projeto:** Permitir que a API seja acessada por diferentes domínios.

### **7. bcrypt**
- **Descrição:** Biblioteca para criptografia de senhas.
- **Uso no projeto:** Criptografar senhas antes de armazená-las no banco de dados e validar o login de usuários.

### **8. JSON Web Token (JWT)**
- **Descrição:** Padrão para autenticação baseada em tokens.
- **Uso no projeto:** Gerar tokens para autenticar usuários e proteger rotas da API.

---

## 📂 Detalhes dos Diretórios

### **1. src/config**
- Conexão com o MongoDB (`Connect.js`).
- Carregamento de variáveis de ambiente.

### **2. src/controllers**
- **Controladores** responsáveis pela lógica do sistema:
  - Autenticação e gerenciamento de usuários.
  - CRUD de itens no cardápio.
  - Processamento de pedidos.

### **3. src/middlewares**
- Contém middlewares personalizados, como:
  - Validação de tokens JWT para proteger rotas.
  - Validações de dados de entrada.

### **4. src/models**
- Modelos que representam a estrutura dos dados no MongoDB:
  - Usuários: com campos para nome, email, senha (criptografada), etc.
  - Itens do cardápio: com nome, descrição, preço, etc.
  - Pedidos: com informações do cliente e itens escolhidos.

### **5. src/routes**
- Definição de rotas, agrupadas de acordo com funcionalidades:
  - Rotas de autenticação (`/auth`).
  - Rotas de gerenciamento do cardápio (`/menu`).
  - Rotas de pedidos (`/orders`).

---

## 🔒 Autenticação

### **1. Registro de Usuário**
- As senhas são criptografadas com **bcrypt** antes de serem armazenadas no banco.
- Exemplo de fluxo:
  - O usuário fornece nome, email e senha.
  - A senha é criptografada.
  - O usuário é salvo no banco de dados.

### **2. Login**
- O usuário fornece email e senha.
- A senha enviada é comparada com a senha criptografada no banco usando **bcrypt**.
- Se válido, é gerado um **JSON Web Token (JWT)** com tempo de expiração.

### **3. Proteção de Rotas**
- Algumas rotas exigem um token JWT válido para serem acessadas.
- Middleware verifica a presença e validade do token antes de permitir o acesso.

---

## 🚀 Como Rodar o Projeto

### **Pré-requisitos**
- Node.js (versão 16 ou superior)
- MongoDB instalado ou uma instância em nuvem (ex.: MongoDB Atlas)
- Criar um arquivo `.env` na raiz com as seguintes variáveis:
  ```env
  PORT=3000
  MONGO_URI=sua_uri_do_mongodb
  JWT_SECRET=sua_chave_secreta
  ```

### **Passo a Passo**
1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor:
   ```bash
   npm start
   ```

3. Acesse a API em:  
   [http://localhost:3000](http://localhost:3000)

---

## 📚 Funcionalidades da API

- **Autenticação de Usuários:**
  - Registro e login com criptografia de senha.
  - Geração de tokens JWT.
- **Gerenciamento do Cardápio:**
  - Adicionar, editar e listar itens.
- **Processamento de Pedidos:**
  - Registrar pedidos feitos por clientes.
  - Listar pedidos para acompanhamento.

---

## 📝 Observações

Este projeto foi desenvolvido para fins de aprendizado e não deve ser utilizado em produção sem ajustes adicionais.

---

## 🛡️ Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
```

Se precisar de algo mais, como incluir exemplos de rotas ou mais explicações, é só avisar! 😊