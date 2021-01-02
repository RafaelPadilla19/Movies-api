const express = require('express');

const app = express();

const { config } = require('../config/index');

app.get('/', function(req, res) {
    res.send('Bienbenido, para poder saber si es un anio bisiesto \n' +
        'despues de la url coloque el anio por ejemplo http://localhost/2020');

})

app.get('/:anio', function(req, res) {
    let anio = req.params.anio;
    if (anio % 4 == 0 && anio % 100 !== 0 || anio % 400 === 0) {
        res.send('Bisiesto 100%');
    } else {
        res.send('No es Bisiesto');
    }

});
app.listen(config.port,
    function() {
        console.log(`Listening http://localhost:${config.port}`);
    });