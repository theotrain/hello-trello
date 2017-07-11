var AddListView = Backbone.View.extend({
  className: 'list-wrapper nodrag',
  template: App.templates.add_list,
  events: {
    'click button.add-list': 'addListForm',
    'click button.add': 'addList',
    'click .remove': 'removeListForm'
  },
  addListForm: function() {
    // console.log('add list');
    $('.add-list').hide();
    $('.add-list-form').show();
  },
  removeListForm: function() {
    $('.add-list').show();
    $('.add-list-form').hide();
  },
  // events: {
  //   'click .add-list': 'addList'
  // },
  // addList: function(e) {
  //   this.trigger('addList');
  // },
  addList: function(e) {
    e.preventDefault();
    var input = this.$el.find('input');
    var name = input.val().trim();
    // console.log(name);
    if (name === '') {
      return;
    } else {
      this.removeListForm();
      App.addList(name);
      // var id = App.nextCardId++;
      // this.model.newCard({title: text, id: id});
      // this.render();
      // App.initDraggable();
    }
  },
  render: function() {
    this.$el.html(this.template());
    // this.model.get('cards').each(this.renderCards.bind(this));
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