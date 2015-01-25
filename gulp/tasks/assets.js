'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

module.exports = gulp.task('assets', function () {

    var path = global.release ? global.config.paths.dest.release.assets : global.config.paths.dest.build.assets;
    return gulp.src(global.config.paths.src.assets).pipe(gulp.dest(path));

});
