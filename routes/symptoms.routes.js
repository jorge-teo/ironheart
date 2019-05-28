const express = require('express');
const router = express.Router();
const axios = require("axios")
const Symptoms = require("../models/Symptoms.models")


//CONFIGURACION DE LA API

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Ing1MDkyMjBAbnd5dGcubmV0Iiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI1MTczIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE5LTA1LTI3IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1NTg5ODU5NDksIm5iZiI6MTU1ODk3ODc0OX0.dxrqcv5kZDw9KcvZGvykUeT3nTtvF8QerdjEqaNXEAU"
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

        const ids = symptomsFound.map(e => e.ID)
        const URI = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${ids}]&gender=${req.user.gender}&year_of_birth=${req.user.year_of_birth}&token=${token}&format=json&language=en-gb`
        console.log(URI)
          axios.get(URI)
            .then(response => res.render('diagnosis', {data: response.data}))
            .catch()
        } )
        .catch()

  } else {
    Symptoms.find({Name: req.body.symptoms})
    .then( symptomsFound => {
      console.log("answer from DB",symptomsFound)
      const ids = symptomsFound[0].ID
      const URI = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${ids}]&gender=${req.user.gender}&year_of_birth=${req.user.year_of_birth}&token=${token}&format=json&language=en-gb`
      console.log(URI)
        axios.get(URI)
          .then(response => res.render('diagnosis', {data: response.data}))
          .catch()
      } )
      .catch()
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
