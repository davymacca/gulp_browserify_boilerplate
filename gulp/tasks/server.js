'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

module.exports = gulp.task('server', function (next) {

    var path = global.release ? global.RELEASE_FOLDER : global.BUILD_FOLDER;

    connect.server({
        root: path,
        port: global.config.ports.staticServer,
        livereload: true
    });

});
