'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
var minifyHTML = require('gulp-minify-html');

module.exports = gulp.task('index', function () {

    var path = global.release ? global.config.paths.dest.release.index : global.config.paths.dest.build.index;

    return gulp.src(global.config.paths.src.index)
        .pipe(gulpif(global.release, minifyHTML({comments: true, empty: true, spare: true, quotes: true})))
        .pipe(gulpif(global.release,
            replace('<!--styles-->', '<link href="' + global.config.filenames.release.styles + '" rel="stylesheet">'),
            replace('<!--styles-->', '<link href="' + global.config.filenames.build.styles + '" rel="stylesheet">')
        ))
        .pipe(gulpif(global.release,
            replace('<!--scripts-->', '<script src="' + global.config.filenames.release.scripts + '"></script>'),
            replace('<!--scripts-->', '<script src="' + global.config.filenames.build.scripts + '"></script>')
        ))
        .pipe(gulp.dest(path));

});
