/* global module */

module.exports = {
    watch: function (gulp, files, tasks) {
        tasks.forEach(function (t) {
            gulp.start(t);
        });

        console.log('Starting gulp-watch...');
        
        gulp.watch(files, tasks);
    }
};
