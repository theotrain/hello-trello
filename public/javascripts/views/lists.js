var ListsView = Backbone.View.extend({
  attributes: {
    'id': "list-container",  
  },
  render: function() {
    $('#list-container').html('');
    this.collection.each(this.renderList.bind(this));
    var addListView = new AddListView();
    $('#list-container').append(addListView.el);
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
