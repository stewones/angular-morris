 'use strict';
 var path = require('path');
 var gulp = require('gulp');
 var conf = require('./conf');

 var $ = require('gulp-load-plugins')({
     pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
 });

 gulp.task('doc-dev', ['doc-include-dev']);
 gulp.task('doc-pro', ['doc-include-pro']);

 gulp.task('doc-include-dev', ['inject', 'doc-markdown-dev'], function() {
     gulp.src([conf.paths.tmp + '/serve/doc/index.html'])
         .pipe($.fileInclude({
             prefix: '@@',
             basepath: '@file'
         }))
         .pipe(gulp.dest(conf.paths.tmp + '/serve/doc'));
 });

 gulp.task('doc-include-pro', ['doc-markdown-pro'], function() {
     gulp.src([conf.paths.dist + '/doc/index.html'])
         .pipe($.fileInclude({
             prefix: '@@',
             basepath: '@file'
         }))
         .pipe(gulp.dest(conf.paths.dist + '/doc'));
 });

 gulp.task('doc-markdown-dev', [], function() {
     return gulp.src('src/doc/partials/*.md')
         .pipe($.markdown())
         .pipe($.size())
         .pipe(gulp.dest(conf.paths.tmp + '/serve/doc/partials'));
 });

 gulp.task('doc-markdown-pro', ['html'], function() {
     return gulp.src('src/doc/partials/*.md')
         .pipe($.markdown())
         .pipe($.size())
         .pipe(gulp.dest(conf.paths.dist + '/doc/partials'));
 });