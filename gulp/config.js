const path = {
    sourceDir: 'src/',
    buildDir: 'build/'
};

const build = {
    js: {
        src: path.sourceDir + 'js/**', //入力元
        dest: path.buildDir + 'js/' // 出力先
    },
    // buildタスクからの位置関係を指定する
    webpack: '../../webpack.config.js'
};

const clean = {
    target: path.buildDir + '**/'
};

const copy = {
    target: [
      path.sourceDir + 'html/**',
      path.sourceDir + 'css/**',
      path.sourceDir + 'images/**'
    ],
    src: path.sourceDir,
    dest: path.buildDir
}

module.exports = {
    build: build,
    clean: clean,
    copy: copy
};
