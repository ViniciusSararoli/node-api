const connection = require("../database/connection")
const express = require("express")

class Statics {
    constructor() {
        this.statics = express()
      }
    pesquisa_bens() {
        return 9.90;
      }
    
  }
  
  module.exports = new Statics()