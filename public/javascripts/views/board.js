var BoardView = Backbone.View.extend({
  el: document.getElementById('board'),
  template: App.templates.board,
  render: function() {
    this.$el.html(this.template(this.json));
  },
  initialize: function(json) {
    this.json = json;
    this.render();
  }
});