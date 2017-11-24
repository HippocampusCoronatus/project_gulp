(function () {
    'use strict';

    const Hello = require('./components/Hello');

    let hello = new Hello();

    document.write(hello.message);
})();
