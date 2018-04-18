'use strict'


const db = require('../config') //reference of dbconnection.js
const ciudad = {
    getAllCiudad: function(callback) {
        return db.query("SELECT * FROM autoparking.ciudad", callback)
    },
    getCiudadById: function(ciudadId, callback) {
        return db.query("SELECT * FROM ciudad WHERE id_ciudad = ?", [ciudadId], callback)
    },
    addCiudad: function(ciudad, callback) {

        return db.query("Insert into ciudad values(?,?,?)", [ciudad.id_ciudad, ciudad.nombre_ciudad, ciudad.pais_idpais], callback)
    },
    deleteCiudad: function(ciudadId, callback) {
        return db.query("DELETE FROM ciudad WHERE id_ciudad = ?", [ciudadId], callback)
    },
    updateCiudad: function(ciudadId, ciudad, callback) {

        return db.query("UPDATE pais SET nombre_ciudad=?, pais_idpais=?  WHERE id_ciudad=?", [ciudad.nombre_ciudad, ciudad.pais_idpais, ciudadId], callback)
    }
};
module.exports = ciudad;



// ****************************************//


const ciudad = require ('./models/ciudad')


app.get('/api/ciudad',function (req,res)
{


dato.getAllCiudad(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });


})

app.get ('/api/ciudad/:ciudadId', (req,res) =>
{

pais.getPaisById (req.params.paisId, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });


})

app.post ('/api/ciudad', (req,res) =>
{

dato.addCiudad(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });

})

app.put ('/api/ciudad/:id_ciudad', (req,res) =>
{

dato.updateCiudad(req.params.id_pais, req.body, function(err, rows) {
       if (err) {
           res.json(err);
       } else {
           res.json(rows);
       }
   });

})

app.delete ('/api/ciudad/:ciudadId', (req,res) =>
{

    dato.deleteCiudad(req.params.ciudadId, function(err, count) {
           if (err) {
               res.json(err);
           } else {
               res.json(count);
           }
       });
} )
