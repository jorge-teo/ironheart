const express = require('express');
const router = express.Router();
const axios = require("axios")
const Symptoms = require("../models/Symptoms.models")
require("dotenv").config()

//CONFIGURACION DE LA API
const token = process.env.TOKEN
// Petición GET de los SYMPTOM
router.get('/', (req, res, next)=> {
  Symptoms.find()
  .then(allSymptoms => res.render('symptoms', { symptoms: allSymptoms.map(element => element.Name)}) )
  .catch(error => console.log(error))
})



router.post("/", (req, res, next) => {
  if(typeof req.body.symptoms != "string"){
      const symptoms = [...req.body.symptoms]
      Symptoms.find({Name: symptoms})
      .then( symptomsFound => {

        const ids = symptomsFound.map( eachsymptoms=> eachsymptoms.ID)
        const URI = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${ids}]&gender=${req.user.gender}&year_of_birth=${req.user.year_of_birth}&token=${token}&format=json&language=en-gb`
        console.log(URI)
          axios.get(URI)
            .then(response => res.render('diagnostic', {data: response.data}))
            .catch(err => console.log(err))
        } )
        .catch(error => console.log(error))

  } else {
    Symptoms.find({Name: req.body.symptoms})
    .then( symptomsFound => {
      console.log("answer from DB",symptomsFound)
      const ids = symptomsFound[0].ID
      const URI = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${ids}]&gender=${req.user.gender}&year_of_birth=${req.user.year_of_birth}&token=${token}&format=json&language=en-gb`

      console.log(URI)
        axios.get(URI)
          .then(response => res.render('diagnostic', {data: response.data}))
          .catch(err => console.log(err))
      } )
      .catch(err => console.log(err))
  }
})
  // Symptoms.find()
  //   .then(allSymptoms =>{
  //     allSymptoms = allSymptoms.map(element => element.Name)
  //     res.render('symptoms', { allSymptoms});
  //   })
  //   .catch(error => console.log(error))

  // axios.get(URI)
  // .then(response => console.log(response.data))
  // .catch(error => console.log(error))



module.exports = router;
