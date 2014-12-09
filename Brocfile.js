var cleanCss = require('broccoli-clean-css')
var concat = require('broccoli-concat')

var tree = cleanCss('public/css')
tree = concat(tree, {
  inputFiles: ['reset.css', 'master.css'],
  outputFile: '/css/app.css'
})

module.exports = tree
