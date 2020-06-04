const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PintoresSchema = new Schema({
    Nombre:{
        type: String,
        required: [true, 'Ingresa tu nombre']
    },
    Corriente:{
        type: String,
        required: [true, 'Queremos la corriente'],
    },
    Nacionalidad:{type: String},
});

module.exports = mongoose.model('pintores',pintores);
