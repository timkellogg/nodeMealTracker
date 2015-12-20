var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var prettify = require('gulp-jsbeautifier');
var sass = require('gulp-sass');

var jsFiles = ['*.js', 'app/**/*.js'];
var sassFiles = ['source/sass'];

// Print out hint and style errors for js
gulp.task('style', function() {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
      verbose: true
    }))
    .pipe(jscs());
});

// Fix js style errors
gulp.task('fj', function() {
  return gulp.src(jsFiles)
    .pipe(prettify({
      config: '.jsbeautifyrc',
      mode: 'VERIFY_AND_WRITE'
    }))
    .pipe(gulp.dest('.'));
});

// Build sass
gulp.task('sass', function() {
  gulp.src('./source/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/custom/css'));
});

// Inject asset dependencies 
gulp.task('inject', ['sass'], function() {
  var wiredep = require('wiredep').stream;
  var inject = require('gulp-inject');

  var injectSrc = gulp.src(
    ['./public/custom/css/*.css', './public/custom/js/*.js'], {
      read: false
    }
  );

  var injectOptions = {
    ignorePath: '/public'
  };

  var options = {
    bowerJson: require('./bower.json'),
    directory: './public/lib',
    ignorePath: '../../../public'
  };

  return gulp.src('./app/views/layouts/*.hbs')
    .pipe(wiredep(options))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./app/views/layouts'));
});


// Node Server - run app
gulp.task('ns', ['inject'], function() {
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
    });
});
