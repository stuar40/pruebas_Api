'use strict'
const express = require ('express')
const app  = express()
const bodyParser= require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded ({extended:false}))
app.use(bodyParser.json())


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





app.get('/api/dato',function (req,res)
{
  connection.query('SELECT * FROM autoparking.datos', function(error, results, fields)
{
  if (error) throw error
  return res.send ({erro: false, data: results, message: 'Todos listen'})

})
})

app.get ('/api/dato/:datoId', (req,res) =>
{

} )

app.post ('/api/dato', (req,res) =>
{
  console.log(req.body)
  res.status(200).send({message: 'Dato recibido correctamente'})
} )

app.put ('/api/dato/:datoId', (req,res) =>
{

} )

app.delete ('/api/dato/:datoId', (req,res) =>
{

} )

app.listen(port,() =>
{
  console.log(`API Rest Corriendo en  http://localhost:${port}`)
})

module.exports = app;
