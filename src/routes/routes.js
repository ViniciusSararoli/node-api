const routes = require('express').Router();

routes.post("/", (req, res) => res.json({success: true}))

//const ProductController = require('../controller/ProductController');
const UserController = require('../controller/UserController');
routes.post("/login", UserController.login)
routes.post("/create", UserController.create)

module.exports = routes;

/* 
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.create);
routes.put("/products/:id",ProductController.update);
routes.delete("/products/:id", ProductController.delete); 
*/

//exportar para usar no Server.JS