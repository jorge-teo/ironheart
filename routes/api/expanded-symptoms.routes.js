const express = require('express');
const router = express.Router();
const axios = require("axios")
require("dotenv").config()

//CONFIGURACION DE LA API
const token = process.env.TOKEN

router.get("/getDiagnosis/:id", (req,res) => {
  let gender = req.user == "male" ? 0 : 1
  let URILIST = `https://sandbox-healthservice.priaid.ch/symptoms/${req.params.id}/${gender}?token=${token}&format=json&language=en-gb`
  axios.get(URILIST)
  .then(response => res.json(response.data))
  .catch(error => console.log(error))
})

module.exports = router;
