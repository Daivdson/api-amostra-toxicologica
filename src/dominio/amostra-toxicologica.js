const mongoose = require('mongoose');

const AmostraToxicologica = mongoose.model('AmostraToxicologica', {
    codigoAmostra: { // maximo 8 numeros. “Cocaína”: 0,678,
        type: Number,
        required: true,
        validate(value){
            if(value.length > 8 || value.length < 8){
                throw new Error('Código da amostra deve possuir 8 caracteres');
            }
        }
    },
    anfetamina: {
        type: Number,
        required: true
    },
    metanfetamina: {
        type: Number,
        required: true
    },
    mda: {
        type: Number,
        required: true
    },
    mdma: {
        type: Number,
        required: true
    },
    thc: {
        type: Number,
        required: true
    },
    morfina: {
        type: Number,
        required: true
    },
    codeina: {
        type: Number,
        required: true
    },
    heroina: {
        type: Number,
        required: true
    },
    benzoilecgonina: {
        type: Number,
        required: true
    },
    cocaetileno:{
        type: Number,
        required: true
    },
    norcocaina:{
        type: Number,
        required: true
    },
    resultado:{
        type: String,
        required: true
    }
});

module.exports = AmostraToxicologica;