const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const symptomsSchema = new Schema({
  Name: String,
  ID: Number
}, {
  timestamps: true
});

const Symptoms = mongoose.model('Symptoms', symptomsSchema);
module.exports = Symptoms;
