// Node core modules
const path = require('path')
// Modules
const express = require('express')
const app = express()
const debug = require('debug')('APP:server')

debug(__filename.replace(process.cwd(), ''))

// import service
const service = require('./service')

// set server port
app.set('PORT', process.env.PORT || 5000)
// set static folder
app.use(express.static('public'))

app.get('/', (req, res) => {
  const file = path.join(process.cwd(), 'index.html')
  res.sendFile(file)
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