const debug = require('debug')('APP:server')
const express = require('express')
const app = express()

// set server port
app.set('PORT', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.send('Hello from Express.js')
})

app.listen(app.get('PORT'), err => {
  if (err) {
    debug(`[APP][Listen][Error][${err.message}]`)
  } else {
    debug(`[APP][Mode][${process.env.NODE_ENV}]`)
    debug(`[APP][Listen][Succes][PORT][${app.get('PORT')}]`)
    debug(`[APP][Served][http://localhost:${app.get('PORT')}]`)
  }
})