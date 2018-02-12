var mysql = require('mysql');

var connection = mysql.createConnection({
    host     :'localhost',
    user     :'root',
    password :'1212',
    database :'mydb'
});

connection.connect(console.log("Connected!"));

connection.query("DELETE DATABASE mydb");
console.log("Database deleted!");

connection.end(console.log("Connection closed!"));