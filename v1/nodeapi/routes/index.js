
/*
 * GET home page.
 */

 var express = require('express');
var router = express.Router();
var UserModel = require('../models/datos');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


/* Mostramos el formualario para crear usuarios nuevos */
router.get('/', function(req, res)
{
  res.render('index', { title: 'Servicio rest con nodejs, express 4 y mysql'});
});


/* Obtenemos un usuario por su id y lo mostramos en un formulario para editar */
router.get('/dato/:id', function(req, res)
{
    var id = req.params.id;
    //solo actualizamos si la id es un número
    if(!isNaN(id))
    {
        UserModel.getUser(id,function(error, data)
        {
            //si existe el usuario mostramos el formulario
            if (typeof data !== 'undefined' && data.length > 0)
            {
                res.render("update",{
                    title : "Servicio rest con nodejs, express 4 y mysql",
                    info : data
                });
            }
            //en otro caso mostramos un error
            else
            {
                res.json(404,{"msg":"notExist"});
            }
        });
    }
    //si la id no es numerica mostramos un error de servidor
    else
    {
        res.json(500,{"msg":"The id must be numeric"});
    }
});


/* Obtenemos y mostramos todos los usuarios */
router.get('/datos/', function(req, res)
{
    UserModel.getUsers(function(error, data)
    {
        //si existe el usuario mostramos el formulario
        if (typeof data !== 'undefined')
        {
            res.render("show",{
                title : "Servicio rest con nodejs, express 4 y mysql",
                users : data
            });
        }
        //en otro caso mostramos un error
        else
        {
            res.json(404,{"msg":"notExist"});
        }
    });
});



module.exports = router;
