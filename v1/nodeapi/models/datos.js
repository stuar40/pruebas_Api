//llamamos al paquete mysql que hemos instalado
var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'autoparking',
        password: 'autoparking',
        database: 'autoparking'
    }
);

//creamos un objeto para ir almacenando todo lo que necesitemos
var datosModel = {};

//obtenemos todos los datos
datosModel.getDatos = function(callback)
{
    if (connection)
    {
        connection.query('SELECT * FROM datos ORDER BY id_datos', function(error, rows) {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, rows);
            }
        });
    }
}


//obtenemos un usuario por su id
datosModel.getDato = function(id,callback)
{
    if (connection)
    {
        var sql = 'SELECT * FROM datos WHERE id_datos = ' + connection.escape(id);
        connection.query(sql, function(error, row)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                callback(null, row);
            }
        });
    }
}




module.exports = datosModel;
