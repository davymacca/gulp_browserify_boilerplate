'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = gulp.task('minify', function () {

    return gulp.src(global.config.paths.dest.release.scripts + '/' + global.config.filenames.release.scripts)
        .pipe(uglify())
        .pipe(gulp.dest(global.config.paths.dest.release.scripts));

});
