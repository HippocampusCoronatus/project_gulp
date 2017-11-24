const gulp = require('gulp');
const runSequence = require('run-sequence');
const webpackStream = require("webpack-stream");
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

// config.js.srcのファイルをバンドルし、config.js.destに出力する
gulp.task('webpack', function() {
    return gulp.src([config.js.src])
    .pipe(webpackStream( {
      config: require(config.webpack)
    }))
    .pipe(gulp.dest(config.js.dest));
});
