const connection = require("../database/connection")
const express = require("express")

/* const responseModel = {
    success: false,
    data: [],
    error: []
  } */

class WebserverCartorio {
    constructor() {
        this.WebserverCartorio = express()
    }
    call = async (req,res) => {
        // const responseModel = {...responseModel}
        const web = require('./WebserverCartorio')
        const axios = require("axios")    
        
        const url = "http://api.cartorionobrasil.com.br"
        const cartorio = req.originalUrl
        console.log(cartorio)
        /* 
        let tipo = req.params.state + "/"
        let city = req.params.city + "/"
        console.log(tipo)
        console.log(state)
        console.log(city)
        */
       console.log(url)
       console.log(cartorio)
       const response = await axios.get(`${url}${cartorio}`)
       //console.log(response.data) 
    
        return res.status(200).send(response.data)
    }
    
  }
  
  module.exports = new WebserverCartorio()
  
