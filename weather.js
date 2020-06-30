class Weather {
  constructor (city, country) {
    this.apiKey = 'a9acf2f54a5d9b8d632fcfd11c4f8909'
    this.city = city
    this.country = country
  }

  // fetch weather from API
  async getWeather () {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`
    )

    const responseData = await response.json()

    return responseData
  }

  // Change weather location
  changeLocation (city, country) {
    this.city = city
    this.country = country
  }
}
