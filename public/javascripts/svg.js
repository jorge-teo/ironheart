document.onload() = () => {
const Vivus = require("vivus")


  new Vivus('my-svg', {
    type: 'delayed', 
    duration: 2000000,
    animTimingFunction: Vivus.EASE
  })


}