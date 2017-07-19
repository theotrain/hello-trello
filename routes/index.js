var path = require('path'),
    express = require('express'),
    _ = require('underscore'),
    router = express.Router(),
    board_connect = require(path.resolve(path.dirname(__dirname), 'api/JSON_crud'));


router.get('/', function(req, res) {
  res.render('index', { board: board_connect.get() });
});


// router.post('/save', function(req, res) {
//   board_connect.set(JSON.stringify(req.body));
//   res.send({"der ntwoord": "the answer"});
//   // res.end();
// });

router.post('/save', function(req, res) {
  var data = board_connect.get();

  if (req.body.card) {
    data.cards.nextId = req.body.nextCardId;
    data.cards.collection = removeId(data.cards.collection, req.body.card.id);
    data.cards.collection.push(req.body.card);
  }
  if (req.body.list) {
    data.lists = removeId(data.lists, req.body.list.id);
    data.lists.push(req.body.list);
  }
  if (req.body.lists) {
    data.lists = req.body.lists;
  }
  if (req.body.board) {
    data.board = req.body.board;
  }
  board_connect.set(data);
  res.end();
});

router.post('/delete', function(req, res) {
  // to remove list, send listID and board
  // to remove card, send cardID and list

  var data = board_connect.get();

  if (req.body.cardID) {
    data.cards.collection = removeId(data.cards.collection, req.body.cardID);
    data.lists = removeId(data.lists, req.body.list.id);
    data.lists.push(req.body.list);
  }
  if (req.body.listID) {
    data.lists = removeId(data.lists, req.body.listID);
    data.board = req.body.board;
  }
  board_connect.set(data);
  res.end();
});

removeId = function(array, id) {
  return _.without(array, _.findWhere(array, {
    id: id
  }));
}


module.exports = router;



