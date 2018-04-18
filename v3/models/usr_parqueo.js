'use strict'

const db = require('../config') //reference of dbconnection.js

const parqueo = {
    getAllParqueo: function(callback) {
        return db.query("SELECT * FROM autoparking.usr_parqueo", callback)
    },
    getParqueoById: function(ubicacionId, callback) {
        return db.query("SELECT * FROM usr_parqueo WHERE id_parqueo = ?", [parqueoId], callback)
    },
    addParqueo: function(parqueo, callback) {

        return db.query("Insert into usr_parqueo values(?,?,?,?,?,?,?,?,?)", [usr_parqueo.id_parqueo, usr_parqueo.nombre_parqueo, usr_parqueo.direccion_parqueo, usr_parqueo.lugares_disponibles, usr_parqueo.total_lugares, usr_parqueo.user_parqueo,usr_parqueo.pass_parqueo, usr_parqueo.ubicacion_idubicacion, usr_parqueo.datos_iddatos], callback)
    },
    deleteParqueo: function(parqueoId, callback) {
        return db.query("DELETE FROM usr_parqueo WHERE id_parqueo = ?", [parqueoId], callback)
    },
    updateParqueo: function(parqueoId, parqueo, callback) {

        return db.query("UPDATE usr_parqueo SET nombre_parqueo=?, direccion_parqueo=?, lugares_disponibles= ?, total_lugares=?, user_parqueo=?, pass_parqueo=? , ubicacion_idubicacion=?, datos_iddatos=?  WHERE id_parqueo=?", [usr_parqueo.nombre_parqueo, usr_parqueo.direccion_parqueo, usr_parqueo.lugares_disponibles, usr_parqueo.total_lugares, usr_parqueo.user_parqueo,usr_parqueo.pass_parqueo, usr_parqueo.ubicacion_idubicacion, parqueoId], callback)
    }
};
module.exports = parqueo;



// ****************************************//


const ubicacion = require ('./models/parqueo')


app.get('/api/parqueo',function (req,res)
{


parqueo.getAllParqueo(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });


})

app.get ('/api/parqueo/:parqueoId', (req,res) =>
{

parqueo.getParqueoById (req.params.paisId, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });


})

app.post ('/api/parqueo', (req,res) =>
{

parqueo.addParqueo(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });

})

app.put ('/api/parqueo/:id_parqueo', (req,res) =>
{

parqueo.updateParqueo(req.params.id_parqueo, req.body, function(err, rows) {
       if (err) {
           res.json(err);
       } else {
           res.json(rows);
       }
   });

})

app.delete ('/api/parqueo/:parqueoId', (req,res) =>
{

    parqueo.deleteParqueo(req.params.parqueoId, function(err, count) {
           if (err) {
               res.json(err);
           } else {
               res.json(count);
           }
       });
} )
