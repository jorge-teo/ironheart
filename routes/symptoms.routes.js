const express = require('express');
const router = express.Router();
//const axios = require("axios")

// Petición GET de los SYMPTOM

router.get('/', (req, res, next)=> {
  res.render('symptoms');
});
// router.get('/symptoms', (req, res, next) => {

//   axios.get(`http://www.apifalsa.com/${id}`)
//   .then(response => console.log(response))
//   .catch(error => console.log(error))

//   res.render('symptoms', {objetomanejable});
// });

module.exports = router;
