const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const port = process.env.PORT || 3000

const app = express()

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: '@thalesbruno'
  })
})

app.get('/weather', (req, res) => {
  const { address }  = req.query
  if (!address) {
    return res.send({
      error: 'Address field is required.'
    })
  }
  
  geocode(address, (error, location ) => {
    if (error) {
      return res.send({ error })
    }
    const { place_name, latitude, longitude } = location
    forecast(latitude, longitude, (error, forecast) => {
      if (error) {
        return res.send({ error })
      }
      res.send({
        address,
        place_name,
        forecast,
       })
    })
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: '@thalesbruno'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: '@thalesbruno',
    message: 'How can I help you? Tell me, please.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: '@thalesbruno',
    error_message: 'Error 404 - Page not found'
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})