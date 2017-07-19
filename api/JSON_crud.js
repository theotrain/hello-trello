var path = require('path'),
    fs = require('fs'),
    file_path = path.resolve(path.dirname(__dirname), 'data/board.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  },

  get: function() {
    return this.__readFile();
  },

  set: function(board_json_string) {
    fs.writeFileSync(file_path, JSON.stringify(board_json_string, null, 2), 'utf8', 4);
  }

};