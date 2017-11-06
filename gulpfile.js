/* global require */

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    gulpWatchNow = require('./src/index.js');

gulp.task('scripts', function () {
    return gulp.src('src/index.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts-debug', function () {
    return gulp.src('src/index.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);

gulp.task('debug', ['scripts-debug']);

gulp.task('develop', function() {
    gulpWatchNow.watch(gulp, [
        'src/index.js'
    ], [
        'scripts-debug'
    ]);
});
