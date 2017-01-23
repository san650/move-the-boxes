/*jshint node:true*/
'use strict';

module.exports = humans;

function humans() {
  // See http://humanstxt.org/Standard.html for more information about
  // humans.txt format
  var team = require('../lib/git-users')();

  var thanks = [
    'Ember Montevideo Meetup (https://www.meetup.com/ember-montevideo)'
  ];

  var site = [
    'Standards: HTML5, CSS3, ES2015',
    'Components: EmberJS, node',
    'Software: VIM, ember-cli'
  ];

  var note = 'Made with ♥ by Santiago Ferreira';

  return {
    team: team,
    thanks: thanks,
    site: site,
    note: note
  };
}
