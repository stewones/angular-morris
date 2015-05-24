'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();

gulp.task('markups', function() {
  function renameToHtml(path) {
    path.extname = '.html';
  }

  return gulp.src(paths.src + '/{app,components}/**/*.jade')
    .pipe($.consolidate('jade', { pretty: '  ' }))
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    .pipe($.rename(renameToHtml))
    .pipe(gulp.dest(paths.tmp + '/serve/'));
});
