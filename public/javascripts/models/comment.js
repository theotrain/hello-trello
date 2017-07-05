var CommentModel = Backbone.Model.extend({
  defaults: {
    body: 'this is a comment',
    date: Date.now()
  }
});