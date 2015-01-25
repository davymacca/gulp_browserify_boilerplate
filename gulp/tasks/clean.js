'use strict';

var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

module.exports = gulp.task('clean', function () {

    var path = global.release ? global.RELEASE_FOLDER : global.BUILD_FOLDER;
    return gulp.src(path, {read: false}).pipe(rimraf());

});
