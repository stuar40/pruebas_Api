'use strict'


const db = require('../config') //reference of dbconnection.js
const pais = {
    getAllPais: function(callback) {
        return db.query("SELECT * FROM autoparking.pais", callback)
    },
    getPaisById: function(paisId, callback) {
        return db.query("SELECT * FROM pais WHERE id_pais = ?", [paisId], callback)
    },
    addPais: function(pais, callback) {
        return db.query("Insert into pais values(?,?)", [pais.id_pais, pais.nom_pais], callback)
    },
    deletePais: function(paisId, callback) {
        return db.query("DELETE FROM pais WHERE pais.id_pais = ?", [paisId], callback)
    },
    updatePais: function(paisId, pais, callback) {

        return db.query("UPDATE pais SET nom_pais=? WHERE id_pais=?", [pais.nom_pais, paisId], callback)
    }
};
module.exports = pais;



// ****************************************//


const pais = require ('./models/pais')


app.get('/api/pais',function (req,res)
{/*
  connection.query('SELECT * FROM autoparking.datos', function(error, results, fields)
{
  if (error) throw error
  return res.send ({erro: false, data: results, message: 'Todos listen'})

})
*/
dato.getAllPais(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });


})

app.get ('/api/pais/:paisId', (req,res) =>
{
  /*
let datoId = req.params.datoId
connection.query("SELECT * FROM datos WHERE id_datos = ?",datoId,function (error, results, fields) {
  if (error) throw error
  return res.send ({error: false, data: results[0], message: 'Search List' })
})*/

pais.getPaisById (req.params.paisId, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });


})

app.post ('/api/pais', (req,res) =>
{/*
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
})*/

dato.addPais(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });

})

app.put ('/api/pais/:id_pais', (req,res) =>
{/*
let id_datos =req.params.id_datos
let Nombre = req.body.Nombre
let Apellido = req.body.Apellido
let Direccion = req.body.Direccion
let Correo = req.body.Correo

if (!id_datos) {
        return res.status(400).send({ error: id_datos, message: 'Please provide task and task_id' })
              }

connection.query("UPDATE datos SET Nombre=?,Apellido=?, Direccion=?, Correo=? WHERE id_datos=?" ,[Nombre, Apellido, Direccion, Correo, id_datos], function (error, results, fields) {
 if (error) throw error
 return res.send({ error: false, data: results, message: 'Task has been updated successfully.' })
})*/

dato.updatePais(req.params.id_pais, req.body, function(err, rows) {
       if (err) {
           res.json(err);
       } else {
           res.json(rows);
       }
   });

})

app.delete ('/api/pais/:paisId', (req,res) =>
{
  /*
  let datoId = req.params.datoId
  connection.query('DELETE FROM datos WHERE id_datos = ?', [datoId], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'se ha eliminado con exito' });
    })*/

    dato.deletePais(req.params.paisId, function(err, count) {
           if (err) {
               res.json(err);
           } else {
               res.json(count);
           }
       });
} )
