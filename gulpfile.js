// use require to import gulp libary
// all methods and properties form gulp (etc)
// will be assigned to the gulp (etc) variables,

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

gulp.task('coffee', function(){
  gulp.src('components/coffee/tagline.coffee')
    .pipe(coffee({ bare:true })
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});