const Calcular = require('../model/Calcular')
const express = require("express")
const statics = require("../model/Statics")
exports.calcular = async(req, res) => {

    const tipoCertidao = req.params.id

    switch (tipoCertidao) {
        case "pesquisa-bens":
            const valor = statics.pesquisa_bens()
            res.status(500).send([{resposta: 'Ok!',valor: valor}])
            break;
    
        default:
            res.status(500).send([{resposta: 'Ok!',message: 'Tipo de certidão não encontrada!'}])
            break;
    }
}