const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Impresora_Schema = new Schema({
    marca: {
        type: String,
        required: [true, "el campo marca es requerido"]
    },
    modelo: {
        type: String,
        required: [true, "el campo  modelo es requerido"]
    },
    serie: {
        type: Number,
        required: [true, "el campo serie es requerido"]
    },
    color: {
        type: Boolean,
        default: false
    },
    ip: {
        type: String,
        required: [true, "el campo ip es requerido"]
    },
    contador: {
        type: Number,
        default: 0
    },
    precio: {
        type: Number,
        required: [true, "el campo precio es requerido"]
    }
});


module.exports = mongoose.model('Impresora', Impresora_Schema);