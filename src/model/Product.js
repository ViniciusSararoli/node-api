// const { poolPromise } = require("../database/connection")
const connection = require("../database/connection")

const responseModel = {
  success: false,
  data: [],
  error: []
}

exports.create = async (date,req,res) => {
  const response = {...responseModel}

  const [,affectRows] = await connection.query(`INSERT INTO product (name,url,value,date)
    VALUES ('${date.name}','${date.url}','${date.value}',NOW())`)

  response.success = affectRows > 0 

  return response
}

exports.read = async () => {
  const response = {...responseModel}
  const [,data] = await connection.query(`
  SELECT * FROM product`)

  return data;
}

exports.update = async (id, date) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`UPDATE product SET
                name = '${date[0].name}'                    
                url = '${date[0].url}'                    
                value = '${date[0].value}'                    
                WHERE idproduct = ${id}`);

    return rs.rowsAffected;
}

exports.delete = async (id) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`DELETE FROM product
                WHERE idproduct = ${id}`)

    return rs.rowsAffected;
}

exports.readById = async(id) =>{
    const pool = await poolPromise;
    const rs = await pool
            .request()
            .query(`SELECT *
                    FROM product 
                    WHERE idproduct = ${id} `);
    
            return rs.recordset;
}