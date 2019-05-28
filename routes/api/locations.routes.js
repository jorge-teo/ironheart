const express = require('express');
const router = express.Router();
const axios = require("axios")
const User = require("../../models/User.models")
const Locations = require("../../models/bodyLocations.models")
require("dotenv").config()

const token = process.env.TOKEN

// const URILocations = `https://healthservice.priaid.ch/body/locations/${req.params.id}?token=${token}&format=json&language=en-gb`

router.get("/:id", (req, res, next) => {

  
  Locations.find({ID: req.params.id})
    .then( fullList => {
      res.json(fullList)
    } ) 
    .catch(err => console.log(err))
  
  
})  


module.exports = router;
