var CleanCss = require('broccoli-clean-css')
var Concat = require('broccoli-concat')
var Funnel = require('broccoli-funnel')
var MergeTrees = require('broccoli-merge-trees')

var compressedCss = new CleanCss('public/css')
var applicationCss = new Concat(compressedCss, {
  inputFiles: ['*.css'],
  outputFile: '/css/app.css'
})

var images = new Funnel('public/images', {
  destDir: 'images'
})

var html = new Funnel('public', {
  include: ['*.html']
})

module.exports = new MergeTrees([applicationCss, images, html])
