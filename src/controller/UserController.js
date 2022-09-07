const connection = require("../database/connerction")

const responseModel = {
  success: false,
  data: [],
  error: []
}

module.exports = {

  async create(req, res) {
    const response = {...responseModel}

    const { username, password, email} = req.body;
    
    const [,affectRows] = await connection.query(`
      insert into users values('','${username}','${email}','${password}')
    `)

    response.success = affectRows > 0 

    return res.json(response)
  },
  async login(req, res) {
    const response = {...responseModel}

    const { username, password, email} = req.body;
    
    const [,data] = await connection.query(`
      select * from users where email='${email}' and password='${password}'
    `)

    console.log(data)
    return res.json(response)
  }
}