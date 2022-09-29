const routes = require('express').Router();

routes.post("/", (req, res) => res.json({success: true}))

const UserController = require('../controller/UserController');
routes.post("/login", UserController.login)
routes.post("/user", UserController.create)

const ProductController = require('../controller/ProductController')
routes.post("/product", ProductController.create)
routes.get("/product", ProductController.read)

routes.put("/product/:id", ProductController.update)
routes.get("/product/:id", ProductController.readById)
routes.delete("/product/:id", ProductController.delete)

const CalcularController = require('../controller/CalcularController')
routes.get("/calcular/:tipo_certidao/", CalcularController.calcular)

const WebserverCartorio = require('../controller/WebserverCartorio')
routes.get("/cartorio/:url_cart/", WebserverCartorio.call)
routes.get("/:tipo_certidao/", WebserverCartorio.call)
routes.get("/:tipo_certidao/:estado/", WebserverCartorio.call)
routes.get("/:tipo_certidao/:estado/:cidade/", WebserverCartorio.call)
routes.get("/:tipo_certidao/:estado/:cidade/:cartorio/", WebserverCartorio.call)

module.exports = routes;

