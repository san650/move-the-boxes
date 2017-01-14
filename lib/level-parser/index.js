/*jshint node:true*/
module.exports = {
  name: 'level-parser',

  isDevelopingAddon: function() {
    return true;
  },

  treeForPublic: function() {
    var Parser = require('./lib/broccoli-level-parser.js');

    return new Parser('levels');
  }
};
