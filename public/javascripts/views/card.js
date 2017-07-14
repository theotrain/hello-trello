var CardView = Backbone.View.extend({
  className: 'card',
  template: App.templates.card,
  labelTemplate: App.templates.label_in_card,
  events: {
    'click' : 'clickCard'
  },
  clickCard: function() {
    App.editCardWindowView(this.model);
  },
  attributes: function() {
    return {
      "data-id": this.model.get('id'),
    }
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.model.get('labels').forEach(function(idx) {
      var label = App.labelsColl.get(idx);
      this.$el.find('.card-labels').append(this.labelTemplate(label.toJSON()));
    }.bind(this));
    return this.el;
  },
  initialize: function() {
    this.model.view = this;
    this.render();
  },
});
