'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles', function () {

  var lessOptions = {
    options: [
      'bower_components',
      path.join(conf.paths.src, '/doc')
    ]
  };


  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/doc/**/*.less'),
    path.join('!' + conf.paths.src, '/doc/index.less'),
    path.join('!' + conf.paths.src, '/doc/vendor.less')
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(path.join(conf.paths.src, '/doc/'), '');
      return '@import \'' + filePath + '\';';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  var indexFilter = $.filter('index.less');
  var vendorFilter = $.filter('vendor.less');


  return gulp.src([
    path.join(conf.paths.src, '/doc/index.less'),
    path.join(conf.paths.src, '/doc/vendor.less')
  ])
    .pipe(indexFilter)
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(indexFilter.restore())
    .pipe(vendorFilter)
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(vendorFilter.restore())

    .pipe($.sourcemaps.init())

    .pipe($.less(lessOptions)).on('error', conf.errorHandler('Less'))

    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())

    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/doc/')))
    .pipe(browserSync.reload({ stream: true }));
});
