const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bodyLocationsSchema = new Schema({
  Name: String,
  ID: Number,
  expanded: [{Name: String, ID: String}]
}, {
  timestamps: true
});

const bodyLocations = mongoose.model('bodyLocations', bodyLocationsSchema);
module.exports = bodyLocations;
