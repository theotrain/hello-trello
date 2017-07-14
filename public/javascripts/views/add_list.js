var AddListView = Backbone.View.extend({
  className: 'list-wrapper nodrag',
  template: App.templates.add_list,
  events: {
    'click button.add-list': 'addListForm',
    'click button.add': 'addList',
    'click .remove': 'removeListForm'
  },
  addListForm: function() {
    $('.add-list').hide();
    $('.add-list-form').show();
  },
  removeListForm: function() {
    $('.add-list').show();
    $('.add-list-form').hide();
  },
  addList: function(e) {
    e.preventDefault();
    var input = this.$el.find('input');
    var name = input.val().trim();
    if (name === '') {
      return;
    } else {
      this.removeListForm();
      App.addList(name);
    }
  },
  render: function() {
    this.$el.html(this.template());
    return this.el;
  },
  renderCards: function(card) {
    var cardView = new CardView({
      model: card
    });
    this.$el.find('.list-cards').append(cardView.el);
  },
  renderAdd: function(e) {
    e.preventDefault();
    $('.card-composer').remove();
    $('a.add-card').show();
    this.$el.find('a.add-card').hide();
    this.$el.find('.list-cards').append(this.addTemplate());
  },
  closeAdd: function() {
    $('.card-composer').remove();
    this.$el.find('a.add-card').show();
  },
  initialize: function() {
    this.render();
  },
});