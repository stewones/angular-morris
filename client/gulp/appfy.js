/**
 * Appfy is a JavaScript toolkit that saves your time to build Single Page Applications. It totally modular and based on MEAN stack concept.
 * 
 * Software licensed under MIT, maintained by Appfy Co and its contributors. Feel free to open an issue or make a PR.
 * Check out documentation and full list of contributors in https://github.com/Appfy
 *
 * Copyright © 2016 Appfy Co <help@appfy.org>
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
 **/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var args = require('yargs').argv;
var ngConstant = require('gulp-angular-constant');
var rename = require("gulp-rename");
var path = require('path');
var conf = require('./conf');
var browserSync = require('browser-sync');
var _ = require('lodash');
var gulpDocs = require('gulp-ngdocs');
var colors = require('colors');

gulp.task('appfy', ['enviroment', 'settings']);
//enviroment config constants
gulp.task('enviroment', function () {
    var config = require('../../appfy.json');
    var env = args.env || 'development';
    var envConfig = config.server[env];
    return ngConstant({
        name: 'appfy.enviroment',
        constants: envConfig,
        stream: true
    }).pipe($.uglify({
        preserveComments: $.uglifySaveLicense
    })).pipe(rename('appfy.enviroment.constant.js')).pipe(gulp.dest('./src/app/constants'));
});

//app settings constants
gulp.task('settings', function () {
    var config = require('../../appfy.json');
    return ngConstant({
        name: 'appfy.setting',
        constants: config.client,
        stream: true
    }).pipe($.uglify({
        preserveComments: $.uglifySaveLicense
    })).pipe(rename('appfy.setting.constant.js')).pipe(gulp.dest('./src/app/constants'));
});

//client docs
gulp.task('docs-client', function () {
    var options = {
        html5Mode: true,
        startPage: '/api',
        title: "Client API",
        image: "logo.svg",
        imageLink: "https://github.com/Appfy/appfy",
        titleLink: "/api",
        styles: ['appfy.css']
    }
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        .pipe(gulpDocs.process(options))
        .pipe(gulp.dest('../docs/client'));
});


//client dist build
gulp.task('build-client', ['lib-js', 'lib-js-min', 'lib-css', 'copy-bower'], function () {
    console.log('----------'.green);
    console.log('Build done'.green);
    console.log('----------'.green);
});
var buildClientSrc = [
    path.join(conf.paths.src, '/app/core/**/*.module.js'),
    path.join(conf.paths.src, '/app/core/**/*.js'),
    path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'),
    path.join('!' + conf.paths.src, '/app/core/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/app/core/**/*.mock.js')
];
gulp.task('lib-js-min', [], function () {
    return gulp.src(buildClientSrc)
        .pipe($.ngAnnotate())
        .pipe($.concat('appfy.min.js'))
        .pipe($.uglify({
            preserveComments: $.uglifySaveLicense
        }))
        .pipe($.size())
        .pipe(gulp.dest(path.join(conf.paths.build, '/client')));
});
gulp.task('lib-js', ['partials'], function () {
    var partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), {
        read: false
    });
    var partialsInjectOptions = {
        starttag: '<!-- inject:partials -->',
        ignorePath: path.join(conf.paths.tmp, '/partials'),
        addRootSlash: false
    };
    return gulp.src(buildClientSrc)
        //.pipe($.ngAnnotate())
        .pipe($.concat('appfy.js'))
        // .pipe($.uglify({
        //     preserveComments: $.uglifySaveLicense
        // }))
        .pipe($.size()).pipe(gulp.dest(path.join(conf.paths.build, '/client')));
});
gulp.task('lib-css', [], function () {
    return gulp.src([
        path.join(conf.paths.src, '/app/core/**/*.css')
    ]).pipe($.concat('appfy.css')).pipe($.size()).pipe(gulp.dest(path.join(conf.paths.build, '/client')));
});

gulp.task('copy-bower', function () {
    return gulp.src([
        path.join(conf.paths.src, '/../bower.json')
    ]).pipe(gulp.dest('../'));
});