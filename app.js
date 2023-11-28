const express = require('express')

const app = express()
module.exports = app

app.get('/', (request, response) => {
  response.send('Home Page')
})

app.get('/', (request, response) => {
  response.send('About Page')
})

app.listen(3000)
