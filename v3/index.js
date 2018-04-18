'use strict'
const express = require ('express')
const app  = express()
const bodyParser= require('body-parser')
const port = process.env.PORT || 3000
const conect = require ('./config')
app.use(bodyParser.urlencoded ({extended:false}))
app.use(bodyParser.json())

const dato = require ('./models/dato')

//importando controllers

const datoControllers = require ('./controllers/dato')

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



//METODO para lA table datos

app.get('/api/dato',datoControllers.getDatos)

app.get ('/api/dato/:datoId', datoControllers.getDato)

app.post ('/api/dato', datoControllers.postDato)

app.put ('/api/dato/:id_datos', datoControllers.updateDato)

app.delete ('/api/dato/:datoId', datoControllers.deleteDato)



app.listen(port,() =>
{
  console.log(`API Rest Corriendo en  http://localhost:${port}`)
})

module.exports = app;
