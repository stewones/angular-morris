'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['inject'], function() {
    //watch doc
    gulp.watch([path.join(conf.paths.src, '/doc/partials/**/*.md')], ['watch','doc-dev']);
    gulp.watch([path.join(conf.paths.src, '/**/*.html'), 'bower.json'], ['inject']);


    gulp.watch([
        path.join(conf.paths.src, '/doc/**/*.css'),
        path.join(conf.paths.src, '/doc/**/*.less')
    ], function(event) {

        if (isOnlyChange(event)) {
            gulp.start('styles');
            browserSync.reload(event.path);
        } else {
            gulp.start('inject');
        }
    });



    gulp.watch(path.join(conf.paths.src, '/**/*.js'), function(event) {
        if (isOnlyChange(event)) {
            gulp.start('scripts');
        } else {
            gulp.start('inject');
        }
    });


    gulp.watch(path.join(conf.paths.src, '/doc/**/*.html'), function(event) {
        browserSync.reload(event.path);
    });
});