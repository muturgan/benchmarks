'use strict'

const express = require('express')

const app = express()

app.disable('etag')
app.disable('x-powered-by')

const router = express.Router()

router.get('/benchmarks', function (req, res) {
  res.json({ hello: 'benchmarks' })
})

app.use('/', router)
app.listen(3000)
