const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')
const hotReplaceMiddleware = require('webpack-hot-middleware')

const compiler = webpack(config)

const app = express()

app.use(hotReplaceMiddleware(compiler))

app.listen('3000', function(err) {
  if (err) {
    return console.log(err)
  }
  console.log('listen at http://localhost:3000')
})