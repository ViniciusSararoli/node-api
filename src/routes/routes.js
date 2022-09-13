const routes = require('express').Router();

routes.post("/", (req, res) => res.json({success: true}))

const UserController = require('../controller/UserController');
routes.post("/login", UserController.login)
routes.post("/user", UserController.create)

const ProductController = require('../controller/ProductController')
routes.post("/product", ProductController.create)


module.exports = routes;

/* 
module.exports = app => {

    app.route('/product')
        .post(ProductController.create)
        .get(ProductController.read)

    app.route('/product/:id')
        .put(ProductController.update)
        .delete(ProductController.delete)
        .get(ProductController.readById)
}
 */
