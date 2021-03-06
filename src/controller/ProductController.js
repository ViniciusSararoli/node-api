const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    // listagem
    const products = await Product.paginate({}, { page, limit: 10 }); //podendo colocar verificação no find, como por exemplo "Wherwe"
    //"await" - Faz com que a proxima linha só execute depois de localizar os registro no Banco de dados
    return res.json(products);
  },

  async show(req, res) {
    //consulta
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async create(req, res) {
    //Codigo de criação
    const product = await Product.create(req.body);

    // retornar o produto da base de dados
    return res.json(product);
  },

  //alteração
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id);

    return res.json(product);
  },

  //deletar
  async delete(req, res) {
    //Não pegou o produto, porque vai deletar
    await Product.findOneAndDelete(req.params.id, { new: true });

    //retorna resposta de sucesso sem conteudo
    return res.sent();
  }

};