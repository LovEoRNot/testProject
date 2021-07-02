const fs = require('fs')
const path = require('path')
function MyPlugin(options) {
  this.options = options
}

MyPlugin.prototype.apply = function(compiler) {
  compiler.hooks.beforeRun.tap('MyPlugin', (compilation) => {
    const outputPath = compiler.options.output.path
    const fileList = fs.readdirSync(outputPath)
    for (const file of fileList) {
      fs.unlinkSync(path.resolve(outputPath, file))
    }
  })
}

module.exports = MyPlugin