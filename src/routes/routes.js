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

const WebserverCartorio = require('../controller/WebserverCartorio')
routes.get("/cartorio/:cartorio/", WebserverCartorio.get)
routes.get("/pesquisa-bens/", WebserverCartorio.get)
routes.get("/pesquisa-bens/:state", WebserverCartorio.get)
routes.get("/pesquisa-bens/:state/:city/", WebserverCartorio.get)
routes.get("/pesquisa-bens/:state/:city/:cartorio/", WebserverCartorio.get)


module.exports = routes;

