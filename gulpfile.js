var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var prettify = require('gulp-jsbeautifier');

var jsFiles = ['*.js', 'app/**/*.js'];

// Prints out hint and style errors for js
gulp.task('style', function() {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
      verbose: true
    }))
    .pipe(jscs());
});

// Fixes js errors
gulp.task('fj', function() {
  return gulp.src(jsFiles)
    .pipe(prettify({
      config: '.jsbeautifyrc',
      mode: 'VERIFY_AND_WRITE'
    }))
    .pipe(gulp.dest('.'));
});

// Node Server - run app
gulp.task('ns', function() {
  var options = {
    script: 'server.js',
    delayTime: 1,
    env: {
      'PORT': 5000
    },

    watch: jsFiles
  };

  return nodemon(options)
    .on('restart', function(ev) {
      console.log('Restarting Node');
    })
});
