const express = require('express')
const app = express()
const compression = require('compression')

const port = process.env.PORT || 3000

app.use(compression())

app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
