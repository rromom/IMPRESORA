require('./config/config');

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Midleware
// app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
// app.use('/impresora', require('./routers/impresora-router'));
// app.use('/impresora', require('./routers/impresora-router'))
app.use('/impresora', require('./routers/impresora-router'));


//  Data Base

mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log("Conectado a la base de Datos");
})

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto", process.env.PORT);
});