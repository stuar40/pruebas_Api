const mysql = require('mysql');

const connection = mysql.createConnection(
    {
		 host: 'localhost',
		  user: 'autoparking@2018',
		  password: 'autoparking@2018',
		  database: 'autoparking'
    }
)
module.exports = connection;
