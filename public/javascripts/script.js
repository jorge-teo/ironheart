document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
  document.getElementById("arm").onmouseover = () => {
    
        axios.get("http://localhost:3000/symptoms/7")
          .then( fullList => {
            fullList.data[0].expanded.forEach(element =>  console.log(element.Name, element.ID))
          })
          .catch(err => console.log(err))


  }

}, false);
