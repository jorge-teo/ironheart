const express = require('express');
const router = express.Router();
const axios = require("axios")
const Symptoms = require("../models/Symptoms.models")


//CONFIGURACION DE LA API
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InkyNDM0MEBud3l0Zy5uZXQiLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjUxNzgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMTktMDUtMjgiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTU1OTAzMTg5MiwibmJmIjoxNTU5MDI0NjkyfQ.4jDYromx8ouc4uhApzLODtq-G14A_vk0o9rrB9Uy8ZE"

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
