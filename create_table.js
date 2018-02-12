var mysql = require('mysql');

var connection = mysql.createConnection({
    host     :'localhost',
    user     :'root',
    password :'1212',
    database :'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

var sql = "CREATE TABLE customers (name VARCHAR(255), surname VARCHAR(255))";

connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
});

connection.end(console.log("Connection closed!"));