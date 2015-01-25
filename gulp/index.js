'use strict';

var fs = require('fs');
var argv = require('yargs').argv;
var tasks = fs.readdirSync('./gulp/tasks/');

require('./config');

// allows you to use "--release" flag when executing a task
global.release = argv.release;

tasks.forEach(function (task) {
    require('./tasks/' + task);
});
