window.onload = () => {

  const origin = { lat: 40.437101, lng: -3.6956612 }
  const sanCarlos = { lat: 40.440698, lng: -3.719922 }
  const laLuz = { lat: 40.444849, lng: -3.713821 }
  const cruzRoja = { lat: 40.447821, lng: -3.707495}
  const Ruber = { lat: 40.490903, lng: -3.714738}
  const laMoraleja = { lat: 40.494084, lng: -3.663139}
  const infantaSofía = { lat: 40.558694, lng: -3.610463}
  const elCasar = { lat: 40.697707, lng: -3.437653}
  const laPrincesa = { lat: 40.434940, lng: -3.675709}
  const américa = { lat: 40.451862, lng: -3.651175}
  const príncipeAsturias = { lat: 40.511799, lng: -3.347859}
  const vírgenTorre = { lat: 40.381604, lng: -3.619367}
  const centralDefensa = { lat: 40.389652, lng: -3.746289}
  const octubre = { lat: 40.377014, lng: -3.699061}
  const getafe = { lat: 40.313446, lng: -3.699061}


  const myMap = new google.maps.Map(                // 2 argumentos: selector, opciones
    document.getElementById('map'),
    {
      center: origin,
      zoom: 10
    }
  ) 
  new google.maps.Marker({
    map: myMap,
    position: origin,
    title: 'Hospital La Milagrosa'
  })
  new google.maps.Marker({
    map: myMap,
    position: sanCarlos,
    title: 'Hospital Clínico San Carlos'
  })
  new google.maps.Marker({
    map: myMap,
    position: laLuz,
    title: 'Hospital La Luz'
  })
  new google.maps.Marker({
    map: myMap,
    position: cruzRoja,
    title: 'Hospital Central de la Cruz Roja San José y Santa Adela'
  })
  new google.maps.Marker({
    map: myMap,
    position: Ruber,
    title: 'Hospital Ruber Internacional'
  })
  new google.maps.Marker({
    map: myMap,
    position: laMoraleja,
    title: 'Hospital Sanitas La Moraleja'
  })
  new google.maps.Marker({
    map: myMap,
    position: infantaSofía,
    title: 'Hospital Infanta Sofía'
  })
  new google.maps.Marker({
    map: myMap,
    position: elCasar,
    title: 'Centro De Salud De El Casar'
  })
  new google.maps.Marker({
    map: myMap,
    position: laPrincesa,
    title: 'Hospital de La Princesa'
  })
  new google.maps.Marker({
    map: myMap,
    position: américa,
    title: 'Hospital Vithas Nuestra Señora de América'
  })
  new google.maps.Marker({
    map: myMap,
    position: príncipeAsturias,
    title: 'Hospital Universitario Príncipe de Asturias'
  })
  new google.maps.Marker({
    map: myMap,
    position: vírgenTorre,
    title: 'Hospital Virgen de la Torre'
  })
  new google.maps.Marker({
    map: myMap,
    position: centralDefensa,
    title: 'Hospital Central de la Defensa Gómez Ulla'
  })
  new google.maps.Marker({
    map: myMap,
    position: octubre,
    title: 'Hospital 12 de Octubre'
  })
  new google.maps.Marker({
    map: myMap,
    position: getafe,
    title: 'Hospital Universitario de Getafe'
  })
 }







// function initMap() {

//   if (navigator.geolocation) {

//     const ironhackBCN = { lat: 41.3977381, lng: 2.190471916 }

//     const myMap = new google.maps.Map(
//       document.getElementById('map'),
//       {
//         center: ironhackBCN,
//         zoom: 10
//       }
//     )

//     navigator.geolocation.getCurrentPosition(           // argumentos: callback de success, callback de error, objeto de opciones
//       position => {

//         const myLocation = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         }

//         myMap.setCenter(myLocation)

//         new google.maps.Marker({
//           position: myLocation,
//           title: 'Tú estás ahora aquí',
//           map: myMap
//         })

//       },
//       error => console.log('Todo mal', error)
//     )


//   } else {
//     console.log("Tu navegador carece de geolocalización (qué fuerte)")
//   }
// }









// Rutas
function initMap() {

  const directionsService = new google.maps.DirectionsService
  const directionsDisplay = new google.maps.DirectionsRenderer

  const ironHackMadrid = { lat: 40.3922589, lng: -3.6985873 }
  const ironhackBCN = { lat: 41.3977381, lng: 2.190471916 }


  const myMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: ironHackMadrid
  })

  directionsDisplay.setMap(myMap)

  calculateAndDisplay(directionsService, directionsDisplay, ironHackMadrid, ironhackBCN)
}


const calculateAndDisplay = (directionsService, directionsDisplay, orig, dest) => {

  directionsService.route({
    origin: orig,
    destination: dest,
    travelMode: google.maps.TravelMode['DRIVING']
  }, (finalRoute, status) => {
    status === 'OK' ? directionsDisplay.setDirections(finalRoute) : console.log("Error:", status)
  })
}








// Geocoder

function initMap() {

  const ironhackBCN = { lat: 41.3977381, lng: 2.190471916 }

  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: ironhackBCN,
      zoom: 10
    }
  )


  const geocoder = new google.maps.Geocoder();

  geocodeAddress(geocoder, map)

}

function geocodeAddress(geocoder, resultsMap) {

  let address = document.getElementById('address').value

  geocoder.geocode({ 'address': address }, function (results, status) {

    console.log(results)

    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location)
      new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      })
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

