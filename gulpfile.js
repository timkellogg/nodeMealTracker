var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var prettify = require('gulp-jsbeautifier');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var handlebars = require('gulp-handlebars');
var shell = require('gulp-shell');
var mocha = require('gulp-mocha');
var util = require('gulp-util');

var jsFiles = ['*.js', 'app/**/*.js', 'config/**/*.js', 'source/*'];

// Runs server, compiles assets, injects dependencies and fixes errors
gulp.task('default', ['ns']);

// Format assets, get jshint errors
gulp.task('prepare', ['fj', 'style']);

// Rollback migrations; runs migrations, re-seeds db
gulp.task('reset', shell.task([
  'knex migrate:rollback',
  'knex migrate:latest',
  'knex seed:run'
]));

// Get js hint 
gulp.task('style', function() {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
      verbose: true
    }));
});

// Fix js style errors
gulp.task('fj', function() {
  return gulp.src(jsFiles, {
      base: './'
    })
    .pipe(prettify({
      config: '.jsbeautifyrc',
      mode: 'VERIFY_AND_WRITE'
    }))
    .pipe(gulp.dest('.'));
});

// Convert sass to css
gulp.task('sass', function() {
  return gulp.src('./source/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/custom/css'));
});

// Compile js using babel 
gulp.task('babel', function() {
  return gulp.src('./source/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./public/custom/js'));
});

// Inject asset dependencies 
gulp.task('inject', ['sass', 'babel'], function() {
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
