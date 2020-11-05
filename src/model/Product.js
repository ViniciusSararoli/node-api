const mongoose = require('mongoose'); //importação do mongoose
const mongoosePaginate = require ('mongoose-paginate');

//criando variavel
const ProductSchema = new mongoose.Schema({
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

ProductSchema.plugin(mongoosePaginate);

mongoose.model('product', ProductSchema); // Codigo apra registrar um MODEL na aplicação


//Necessario dar um require na conecação com o BD