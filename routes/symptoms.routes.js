const express = require('express');
const router = express.Router();
const Symptoms = require('../models/Symptoms.models')
//const axios = require("axios")

// Petición GET de los SYMPTOM

router.get('/', (req, res, next)=> {
  Symptoms.find()
    .then(allSymptoms =>{allSymptoms.forEach(element => console.log(element.Name)) }) 
    .catch(error => console.log(error))
  res.render('symptoms');
});
// router.get('/symptoms', (req, res, next) => {

//   axios.get(`http://www.apifalsa.com/${id}`)
//   .then(response => console.log(response))
//   .catch(error => console.log(error))

//   res.render('symptoms', {objetomanejable});
// });

module.exports = router;
