'use strict'
const express = require ('express')
const bodyParser= require('body-parser')
const app  = express()
const api = require('./routes')

app.use(bodyParser.urlencoded ({extended:false}))
app.use(bodyParser.json())

//importando controllers

const datoControllers = require ('./controllers/dato')


app.use('/api', api)





module.exports = app
