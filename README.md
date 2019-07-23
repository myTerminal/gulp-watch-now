# gulp-watch-now

[![npm version](https://badge.fury.io/js/gulp-watch-now.svg)](https://badge.fury.io/js/gulp-watch-now)
[![npm downloads](https://img.shields.io/npm/dt/gulp-watch-now.svg)](https://www.npmjs.com/package/gulp-watch-now)  
[![Build Status](https://travis-ci.org/myTerminal/gulp-watch-now.svg?branch=master)](https://travis-ci.org/myTerminal/gulp-watch-now)
[![Code Climate](https://codeclimate.com/github/myTerminal/gulp-watch-now.png)](https://codeclimate.com/github/myTerminal/gulp-watch-now)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/gulp-watch-now.svg)](https://coveralls.io/r/myTerminal/gulp-watch-now?branch=master)  
[![Dependency Status](https://david-dm.org/myTerminal/gulp-watch-now.svg)](https://david-dm.org/myTerminal/gulp-watch-now)
[![devDependency Status](https://david-dm.org/myTerminal/gulp-watch-now/dev-status.svg)](https://david-dm.org/myTerminal/gulp-watch-now#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/gulp-watch-now/peer-status.svg)](https://david-dm.org/myTerminal/gulp-watch-now#info=peerDependencies)  
[![License](https://img.shields.io/github/license/myTerminal/ample-alerts.svg)](https://opensource.org/licenses/MIT)  
[![NPM](https://nodei.co/npm/gulp-watch-now.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-watch-now/)

A wrapper around *gulp-watch* with added features

> Note: Not compatible with Gulp 4!

## Installation

*gulp-watch-now* is available on *Npm*. You can add it to your Node.js project with a simple command.

    npm install gulp-watch-now

## How to Use

'Require' *gulp-watch-now* into a variable and use it almost as you would use *gulp-watch*, passing in an array of files to watch and an array of tasks to run for changes in those files. You just have to pass the instance of `gulp` as the first parameter.

    gulp.task('develop', function () {
        gulpWatchNow.watch(gulp, [
            'src/index.js'
        ], [
            'scripts-debug'
        ]);
    });

The only motivation to use an extra package (this) and not use the already-available *gulp-watch* is that unlike the latter, the former runs all the supplied tasks once first and then every time the files in the specified patterns are changed. The latter only does it on file changes.
