var shell = require('shelljs');
var utils = require('./../libs/utils');

var GitClone = (function GitCloneWrapper() {
  function executeClone(argv, done) {
    var args = '';
    var repoNPath = argv._[1] + ' ' + (typeof argv._[2] === 'undefined' ? '' : argv._[2]);

    utils.log.info('Cloning your repository...');

    if (argv.b) {
      args = '-b ' + argv.b;
    } else {
      args = utils.prepareArguments(argv);
    }

    shell.exec('git clone ' + args + ' ' + repoNPath, {silent: true, async: true},
      function cloneFinished(exitCode, output) {
        if (!exitCode) {
          return done(null, output);
        }

        return done(exitCode, output);
      });
  }

  return {
    clone: executeClone
  };
})();

module.exports = GitClone;
