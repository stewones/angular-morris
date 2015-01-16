 /**
  * stpa-modal provides a reusable way to do modal in AngularJS
  * check out documentation in http://modal.stpa.co
  *
  * Copyright © 2014 Stewan Pacheco <talk@stpa.co>
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the “Software”), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  * SOFTWARE.
  */
 'use strict';

 var gulp = require('gulp');
 var fileinclude = require('gulp-file-include');
 var $ = require('gulp-load-plugins')({
     pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
 });


 gulp.task('build', [
     'build:dist'
 ]);

 gulp.task('build:dist', [
     'build:serve',
     'build:vendor',
 ]);
 gulp.task('build:serve', [
     'wiredep',
     'markdown',
     'include',
     'css',
     'js',
     'cname',
     'source-min',
     'source-copy',
     'source-readme',
     'source-clean-partials'
 ]);

 gulp.task('markdown', ['wiredep'], function() {
     return gulp.src('src/doc/_partials/*.md')
         .pipe($.markdown())
         .pipe($.size())
         .pipe(gulp.dest('src/doc/_partials'));
 });

 gulp.task('source-min', ['markdown'], function() {
     return gulp.src('src/angular-morris-chart.js')
         .pipe($.ngAnnotate())
         .pipe($.uglify({
             preserveComments: $.uglifySaveLicense
         }))
         .pipe($.stripDebug())
         .pipe($.rename("angular-morris-chart.min.js"))
         .pipe($.size())
         .pipe(gulp.dest('./src'));
 });

 gulp.task('source-copy', ['source-min'], function() {
     return gulp.src(['src/angular-morris-chart.js', 'src/angular-morris-chart.min.js'])
         .pipe(gulp.dest('dist/doc/js'));
 });

 gulp.task('source-readme', ['source-copy'], function() {
     return gulp.src(['src/doc/_partials/install.md'])
         .pipe($.rename("README.md"))
         .pipe(gulp.dest('./'));
 });


 gulp.task('include', ['markdown'], function() {
     gulp.src(['src/doc/index.html'])
         .pipe(fileinclude({
             prefix: '@@',
             basepath: '@file'
         }))
         .pipe(gulp.dest('dist/doc'));
 });



 gulp.task('css', ['include'], function() {
     return gulp.src('src/doc/css/**/*')
         .pipe(gulp.dest('dist/doc/css'));
 });

 gulp.task('js', ['include'], function() {
     return gulp.src('src/doc/js/**/*')
         .pipe(gulp.dest('dist/doc/js'));
 });

 gulp.task('cname', ['include'], function() {
     return gulp.src('CNAME')
         .pipe(gulp.dest('dist/doc'));
 });

 gulp.task('clean', function(done) {
     $.del(['.tmp', 'dist'], done, {
         force: true
     });
 });

 gulp.task('source-clean-partials', ['cname'], function(done) {
     $.del(['src/doc/_partials/**/*.html'], done, {
         force: true
     });
 });

 gulp.task('build:vendor', ['source-clean-partials'], function() {
     var jsFilter = $.filter('**/*.js');
     var cssFilter = $.filter('**/*.css');
     var assets;
     return gulp.src('dist/doc/index.html')
         .pipe(assets = $.useref.assets())
         .pipe($.rev())
         .pipe(jsFilter)
         .pipe($.ngAnnotate())
         .pipe($.uglify({
             preserveComments: $.uglifySaveLicense
         }))
         .pipe(jsFilter.restore())
         .pipe(cssFilter)
         .pipe($.csso())
         .pipe(cssFilter.restore())
         .pipe(assets.restore())
         .pipe($.useref())
         .pipe($.revReplace())
         .pipe(gulp.dest('dist/doc'))
         .pipe($.size());
 });