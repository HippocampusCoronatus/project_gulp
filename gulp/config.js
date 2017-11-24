const path = {
    sourceDir: 'src/',
    buildDir: 'build/'
};

const build = {
    src: [
      path.sourceDir + 'js/**',
      path.sourceDir + 'css/**'
    ], //入力元
    dest: path.buildDir, // 出力先
    // buildタスクからの位置関係を指定する
    webpack: '../../webpack.config.js'
};

const clean = {
    target: path.buildDir + '**/'
};

const copy = {
    target: [
      path.sourceDir + 'html/**',
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
