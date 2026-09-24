# Gerenciador de Notas - API Backend (Express.js)

Este projeto consiste em uma API RESTful desenvolvida com **Node.js** e **Express.js** para o gerenciamento de notas (CRUD: Create, Read, Update, Delete). A aplicação utiliza um arquivo JSON (`data.json`) como estratégia de armazenamento local para persistência dos dados, conforme as orientações da disciplina de Frameworks Front-end do SENAI.

## 🚀 Funcionalidades da API

A API expõe os seguintes endpoints para comunicação com o front-end:

* `GET /api/notes` - Retorna a lista com todas as notas cadastradas.
* `POST /api/notes` - Cria uma nova nota (exige os campos `titulo` e `texto`).
* `PUT /api/notes/:id` - Atualiza uma nota existente com base no ID informado.
* `DELETE /api/notes/:id` - Remove uma nota específica pelo ID.

---

## 🛠️ Tecnologias Utilizadas

* [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
* [Express.js](https://expressjs.com/) - Framework web minimalista para Node.js.
* **CORS** - Middleware para liberação de acesso externo entre domínios.
* **Body-Parser** - Middleware para leitura de dados JSON no corpo das requisições.
* **File System (fs)** - Módulo nativo do Node.js para leitura e escrita no arquivo `data.json`.

---

## 📥 Como Instalar e Executar o Projeto

1. Certifique-se de ter o **Node.js** instalado em sua máquina.
2. Clone este repositório ou navegue até a pasta do projeto (`projeto-notas` / `Frontend_Frameworks_Aula05`).
3. Instale as dependências executando o comando no terminal:
   ```bash
   npm install express cors body-parser
   ```
4. Certifique-se de que o arquivo `data.json` existe na raiz do projeto com um array inicial (`[]`).
5. Inicie o servidor localmente:
   ```bash
   node server.js
   ```
6. O servidor estará rodando e acessível em: `http://localhost:3000`.

---

## ☁️ Deploy (Render)

O projeto está preparado para hospedagem em nuvem na plataforma **Render**:
* **Build Command:** `node` (ou vazio)
* **Start Command:** `node server.js`

---

## 👤 Autor
Desenvolvido por **Bianca Cirilo** como parte das atividades práticas da disciplina de Frameworks Front-end (SENAI).