const express = require('express')
const app = express()
const port = 8500
// const api = require('./api');
const cors = require('cors')
const db = require('./db')

// ===== middleware =====
app.use(cors())
app.use(express.json())

// app.get('/scores', api.getAllScores)

// app.post('/score', api.updateScore)

// insert score
app.post('/new_score', async(req, res) => {
  try {
    const { score, player_name, level } = req.body

    const newScore = await db.query('INSERT INTO high_score (score, player_name, level) VALUES($1, $2, $3)',
        [score, player_name, level])
    // console.log(req.body)

    res.json(newScore)
  } catch (error) {
    console.error(error.message)
  }
})

// get all scores
app.get('/get_scores', async(rq, rs) => {
  try {
    const highScores = await db.query('SELECT * FROM high_score')

    rs.json(highScores.rows)
  } catch (error) {
    console.error(error.message)
  }
})

// get top 5 best players
app.get('/get_top_three', async(rq, rs) => {
  try {
    const top3Scores = await db.query('SELECT *  FROM high_score ORDER BY score DESC LIMIT 3;')

    rs.json(top3Scores.rows)
  } catch (error) {
    console.error(error.message)
  }
})


// ===============================
// ===============================

app.listen(port, () => {
  console.log(`Horror movie app is running on port ${port}.`)
})
