var ListsView = Backbone.View.extend({
  attributes: {
    'id': "list-container",  
  },
  render: function() {
    this.collection.each(this.renderList.bind(this));
    var addListView = new AddListView();
    $('#list-container').append(addListView.el);
    // $('#list-container').append('<div class="list-wrapper nodrag"><button class="add-list">Add a list...</button></div>');
  },
  renderList: function(list) {
    var listView = new ListView({
      model: list
    });
    $('#list-container').append(listView.el);
  },
  initialize: function() {
    this.render();
  }
});
