
let lat;
let long;
let currentPosition;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
//   console.log(position.coords.latitude)
//   console.log(position.getLocation)
  currentPosition = position.getLocation
  lat = position.coords.latitude
  long = position.coords.longitude
//   console.log(position.coords.longitude)
}

getLocation()
const useGeoApi = () => {

    return {lat,long,currentPosition}
}

export default useGeoApi