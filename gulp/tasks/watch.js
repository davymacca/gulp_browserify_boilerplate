'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

module.exports = gulp.task('watch', function () {

    livereload.listen(global.config.ports.livereloadServer);

    gulp.watch(global.config.paths.src.scripts, ['lint']);
    gulp.watch(global.config.paths.src.index, ['index']);
    gulp.watch(global.config.paths.src.stylesGlob, ['styles']);

    // TODO add some watches for images and assets
});
