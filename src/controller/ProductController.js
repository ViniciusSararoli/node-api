const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
  async index(req,res){
    const products = await Product.find(); //podendo colocar verificação no find, como por exemplo "Wherwe"
    //"await" - Faz com que a proxima linha só execute depois de localizar os registro no Banco de dados
    return res.json(products);
  },

};