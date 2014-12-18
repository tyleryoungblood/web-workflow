// use require to import gulp libary
// all methods and properties form gulp (etc)
// will be assigned to the gulp (etc) variables,

var gulp = require('gulp'),
    gutil = require('gulp-util');

gulp.task('log', function(){
  gutil.log('Workflows are awesome!');
});