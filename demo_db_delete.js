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

var sql = "DELETE FROM customers WHERE name = 'Matthew'";

connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);
    console.log("Number of records deleted: " + result.affectedRows);
});

connection.end(console.log("Connection closed!"))
