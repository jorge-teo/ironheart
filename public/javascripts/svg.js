window.onload = ()  => {
  const Vivus = require("vivus")

  new Vivus('caduceus', { duration: 200 }, () => document.getElementById("caduceus").style.opacity = 1)


}