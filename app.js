// Init Storage
const storage = new Storage()

// get Stored location data
const weatherLocation = storage.getLocationData()

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country)
// Init UI
const ui = new UI()

// Get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value
  const country = document.getElementById('country').value

  //   change the location
  weather.changeLocation(city, country)

  storage.setLocationData(city, country)

  // Get and display weather
  getWeather()

  // Close Modal
  $('#locModal').modal('hide')
})

// weather.changeLocation('Miami', 'US')

function getWeather () {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results)
    })
    .catch(err => {
      console.log(err)
    })
}
