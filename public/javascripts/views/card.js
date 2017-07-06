var CardView = Backbone.View.extend({
  className: 'card',
  template: App.templates.card,
  attributes: function() {
    return {
      "data-id": this.model.get('id'),
    }
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this.el;
  },
  initialize: function() {
    this.model.view = this;
    this.render();
  },
});
