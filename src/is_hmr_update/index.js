const pathTemplate = require('../path_template')

module.exports = function isHMRUpdate (options, asset) {
  const hotUpdateChunkFilename = options.output.hotUpdateChunkFilename
  const hotUpdateTemplate = pathTemplate(hotUpdateChunkFilename)
  return hotUpdateTemplate.matches(asset)
}
