'use strict'

const db = require('../config') //reference of dbconnection.js

const ubicacion = {
    getAllUbicacion: function(callback) {
        return db.query("SELECT * FROM autoparking.ubicacion", callback)
    },
    getUbicacionById: function(ubicacionId, callback) {
        return db.query("SELECT * FROM ubicacion WHERE id_ubicacion = ?", [ubicacionId], callback)
    },
    addUbicacion: function(ubicacion, callback) {

        return db.query("Insert into ubicacion values(?,?,?,?,?)", [ubicacion.id_ubicacion, ubicacion.coordenadas, ubicacion.longitud, ubicacion.latitud. ubicacion.ciudad_idciudad], callback)
    },
    deleteUbicacion: function(ubicacionId, callback) {
        return db.query("DELETE FROM ubicacion WHERE id_ubicacion = ?", [ubicacionId], callback)
    },
    updateUbicacion: function(ubicacionId, ubicacion, callback) {

        return db.query("UPDATE ubicacion SET coordenadas=?, longitud=?, latitud= ?, ciudad_idciudad=?  WHERE id_ubicacion=?", [ubicacion.coordenadas, ubicacion.longitud, ubicacion.latitud, ubicacion.ciudad_idciudad, ubicacionId], callback)
    }
};
module.exports = ubicacion;



// ****************************************//


const ubicacion = require ('./models/ubicacion')


app.get('/api/ubicacion',function (req,res)
{


ubicacion.getAllUbicacion(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });


})

app.get ('/api/ubicacion/:ubicacionId', (req,res) =>
{

ubicacion.getUbicacionById (req.params.paisId, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });


})

app.post ('/api/ubicacion', (req,res) =>
{

ubicacion.addUbicacion(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });

})

app.put ('/api/ubicacion/:id_ubicacion', (req,res) =>
{

ubicacion.updateUbicacion(req.params.id_ubicacion, req.body, function(err, rows) {
       if (err) {
           res.json(err);
       } else {
           res.json(rows);
       }
   });

})

app.delete ('/api/ubicacion/:ubicacionId', (req,res) =>
{

    ubicacion.deleteUbicacion(req.params.ubicacionId, function(err, count) {
           if (err) {
               res.json(err);
           } else {
               res.json(count);
           }
       });
} )
