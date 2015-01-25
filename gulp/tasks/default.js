'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('default', function () {

        if (global.release) {
            // Run tasks for release
            console.log('::: Release Build :::');

            runSequence(
                'clean',
                ['index', 'styles', 'images', 'assets', 'lint'],
                'browserify',
                ['minify', 'server']
            );
        } else {
            // Run tasks for dev
            console.log('::: Dev Build :::');

            runSequence(
                'clean',
                ['index', 'styles', 'images', 'assets', 'lint'],
                ['watchify', 'watch', 'server']
            );
        }

});
