const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/5fe1cf0717790826ad8a112a1e78537d/${latitude},${longitude}?units=si`
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to connect with the weather service', null)
    }
    else if (body.error) {
      callback('Unable to find location', null)
    }
    else {
      const { temperature, precipProbability } = body.currently
      const { summary } = body.daily.data[0]

      callback(null,{
        summary,
        temperature,
        precipProbability: `${precipProbability*100}%`
      })
    }

  })
}

module.exports = forecast