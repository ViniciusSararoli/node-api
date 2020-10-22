const mongoose = require('mongoose'); //importação do mongoose

//criando variavel
const PRoductSchema = new mongoose.Schema({
  //campos que desejo salvar no bd
  title: {
    type: String, //tipo
    required: true, //obratorio
  },

  description: {
    type: String, //tipo
    required: true, //obratorio
  },

  url: {
    type: String, //tipo
    required: true, //obratorio
  },

  createdAt: {
    type: Date, 
    default: Date.now, // preenche automaticamente com a data atual
  },
});

mongoose.model('product', PRoductSchema); // Codigo apra registrar um MODEL na aplicação


//Necessario dar um require na conecação com o BD