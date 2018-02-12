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

var sql = "INSERT INTO customers (name, surname) VALUES ?";
var values = [
    ['Susan', 'Collins'],
    ['Jamie', 'Lannister'],
    ['Tyrion', 'Lannister']
];

connection.query(sql, [values], function(err, result) {
    if (err) throw err;
    console.log(result);
    console.log("Number of records inserted: " + result.affectedRows);
});

connection.end(console.log("Connection closed!"))