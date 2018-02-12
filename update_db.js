var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1212',
    database : 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});

var sql = "UPDATE customers SET surname = 'Fox' WHERE name = 'Jamie'";

connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log("Updated!")
});


connection.end(console.log("connection closed!"));