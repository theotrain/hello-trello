var path = require('path'),
    express = require('express'),
    router = express.Router(),
    // _ = require('underscore'),
    board_connect = require(path.resolve(path.dirname(__dirname), 'api/JSON_board_crud'));
    // cards_connect = require(path.resolve(path.dirname(__dirname), 'api/JSON_cards_crud'));
    // lists_connect = require(path.resolve(path.dirname(__dirname), 'api/JSON_lists_crud'));

// function getAlbums() {
//   return JSON.parse(fs.readFileSync(file_path, 'utf8')).data;
// }

    // board_json: {name:'junk', lists: 'bullshit string'}

// router.route('/').get(function(req, res) {
//   res.render('index', {
//     // boardJSON: 'garbase'
//   });
// });

//board_connect.get()

router.get('/', function(req, res) {
  res.render('index', { board: board_connect.get() });
});

// router.get('/', function(req, res) {
//   // res.send('hello there / yall: ' + JSON.stringify(board_connect.get()));
//   res.send('hello there / yall: ' + JSON.stringify(board_connect.get()));
// });

module.exports = router;
