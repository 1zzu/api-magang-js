let mysql = require('mysql');
let env = require('./env');

let connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
});

connection.connect(function(error) {
 if(error){
     return console.error('error: '+ error.message);
 }
 console.log('connected to the MySQL server.');
})

module.exports = connection;