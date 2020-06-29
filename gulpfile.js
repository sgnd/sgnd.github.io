var gulp  = require('gulp')
var shell = require('gulp-shell')
gulp.task('serve', shell.task([
  'JEKYLL_ENV=development jekyll serve'
]))

