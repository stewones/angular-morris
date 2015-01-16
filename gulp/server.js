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

 var util = require('util');

 var browserSync = require('browser-sync');

 var middleware = require('./proxy');

 function browserSyncInit(baseDir, files, browser) {
     browser = browser === undefined ? 'default' : browser;
     var routes = null;
     console.log(typeof baseDir);

     if (baseDir === 'dist' || (util.isArray(baseDir) && baseDir.indexOf('dist') !== -1)) {
         routes = {
             // Should be '/bower_components': '../bower_components'
             // Waiting for https://github.com/shakyShane/browser-sync/issues/308
             '/bower_components': 'bower_components'
         };
     }

     browserSync.instance = browserSync.init(files, {
         startPath: '/doc',
         server: {
             baseDir: baseDir,
             middleware: middleware,
             routes: routes
         },
         browser: browser
     });

 }

 gulp.task('serve', ['watch'], function() {
     browserSyncInit([
         'dist'
     ], [
         'dist/**/*',
     ]);
 });

 gulp.task('serve:dist', ['build:dist'], function() {
     browserSyncInit(
         'dist'
     );
 });