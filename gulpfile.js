var browserify = require('gulp-browserify');
var hbsfy = require('hbsfy');
var rename = require('gulp-rename')
var gulp = require('gulp');

gulp.task('default', function() {
  return gulp.src('index.js')
    .pipe(browserify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'));
});
