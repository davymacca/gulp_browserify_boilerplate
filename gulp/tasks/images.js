'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');

module.exports = gulp.task('images', function () {

    var path = global.release ? global.config.paths.dest.release.images : global.config.paths.dest.build.images;

    return gulp.src(global.config.paths.src.images)
        .pipe(gulpif(global.release, imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest(path));

});
