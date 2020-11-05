//Carregar o HTML automaticamente (npm install -D nodemon)
// Alteração executada manualmente (node server.js)
// Alterações serem rodadas automaticamente (npm run dev)
//Para conectar o codigo com o MongoDB(npm install mongoose)
//Executa o mongoDB (mongod)
// Instalação  de paginação (npm install mongoose-paginate)
// Instalação de CORS para permitira acesso externo da API (npm install cors)

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Inicio do app
const app = express();
// Permitir que evie dados para a aplicação no formato de JSON
app.use(express.json());
//Permiter que outros enderecos acesse a api
app.use(cors());

//Conexão com o banco de dados
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  { useNewUrlParser: true }
);

requireDir("./src/model");// Depois da conexão, pois precisa já estar conectado
//Utilizar biblioteca (npm install require-dir) para fazer o require em todos os arquivos dos 'Models' automaticamente

//rota
app.use('/api', require("./src/routes/routes"));

app.listen(3001);

