const express = require("express")
exports.calcular = async(req, res) => {

    const tipoCertidao = req.params.id

    switch (tipoCertidao) {
        case "pesquisa-bens":
            async function call() {
                const web = require('./WebserverCartorio')
                const axios = require("axios")           
                const url = "http://api.cartorionobrasil.com.br/"
                let tipo = req.params.id + "/"
                let state = req.params.uf + "/"
                let city = req.params.city + "/"
                let url_cart = req.params.cartorio + "/"
console.log(url)
console.log(tipo)
console.log(state)
console.log(city)
console.log(url_cart)
                const response = await axios.get(`${url}${tipo}${state}${city}${url_cart}`)

                return res.status(200).send(response.data)
            }
            call()
            break;
    
        default:
            res.status(500).send([{resposta: 'Ok!',message: 'Tipo de certidão não encontrada!'}])
            break;
    }
}