
document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!')

  
  
  //ARMS
  document.getElementById("arms").onclick = (e) => {
    axios.get("http://localhost:3000/symptoms/7")
    .then( fullList => {
      document.getElementById("armsdiv").innerHTML = ""

      
      fullList.data[0].expanded.forEach(element =>  {

        let parag = document.createElement("p")
        parag.innerHTML = element.Name
        parag.setAttribute("id",`${element.ID}`)

        parag.onclick = () => {

          axios.get("")

        }
        
        document.getElementById("armsdiv").appendChild(parag) 
      })
      document.getElementById("armsdiv").classList.remove("hidden")        
      document.getElementById("armsdiv").classList.add("menu")

      // document.querySelectorAll("sintoma").forEach(item => item.onclick = () => alert("HELLO"))
        

      })
      .catch(err => console.log(err))
  }

  document.getElementById("armsdiv").onclick = (e) => {
      document.getElementById("armsdiv").classList.add("hidden")
      document.getElementById("armsdiv").classList.remove("menu")

  }
  

  //ABDOMEN
  document.getElementById("abdomen").onclick = (e) => {
    axios.get("http://localhost:3000/symptoms/16")
      .then( fullList => {
        document.getElementById("abdomendiv").innerHTML = ""

        fullList.data[0].expanded.forEach(element =>  {
          
        let parag = document.createElement("p")
        parag.innerHTML = element.Name
        parag.setAttribute("id",`${element.ID}`)
        parag.onclick = () => alert(`${element.ID}`)
        
        document.getElementById("abdomendiv").appendChild(parag) 
        })
        document.getElementById("abdomendiv").classList.remove("hidden")        
        document.getElementById("abdomendiv").classList.add("menu")

      })
      .catch(err => console.log(err))
  }

  document.getElementById("abdomendiv").onclick = (e) => {
    document.getElementById("abdomendiv").classList.add("hidden")
    document.getElementById("abdomendiv").classList.remove("menu")

  }
  
//CHEST


  document.getElementById("chest").onclick = (e) => {
    axios.get("http://localhost:3000/symptoms/15")
      .then( fullList => {
        document.getElementById("chestdiv").innerHTML = ""
          
        fullList.data[0].expanded.forEach(element =>  {
          
        let parag = document.createElement("p")
        parag.innerHTML = element.Name
        parag.setAttribute("id",`${element.ID}`)
        parag.onclick = () => alert(`${element.ID}`)
        
        document.getElementById("chestdiv").appendChild(parag) 
        
        })

        document.getElementById("chestdiv").classList.remove("hidden")        
        document.getElementById("chestdiv").classList.add("menu")

      })
      .catch(err => console.log(err))
  }
  document.getElementById("chestdiv").onclick = (e) => {
    document.getElementById("chestdiv").classList.add("hidden")
    document.getElementById("chestdiv").classList.remove("menu")
  }
  

//HEAD

  document.getElementById("head").onclick = (e) => {
    axios.get("http://localhost:3000/symptoms/6")
      .then( fullList => {
        document.getElementById("headdiv").innerHTML = ""
          
        fullList.data[0].expanded.forEach(element =>  {
        
          let parag = document.createElement("p")
          parag.innerHTML = element.Name
          parag.setAttribute("id",`${element.ID}`)
          parag.onclick = () => alert(`${element.ID}`)
          
          document.getElementById("headdiv").appendChild(parag) 
        })
        document.getElementById("headdiv").classList.remove("hidden")        
        document.getElementById("headdiv").classList.add("menu")
      })
      .catch(err => console.log(err))
  }

  document.getElementById("headdiv").onclick = (e) => {
    document.getElementById("headdiv").classList.add("hidden")
    document.getElementById("headdiv").classList.remove("menu")

  }
  
//LEGS

  document.getElementById("legs").onclick = (e) => {
    axios.get("http://localhost:3000/symptoms/10")
      .then( fullList => {
        document.getElementById("legsdiv").innerHTML = ""
          
        fullList.data[0].expanded.forEach(element =>  {
          
        let parag = document.createElement("p")
        parag.innerHTML = element.Name
        parag.setAttribute("id",`${element.ID}`)
        parag.onclick = () => alert(`${element.ID}`)
        
        document.getElementById("legsdiv").appendChild(parag) 
        })
        document.getElementById("legsdiv").classList.remove("hidden")        
        document.getElementById("legsdiv").classList.add("menu")
      })
      .catch(err => console.log(err))
  }

  document.getElementById("legsdiv").onclick = (e) => {
    document.getElementById("legsdiv").classList.add("hidden")
    document.getElementById("legsdiv").classList.remove("menu")

  }

// SKIN


document.getElementById("skin").onclick = (e) => {
  axios.get("http://localhost:3000/symptoms/17")
    .then( fullList => {
      document.getElementById("skindiv").innerHTML = ""
          
        fullList.data[0].expanded.forEach(element =>  {
          
        let parag = document.createElement("p")
        parag.innerHTML = element.Name
        parag.setAttribute("id",`${element.ID}`)
        parag.onclick = () => alert(`${element.ID}`)
        
        document.getElementById("skindiv").appendChild(parag) 
        })
      document.getElementById("skindiv").classList.remove("hidden")        
      document.getElementById("skindiv").classList.add("menu")
    })
    .catch(err => console.log(err))
}

document.getElementById("skindiv").onclick = (e) => {
  document.getElementById("skindiv").classList.add("hidden")
  document.getElementById("skindiv").classList.remove("menu")

}

}, false);
