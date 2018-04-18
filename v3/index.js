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
let datoId = req.params.datoId
connection.query("SELECT * FROM datos WHERE id_datos = ?",datoId,function (error, results, fields) {
  if (error) throw error
  return res.send ({error: false, data: results[0], message: 'Search List' })
})
})

app.post ('/api/dato', (req,res) =>
{
  console.log(req.body)
  let id_datos = req.body.id_datos
  let Nombre = req.body.Nombre
  let Apellido = req.body.Apellido
  let Direccion = req.body.Direccion
  let Correo = req.body.Correo

  if (!id_datos) {
       return res.status(400).send({ error:true, message: 'Please agregaa  dato' })
            }
// SET ?,?,?,?,? ",{id_datos:id_datos, Nombre:Nombre, Apellido:Apellido, Direccion:Direccion, Correo:Correo}
//
    connection.query ('INSERT INTO  datos (id_datos, Nombre, Apellido, Direccion, Correo) VALUES ("' +id_datos+ '","' +Nombre+ '","' +Apellido+ '","' +Direccion+ '","' +Correo+ '")', function (error, results, fields) {
      if(error) throw error
      return res.send({error: false, data: results, message: 'New task has been created successfully.'})
})
})

app.put ('/api/dato/:datoId', (req,res) =>
{

} )

app.delete ('/api/dato/:datoId', (req,res) =>
{
  let datoId = req.params.datoId
  connection.query('DELETE FROM datos WHERE id_datos = ?', [datoId], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'se ha eliminado con exito' });
    })
} )

app.listen(port,() =>
{
  console.log(`API Rest Corriendo en  http://localhost:${port}`)
})

module.exports = app;
