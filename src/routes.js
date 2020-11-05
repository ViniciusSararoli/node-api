const express = require('express');
const ProductController = require('./controller/ProductController');
const routes = express.Router();

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id",ProductController.update);
routes.delete("/products/:id", ProductController.delete);

module.exports = routes;
//exportar para usar no Server.JS