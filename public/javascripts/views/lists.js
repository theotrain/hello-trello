var ListsView = Backbone.View.extend({
  render: function() {
    this.collection.each(this.renderList.bind(this));
    $('#list-container').append('<div class="list-wrapper nodrag"><button class="add-list">Add a list...</button></div>');
  },
  renderList: function(list) {
    // console.log('renderList');
    var listView = new ListView({
      model: list
    });
    $('#list-container').append(listView.el);
  },
  initialize: function() {
    this.render();
  }
});
