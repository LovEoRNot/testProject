
module.exports = function(source) {
  // const options = this.getOptions()
  const callback = this.async()

  setTimeout(() => {
    callback(null, source.replace('{a}', 123456))
  }, 100);
  // return source
}
