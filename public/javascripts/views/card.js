var CardView = Backbone.View.extend({
  className: 'card',
  template: App.templates.card,
  attributes: function() {
    return {
      "data-id": this.model.get('id'),
      // "contenteditable": true
    }
  },
  // events: {
  //   'click .btn-add': 'addToCart'
  // },

  render: function() {
    // var id = this.model.get('id');
    // this.$el.attr('data-id', id);
    this.$el.html(this.template(this.model.toJSON()));
    return this.el;
  },
  initialize: function() {
    // console.log('---listView model------')
    // console.dir(this.model);
    this.model.view = this;
    this.render();
  },
});
