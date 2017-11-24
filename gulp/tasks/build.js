const gulp = require('gulp');
const runSequence = require('run-sequence');
const webpackStream = require("webpack-stream");
const plumber = require('gulp-plumber');
const notify  = require('gulp-notify');
const config = require('../config').build;

// clean, copy, webpackの順にタスクを実行する
gulp.task('build', function(callback) {
    runSequence([
        'clean',
        'copy',
        'webpack'],
        callback
    );
});

// config.srcのファイルをバンドルし、config.destに出力する
gulp.task('webpack', function() {
    return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(webpackStream( {
      config: require(config.webpack)
    }))
    .pipe(gulp.dest(config.dest));
});
