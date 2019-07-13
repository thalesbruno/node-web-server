const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidGhhbGVzYnJ1bm8iLCJhIjoiY2p4aXpzNDRtMW83dDN4b2dmdzl3cmpuayJ9.jP2DtXE_QFJFBuDq2vSZ1g&limit=1`

  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback('Unable to connect with the geocode service.', null)
    } 
    else if (body.features.length === 0) {
      callback('No results for your query search.', null)
    }
    else {
      const { center, place_name } = body.features[0]
      const latitude = center[1]
      const longitude = center[0]
      callback(null, { place_name, latitude, longitude })
    }
  })

}

module.exports = geocode