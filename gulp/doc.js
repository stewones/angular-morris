 'use strict';
 var path = require('path');
 var gulp = require('gulp');
 var conf = require('./conf');

 var $ = require('gulp-load-plugins')({
     pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
 });

 gulp.task('doc', ['doc-include']);


 gulp.task('doc-include', ['inject','doc-markdown'], function() {
     gulp.src([conf.paths.tmp + '/serve/doc/index.html'])
         .pipe($.fileInclude({
             prefix: '@@',
             basepath: '@file'
         }))
         .pipe(gulp.dest(conf.paths.tmp + '/serve/doc'));
 });

 gulp.task('doc-markdown', [], function() {
     return gulp.src('src/doc/partials/*.md')
         .pipe($.markdown())
         .pipe($.size())
         .pipe(gulp.dest(conf.paths.tmp + '/serve/doc/partials'));
 });