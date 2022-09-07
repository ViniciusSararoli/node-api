const Sequelize = require("sequelize")

const database = process.env.DATABASE;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT;
const port_dt = process.env.PORT_DT;

const connection = new Sequelize(database, username, password,  {
    host,
    dialect,
    port_dt
})
module.exports = connection