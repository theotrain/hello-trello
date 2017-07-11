var EditCardWindow = Backbone.View.extend({
  el: $('#modal'),
  events: {
    'click div.close' : 'unRender',
    'click div.modal' : 'unRender'
  },
  render: function() {
    this.$el.html(App.templates.edit_card_window(this.model.toJSON()));
  },
  unRender: function() {
    // console.log('unrender');
    this.$el.html('');
  },
  initialize: function() {
    this.render();
    // console.log(this.model);
    // console.log(this.model.toJSON());
  }
});