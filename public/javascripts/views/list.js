var ListView = Backbone.View.extend({
  className: 'list-wrapper',
  template: App.templates.list,
  addTemplate: App.templates.add_card,
  events: {
    'click .add-card' : 'renderAdd',
    'click button.add': 'addCard',
    'click .remove': 'closeAdd'
  },
  addCard: function() {
    var textarea = this.$el.find('textarea');
    var text = textarea.val().trim()
    if (text === '') {
      return;
    } else {
      var id = App.nextCardId++;
      this.model.newCard({title: text, id: id});
      this.render();
      App.initDraggable();
    }
  },
  render: function() {
    this.$el.html(this.template({
      name: this.model.get('name'),
      id: this.model.get('id'),
    }));
    this.model.get('cards').each(this.renderCards.bind(this));

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
    this.model.view = this;
    this.render();
  },
});
