'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var browserifyShim = require('browserify-shim');
var livereload = require('gulp-livereload');

module.exports = gulp.task('watchify', function () {

    var bundler = watchify(browserify(global.config.paths.src.modules));

    bundler.transform(browserifyShim);

    bundler.on('update', rebundle);

    function rebundle() {
        return bundler.bundle()
            .pipe(source(global.config.filenames.build.scripts))
            .pipe(gulp.dest(global.config.paths.dest.build.scripts))
            .pipe(livereload());
    }

    return rebundle();
});
