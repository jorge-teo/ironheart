document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
  document.getElementById("arm").onmouseover = () => {
    document.getElementsByName("arm")[0].setAttribute("class", "menu")
      
    axios.get("http://localhost:3000/symptoms/7")
    .then( fullList => {
      fullList.data[0].expanded.forEach(element =>  console.log(element.Name, element.ID))
    })
    .catch(err => console.log(err))


  }
  document.getElementsByClassName("bodyImg")[0].onmouseover = () => {
    document.getElementsByName("arm")[0].setAttribute("class", "hidden")
  }
}, false);
