'use strict'

const express = require('express')

const app = express()

app.disable('etag')
app.disable('x-powered-by')

app.get('/benchmarks', function (req, res) {
  res.json({ hello: 'benchmarks' })
})

app.listen(3000)
