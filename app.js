const express = require('express')
const app = express()
const port = 5000
const api = require('./api');

app.use(express.json())

app.listen(port, () => {
  console.log(`Horror movie app is running on port ${port}.`)
})

app.get('/scores', api.getAllScores)

app.post('/score', api.updateScore)
