class UI {
  constructor () {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
    // this.dewpoint = document.getElementById('w-dewpoint')
    this.wind = document.getElementById('w-wind')
  }

  paint (weather) {
    // console.log(weather)
    // console.log(weather.name + ', ' + weather.sys.country)
    this.location.textContent = weather.name + ', ' + weather.sys.country
    this.desc.textContent = weather.weather[0].description
    this.string.textContent = this.kelvinToCel(weather.main.temp) + ' ℃'
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    )
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`
    this.feelsLike.textContent = `Feels Like: ${this.kelvinToCel(
      weather.main.feels_like
    )} ℃`
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} MPH`
  }

  kelvinToCel (temp) {
    return (temp - 273.15).toFixed(2)
  }
}
