var BoardModel = Backbone.Model.extend({
  createLists: function(listsArray) {
    var lc = new ListCollection();
    listsArray.forEach(function(idx) {
      lc.add(App.listsColl.findWhere({ id: idx }));
    });
    this.set('lists', lc);
  },
  updateAfterDrop: function($el) {
    var listsArray = [];
    $('.list').each(function(idx,div){
      listsArray.push(+$(div).attr('data-id'));
    });
    this.unset('lists');
    this.createLists(listsArray);
  },
  addList: function(name) {
    this.get('lists').add({
      id: App.nextListId,
      name: name
    });

    App.listsColl.add({
      id: App.nextListId,
      name: name
    });

    App.nextListId += 1;

    App.boardView();
    App.initDraggable();
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
    return {name: this.get('name'), lists: this.listsArray()}
  },
  initialize: function(json) {
    this.set('name', json.name);
    this.createLists(json.lists);
  }
})