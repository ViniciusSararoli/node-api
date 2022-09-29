const express = require("express");

exports.calcular = async(req, res) => {

    const tipoCertidao = req.params.tipo_certidao

    switch (tipoCertidao) {
        case "pesquisa-bens":
            const statics = require("./Statics");
            let valor = statics.pesquisa_bens()

            console.log(valor)
            res.status(500).send([{resposta: 'Ok',valor: valor}])
            break;
    
        default:
            res.status(500).send([{resposta: 'Error',message: 'Tipo de certidão não encontrada!'}])
            break;
    }
}