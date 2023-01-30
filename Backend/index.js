const express = require('express')
const app = express()
const {pokemonRouter} = require('./routes/pokemon')

app.use(express.json());

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/pokemon", pokemonRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})