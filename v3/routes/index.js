'use strict'

const express = require('express')
const api = express.Router()
const datoControllers = require ('../controllers/dato')

//METODO para lA table datos

api.get('/dato',datoControllers.getDatos)

api.get ('/dato/:datoId', datoControllers.getDato)

api.post ('/dato', datoControllers.postDato)

api.put ('/dato/:id_datos', datoControllers.updateDato)

api.delete ('/dato/:datoId', datoControllers.deleteDato)





module.exports = api
