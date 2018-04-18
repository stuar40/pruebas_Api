
'use strict'

const mongoose= require('mongoose')
const app= require('./app')
const config =require('./config')



//conexion de Base de Datos
mongoose.connect(config.db ,(err, res) =>
{
  if (err)
  {
return console.log('Error al conectar Base de Datos')
  }
  console.log('Conexion a la Base de Datos Establecida Exitosamente....')

  app.listen(config.port,() =>
  {
  console.log(`API RESt Corriendo en http://localhost:${config.port}`)
  })

})
