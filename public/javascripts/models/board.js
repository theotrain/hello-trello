var BoardModel = Backbone.Model.extend({
  defaults: {
    name: 'default board name'
  },
  createLists: function(listsArray) {
    var lc = new ListCollection();
    listsArray.forEach(function(idx) {
      lc.add(App.listsColl.findWhere({ id: idx }));
    });
    this.set('lists', lc);
    // this.storeJSON = this.toJSON();
  },
  updateAfterDrop: function($el) {
    // console.log('BOARD: update after drop');
    var listsArray = [];
    $('.list').each(function(idx,div){
      // console.log(cardDiv.attr('data-id'));
      listsArray.push(+$(div).attr('data-id'));
    });
    // console.log(listsArray);
    this.unset('lists');
    this.createLists(listsArray);
  },
  listsArray: function() {
    var listsArr = [],
        lists = this.get('lists');

    lists.each(function(list) {
      listsArr.push(list.get('id'));
    });
    return listsArr;
  },
  toJSON: function() {
    // return 7;
    return {name: this.get('name'), lists: this.listsArray()}
  },
  initialize: function(json) {
    this.set('name', json.name);
    this.createLists(json.lists);
  }
})