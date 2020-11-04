const express = require('express');
const ProductController = require('./controller/ProductController');
const routes = express.Router();

routes.get("/products", ProductController.index);

module.exports = routes;
//exportar para usar no Server.JS