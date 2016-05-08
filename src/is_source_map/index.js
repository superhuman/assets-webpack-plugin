const pathTemplate = require('../path_template')

module.exports = function isSourceMap (options, asset) {
  const sourceMapFilename = options.output.sourceMapFilename
  const sourcemapTemplate = pathTemplate(sourceMapFilename)
  return sourcemapTemplate.matches(asset)
}
