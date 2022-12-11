const connection = require("../database/connection")
const express = require("express")

class Cliente {
    constructor() {
        this.statics = express()
      }
      create = async (date,req,res) => {
        const response = {...responseModel}
      
        const [,affectRows] = await connection.query(`INSERT INTO product (name,url,value,date)
          VALUES ('${date.name}','${date.url}','${date.value}',NOW())`)
      
        response.success = affectRows > 0 
      
        return response
      }
  }
  
  module.exports = new Statics()