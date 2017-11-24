const gulp = require('gulp');
const config = require('../config').copy;

// config.targetのファイルをconfig.destにコピーする
gulp.task('copy', function() {
    return gulp.src(config.target, {base: config.src})
    .pipe(gulp.dest(config.dest));
});
