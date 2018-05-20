'use strict'
const port = process.env.PORT || 3000
const conect = require ('./config')
const dato = require ('./models/dato')

const app = require ('./app')



//llamamos al paquete mysql que hemos instalado
const mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
    {
		 host: 'localhost',
		  user: 'autoparking',
		  password: 'autoparking',
		  database: 'autoparking'
    }
);
connection.connect()



app.listen(port,() =>
{
  console.log(`API Rest Corriendo en  http://localhost:${port}`)
})

module.exports = app;
