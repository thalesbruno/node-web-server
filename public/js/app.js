const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locationMessage = document.querySelector('#location')
const forecastMessage = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const location = search.value

  locationMessage.textContent = 'Loading...'
  forecastMessage.textContent = ''

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.error(data.error)
        locationMessage.textContent = `${data.error}`
      } else {
        locationMessage.textContent = `Place: ${data.place_name}`
        forecastMessage.textContent = `Forecast: ${data.forecast.summary}, temperature of ${data.forecast.temperature}C right now and precipitation probability of ${data.forecast.precipProbability}`
      }
    })
  })
})