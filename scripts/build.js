const webpack = require('webpack')
const configuration = require('../webpack.config')

const compiler = webpack(configuration)

compiler.run(function(err, stats) {
  if (err) {
    console.log(err)
  }
  console.log('compiler over')
})
