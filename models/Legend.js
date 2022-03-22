const mongoose = require('mongoose');

const Legend = mongoose.model('Legend', {
    nome: String,
    posicao: String,
    imagem: String,
    nacionalidade: String,
    melhorDoMundo: Number,
    video: String,
    titulos: [
        { 
            nome: String,
            imagem: String,
            peso: Number,
            qtdTitulos: Number,
        }
    ]
});

module.exports = Legend;