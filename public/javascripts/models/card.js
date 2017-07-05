var CardModel = Backbone.Model.extend({
  defaults: {
    title: 'this is a default card',
    description: 'default description'
  },
  initialize: function(options) {
    this.set('comments', new CommentCollection(options.comments || []));
    this.set('labels', new LabelCollection(options.labels || []));
  }
});