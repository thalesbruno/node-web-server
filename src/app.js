const path = require('path')
const express = require('express')

const publicDirectoryPath = path.join(__dirname, '../public')
const port = 3000

const app = express()
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.send('Hello world ')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})