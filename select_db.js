var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1212',
    database : 'mydb'
});

connection.connect(function (err, result, fields) {
    if (err) throw err;
    console.log("Connected!")
});

connection.query("SELECT * FROM customers", function (err, result, fields) {
    console.log(result);
});

connection.end(console.log("Connection closed!"));