const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify  = require('gulp-notify');
const config = require('../config').copy;

// config.targetのファイルをconfig.destにコピーする
gulp.task('copy', function() {
    return gulp.src(config.target, {base: config.src})
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulp.dest(config.dest));
});
