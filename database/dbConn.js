const mysql = require("mysql")
const dotenv = require("dotenv")

dotenv.config()

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.database,
    port:process.env.DB_PORT
})

connection.connect((error) => {

    if (error) {
        console.log(error.message);
    } else {
        console.log("Database connection was successful.");
    }
})

module.exports = connection