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

//Controle dpara recebimento de dados
const body = require("body-parser")
app.use(body.urlencoded ({extended: false})) //Apenas dados simples
app.use(body.json()) // Apenas json para entrada no body

//Permiter que outros enderecos acesse a api
const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*") // https://api.cartorionobrasil.com.br/ Caso fosse em produção colocaria no lougar do * 
  res.header(
    "Access-Control-Allow-Header", 
    "Origin,X-Requested-With,Content-Type, Accept, Authorization") // Oque aceitará de cabeçalho 

  if(req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Method", "GET, POST, DELETE, PATCH, PUT") 

    return res.status(200).send({})

  }
  next()
})

/* 
const requireDir = require("require-dir");
requireDir("./src/model");// Depois da conexão, pois precisa já estar conectado
Utilizar biblioteca (npm install require-dir) para fazer o require em todos os arquivos dos 'Models' automaticamente
*/


