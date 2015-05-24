'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});


gulp.task('html', ['inject'], function() {

    var htmlFilter = $.filter('**/*.html');
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');
    var assets;

    return gulp.src(path.join(conf.paths.tmp, '/serve/doc/**/*.html'))
        .pipe(assets = $.useref.assets())
        .pipe($.rev())
        .pipe(jsFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify({
            preserveComments: $.uglifySaveLicense
        })).on('error', conf.errorHandler('Uglify'))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)

    .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true,
            conditionals: true
        }))
        .pipe(htmlFilter.restore())
        .pipe(gulp.dest(path.join(conf.paths.dist, '/doc')))
        .pipe($.size({
            title: path.join(conf.paths.dist, '/'),
            showFiles: true
        }));
});
// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
gulp.task('fonts', function() {
    return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});
gulp.task('other', function() {
    return gulp.src([
        path.join(conf.paths.src, '/**/*'),
        path.join('!' + conf.paths.src, '/**/*.{html,css,js,less}')
    ])
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

gulp.task('clean', function(done) {
    $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')], done);
});
gulp.task('build', ['html', 'fonts', 'other','doc-pro']);