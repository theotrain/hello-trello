var CardModel = Backbone.Model.extend({
  defaults: {
    title: '',
    description: '',
    due: null,
    labels: [],
    comments: []
  },
  triggerChange: function() {
    this.trigger('change');
  },
  initialize: function(options) {
    this.set('comments', new CommentCollection(options.comments || []));
    this.listenTo(this.get('comments'), 'all', this.triggerChange);
    this.listenTo(this.get('labels'), 'all', this.triggerChange);
  }
});