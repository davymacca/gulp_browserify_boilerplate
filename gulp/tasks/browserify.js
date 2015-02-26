'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserifyShim = require('browserify-shim');
var watchify = require('watchify');
var livereload = require('gulp-livereload');

module.exports = gulp.task('browserify', function () {

    return browserify({
        entries: [global.config.paths.src.modules]
    })
    .transform(browserifyShim)
    .bundle()
    .pipe(source(global.config.filenames.release.scripts))
    .pipe(gulp.dest(global.config.paths.dest.release.scripts));

});
