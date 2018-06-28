var CleanCss = require('broccoli-clean-css')
var Concat = require('broccoli-concat')
var Funnel = require('broccoli-funnel')
var MergeTrees = require('broccoli-merge-trees')

var compressedCss = new CleanCss('app/css')
var applicationCss = new Concat(compressedCss, {
  headerFiles: ['reset.css'],
  inputFiles: ['*.css'],
  outputFile: '/css/app.css'
})

var images = new Funnel('app/images', {
  destDir: 'images'
})

var html = new Funnel('app', {
  include: ['*.html']
})

module.exports = new MergeTrees([applicationCss, images, html])
