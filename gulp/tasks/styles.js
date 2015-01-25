'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var nib = require('nib');

module.exports = gulp.task('styles', function () {

    var fileName = global.release ? global.config.filenames.release.styles : global.config.filenames.build.styles;
    var path = global.release ? global.config.paths.dest.release.styles : global.config.paths.dest.build.styles;

    return gulp.src(global.config.paths.src.styles)
        .pipe(sourcemaps.init())
        .pipe(gulpif(global.release, stylus({ use: [nib()], compress: true}), stylus({ use: [nib()]}) ))
        .pipe(sourcemaps.write('./')) // TODO: use external sourcemaps
        .pipe(rename(fileName))
        .pipe(gulp.dest(path))
        .pipe(livereload());

});
