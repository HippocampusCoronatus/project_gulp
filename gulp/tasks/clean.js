const gulp = require('gulp');
const del = require('del');
const config = require('../config').clean;

// config.targetを削除する
gulp.task('clean', function() {
    return del.sync([config.target]);
});
