var path = require('path'),
    express = require('express'),
    router = express.Router(),
    board_connect = require(path.resolve(path.dirname(__dirname), 'api/JSON_crud'));


router.get('/', function(req, res) {
  res.render('index', { board: board_connect.get() });
});


router.post('/save', function(req, res) {
  board_connect.set(JSON.stringify(req.body));
  res.end();
});


module.exports = router;
