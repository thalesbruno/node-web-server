const path = require('path')
const express = require('express')

const app = express()

app.set('view engine', 'hbs')


app.get('', (req, res) => {
  res.render('index') 
})

app.get('/help', (req, res) => {
  res.send('Help page.')
})

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
  res.send([{
    location: 'Salvador, Bahia, Brazil',
    forecast: 'It is raining a lot'
  }])
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})