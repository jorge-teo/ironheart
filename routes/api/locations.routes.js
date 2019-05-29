const express = require('express');
const router = express.Router();
const axios = require("axios")
const User = require("../../models/User.models")
const Locations = require("../../models/bodyLocations.models")
require("dotenv").config()

const token = process.env.TOKEN

 const URILocations = `https://healthservice.priaid.ch/symptoms/48/0?token=${token}&format=json&language=en-gb`

router.get("/:id", (req, res, next) => {

  
  Locations.find({ID: req.params.id})
    .then( fullList => {
      res.json(fullList)
    } ) 
    .catch(err => console.log(err))
  
  
})

router.get("/:id/list", (req, res, next) => {
  
  axios.get(URILocations)
    .then( response => 
      res.json(response)
      )
    .catch()

})


module.exports = router;
