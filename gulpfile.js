// use require to import gulp libary
// all methods and properties form gulp (etc)
// will be assigned to the gulp (etc) variables,

var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    coffee      = require('gulp-coffee'), // process .coffee into .js
    concat      = require('gulp-concat'),
    compass     = require('gulp-compass'),
    browserify  = require('gulp-browserify'); 


var coffeeSources = ['components/coffee/*.coffee'];
var jsSources     = [
  'components/scripts/rclick.js',
  'components/scripts/pixgrid.js',
  'components/scripts/tagline.js',
  'components/scripts/template.js',
];
var sassSources   = ['components/sass/style.scss']

gulp.task('coffee', function(){
  //gulp.src('components/coffee/tagline.coffee')
  gulp.src(coffeeSources)
    .pipe(coffee({ bare:true })
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function(){
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function(){
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded'
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('builds/development/css'))
});