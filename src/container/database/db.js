import mysql from 'mysql'

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sam998525",
    database: "familymart",
});

export default connection;