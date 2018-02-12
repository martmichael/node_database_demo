var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1212'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});

var dbname = "mydb";

connection.query("CREATE DATABASE " + dbname);
console.log("Database created");

connection.end(console.log("connection closed!"));