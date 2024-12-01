var mysql = require('mysql2');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'Vs@257203',
    database : 'scrm_api'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('db connected')
    }
});

module.exports = connection;