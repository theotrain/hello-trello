var BoardView = Backbone.View.extend({
  el: document.getElementById('board'),
  template: App.templates.board,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  refresh: function(json) {
    this.$el.html(this.template(json));
  },
  initialize: function(model) {
    this.model = model;
    this.render();
  }
});