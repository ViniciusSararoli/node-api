/*Usar c/ try para verificar erros 
return res.status(400).json({ error: err.message });
*/

const connection = require("../database/connection")

const responseModel = {
  success: false,
  data: [],
  error: []
}

module.exports = {

  async create(req, res) {
    const response = {...responseModel}
    const { completename, password, email } = req.body
      
    const [,affectRows] = await connection.query(`
      INSERT INTO  users (idlogin, completename, email, password) VALUES (DEFAULT,'${completename}','${email}','${password}')
    `)

    response.success = affectRows > 0 

    return res.json(response)
  },
  async login(req, res) {
    const response = {...responseModel}

    const { completename, password, email} = req.body;
    
    const [,data] = await connection.query(`
      select us.idlogin,us.completename as name,us.password from users as us where us.email='${email}' and us.password='${password}'
    `)

    console.log(data)

    return res.json(response)
  }
}