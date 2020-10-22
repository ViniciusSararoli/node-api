//Carregar o HTML automaticamente (npm install -D nodemon)
// Alteração executada manualmente (node server.js)
// Alterações serem rodadas automaticamente (npm run dev)
//Para conectar o codigo com o MongoDB(npm install mongoose)

const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Inicio do app
const app = express();
//Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

requireDir('./src/models');// Depois da conexão, pois precisa já estar conectado
//Utilizar biblioteca (npm install require-dir) para fazer o require em todos os arquivos dos 'Models' automaticamente

// Testar funcionalidade
const Product = mongoose.model('Product');

//ciranção da primeira rota
app.get('/', function(req, res) {
  
  // Testar funcionalidade
  Product.create ({
    title: 'React.JS',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native',
  });
  
  return res.send("Hello React.JS");
});

app.listen(3001); 

