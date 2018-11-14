
var mongoose = require('mongoose')

var NoteFraisSchema = new mongoose.Schema({
    nom: String,
    date: Date,
    datenote : Date,
    montant: { type: Number, min : 0},
    devise: String,
    commentaire: String,
    statut: Number
})

const NoteFrais = mongoose.model('NoteFrais', NoteFraisSchema)

module.exports = NoteFrais;