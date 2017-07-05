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
    console.log('add card');
    var textarea = this.$el.find('textarea');
    var text = textarea.val().trim()
    if (text === '') {
      console.log('card is empty, dont do shit')
      return;
    } else {
      //add card
      var id = App.nextCardId++;
      this.model.newCard({title: text, id: id});
      // this.unRenderAdd();
      this.render();

      App.initDraggable();
    }
  },
  render: function() {
    // var id = this.model.get('id');
    // this.$el.attr('data-id', id);
    // this.$el.html(this.template(this.model.toJSON()));
    this.$el.html(this.template({
      name: this.model.get('name'),
      id: this.model.get('id'),
    }));
    // console.log('render List View ----- ');
    // console.log(this.model.get('cards'));
    this.model.get('cards').each(this.renderCards.bind(this));
    // var cardsView = new CardsView(this.model);
    // this.renderCards();
    //has a 'name' and a 'cards' collection

    return this.el;
  },
  renderCards: function(card) {
    // console.log('--- renderCards');
    // console.log(JSON.stringify(card.toJSON()));
    // this.el.

    var cardView = new CardView({
      model: card
    });
    this.$el.find('.list-cards').append(cardView.el);
    // $('main').append(listView.el);
  },
  // addCard: function() {
  //   console.log('add card');
  // },
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
    // console.log('---listView model------')
    // console.dir(this.model);
    this.model.view = this;
    this.render();
  },
});
