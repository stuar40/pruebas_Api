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





const paisController = require('../controllers/pais')

api.get('/pais',paisController.getPaises)
api.get ('/pais/:paisId', paisController.getPais)
api.post ('/pais', paisController.postPais)
api.put ('/pais/:id_pais', paisController.updatePais)
api.delete ('/pais/:paisId',paisController.deletePais)





module.exports = api
