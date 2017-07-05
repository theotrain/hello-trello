var path = require('path'),
    fs = require('fs'),
    file_path = path.resolve(path.dirname(__dirname), 'data/lists.json');

module.exports = {
  __readFile: function() {
    return JSON.parse(fs.readFileSync(file_path, 'utf8'));
  },

  // getLastID: function() {
  //   return this.__readFile().last_id;
  // },

  get: function() {
    return this.__readFile();
  },

  set: function(board_json_string) {
    fs.writeFileSync(file_path, board_json_string, 'utf8');
  }

};