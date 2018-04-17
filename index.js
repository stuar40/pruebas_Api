
'use strict'

const mongoose= require('mongoose')
const app= require('./app')
const port = process.env.PORT || 3000



//conexion de Base de Datos
mongoose.connect('mongodb://localhost:27017/shop',(err, res) =>
{
  if (err)
  {
return console.log('Error al conectar Base de Datos')
  }
  console.log('Conexion a la Base de Datos Establecida Exitosamente....')

  app.listen(port,() =>
  {
  console.log(`API RESt Corriendo en http://localhost:${port}`)
  })

})
