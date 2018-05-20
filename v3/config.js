const mysql = require('mysql');

const connection = mysql.createConnection(
    {
		 host: 'localhost',
		  user: 'autoparking',
		  password: 'autoparking',
		  database: 'autoparking'
    }
)
module.exports = connection;
