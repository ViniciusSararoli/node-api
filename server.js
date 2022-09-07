//Carregar o HTML automaticamente (npm install -D nodemon)
// Alteração executada manualmente (node server.js)
// Alterações serem rodadas automaticamente (npm run dev)
//Para conectar o codigo com o MongoDB(npm install mongoose)
//Executa o mongoDB (mongod)
// Instalação  de paginação (npm install mongoose-paginate)
// Instalação de CORS para permitira acesso externo da API (npm install cors)
// Istalar SEQUILIZE (yarn add sequelize)
// Iniciar SEQUILIZE (npx sequelize-cli init)
// Criar pasta migrations com  SEQUILIZE para facilitar na criação de tabelas (npx sequelize-cli migration:generate --name create-services)
// Criar trabela no banco de dados (npx sequelize-cli db:migrate)
// Encerrar processo  npx kill-port --port http://localhost:3030

const express = require("express")
const app = express()
require("dotenv").config()

//******* Permitir que evie dados para a aplicação no formato de JSON ******* 
app.use(express.json());

// **************************************************************************
const protocol = process.env.PROTOCOL || "http"
const ip = require("ip").address()
const port = process.env.PORT || 3030

//rota
const routes = require("./src/routes/routes")
app.use(routes); 
//app.listen(3001);
app.listen(port, () => console.log(`Server started  in http://localhost:${port} or ${protocol}://${ip}:${port}`));

/* 

/* 
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
 */

//Inicio do app

//Permiter que outros enderecos acesse a api
//app.use(cors());

//Conexão com o banco de dados
/* 
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  { useNewUrlParser: true }
); 
*/

//requireDir("./src/model");// Depois da conexão, pois precisa já estar conectado
//Utilizar biblioteca (npm install require-dir) para fazer o require em todos os arquivos dos 'Models' automaticamente



