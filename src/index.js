/* global module */

module.exports.watch = (gulp, files, tasks) => {
    tasks.forEach(t => { gulp.start(t); });

    console.log('Starting gulp-watch...');

    gulp.watch(files, tasks);
};
