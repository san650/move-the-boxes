const execSync = require('child_process').execSync;
const path = require('path');
const options = {
  cwd: path.resolve(__dirname, '..')
};

module.exports = getUsers;

function getUsers() {
  var stdout = execSync('./bin/git-users.sh', options);

  return String(stdout).trim().split('\n');
}
