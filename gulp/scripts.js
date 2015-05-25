'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();



gulp.task('scripts', function() {

    return gulp.src([
        path.join(conf.paths.src, '/**/*.js'),
        path.join('!' + conf.paths.src, '/angular-morris-chart.min.js'),
        path.join('!' + conf.paths.src, '/angular-morris-chart.js')
    ])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))

    .pipe(browserSync.reload({
        stream: true
    }))
        .pipe($.size());
});