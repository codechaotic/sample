var require_dir = require('require-dir'),
    gulp_path = './_gulp/'

global.config = require(gulp_path + 'gulp.config')
global.helpers = require_dir(gulp_path + 'helpers/')

require_dir(gulp_path + 'tasks/',{recurse: true});
