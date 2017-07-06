var BoardView = Backbone.View.extend({
  el: document.getElementById('board'),
  template: App.templates.board,
  events: {
    'click .add-list': 'addList'
  },
  addList: function(e) {
    console.log('add list');
    this.trigger('addList');
    // this.render();

    // App.initDraggable();
  },
  render: function() {
    this.$el.html(this.template(this.json));
  },
  initialize: function(json) {
    console.log('bard init json');
    console.log(json);
    this.json = json;
    this.render();
  }
});