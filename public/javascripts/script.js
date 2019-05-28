document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
  document.getElementById("arm").onmouseover = () => {
    document.getElementsByName("arm")[0].setAttribute("class", "menu")
  }
  document.getElementsByClassName("bodyImg")[0].onmouseover = () => {
    document.getElementsByName("arm")[0].setAttribute("class", "hidden")
  }
}, false);
