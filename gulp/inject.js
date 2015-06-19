'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'stream-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var wiredep = require('wiredep').stream;
var _ = require('lodash');


gulp.task('inject', ['scripts', 'styles'], function() {
    var injectStyles = gulp.src([
        path.join(conf.paths.tmp, '/serve/doc/**/*.css'),
        path.join(conf.paths.src, '/doc/**/*.css'), //inject components
        //path.join('!' + conf.paths.tmp, '/serve/doc/vendor.css')
    ], {
        read: false
    });


    var injectScripts = gulp.src([
        path.join(conf.paths.src, '/**/*.module.js'),
        path.join(conf.paths.src, '/**/*.js'),
        path.join('!' + conf.paths.src, '/**/*.spec.js'),
        path.join('!' + conf.paths.src, '/**/*.mock.js')
    ]).pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));


    var injectLibScripts = gulp.src([
        path.join(conf.paths.src, '/lib/**/*.module.js'),
        path.join(conf.paths.src, '/lib/**/*.js'),
        path.join('!' + conf.paths.src, '/lib/**/*.spec.js'),
        path.join('!' + conf.paths.src, '/lib/**/*.mock.js')

    ]).pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));


    var injectDocScripts = gulp.src([
        path.join(conf.paths.src, '/doc/**/*.js'),

        path.join('!' + conf.paths.src, '/doc/**/*.spec.js'),
        path.join('!' + conf.paths.src, '/doc/**/*.mock.js')

    ])
        .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));


    var injectOptions = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve/doc')],
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/doc/*.html'))
        .pipe($.inject(injectStyles, injectOptions))
        //.pipe($.inject(injectScripts, injectOptions))
        .pipe($.inject($.streamSeries(injectLibScripts, injectDocScripts), injectOptions))
        .pipe(wiredep(_.extend({
            exclude: [/angular-mocks/]
        }, conf.wiredep)))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/doc')));
});