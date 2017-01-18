var Plugin = require('broccoli-plugin');
var path = require('path');
var fs = require('fs');

module.exports = LevelParser;

LevelParser.prototype = Object.create(Plugin.prototype);
LevelParser.prototype.constructor = LevelParser;

function LevelParser(inputNode, options) {
  options = options || {};
  Plugin.call(this, [inputNode], {
    annotation: options.annotation
  });
  this.options = options;
}

LevelParser.prototype.build = function() {
  var jsYamlFront = require('./js-yaml-front');
  var outputBuffer = [];
  var levelDir = this.inputPaths[0];
  var outputFile = path.join(this.outputPath, 'levels.json');
  var filenames = fs.readdirSync(levelDir);

  filenames.forEach((filename) => {
    var filePath = path.join(levelDir, filename);
    var metadata = jsYamlFront.loadFront(filePath, 'map');
    metadata.slug = /^\d{3}_(.*).txt$/.exec(filename)[1];

    outputBuffer.push(metadata);
  });

  fs.writeFileSync(outputFile, JSON.stringify(outputBuffer));
};

