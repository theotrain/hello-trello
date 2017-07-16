var ListModel = Backbone.Model.extend({
  defaults: {
    name: 'New List',
    cards: []
  },
  createCards: function(cardsArray) {
    var cc = new CardCollection();
    cardsArray.forEach(function(idx) {
      // cc.add(_.extend(App.cardsColl.findWhere({ id: idx }), { list: this }));
      var card = App.cardsColl.findWhere({ id: idx });
      card.list = this;
      cc.add(card);
    }.bind(this));
    this.set('cards', cc);
    this.storeJSON = this.toJSON();
  },
  updateAfterDrop: function($el) {
    console.log($el)
    var cardsArray = [];
    $el.children('.card').each(function(idx,div){
      cardsArray.push(+$(div).attr('data-id'));
    });
    console.log('array of cards for: ' + $el);
    console.log(cardsArray);
    this.createCards(cardsArray);
  },
  changeName: function(name) {
    this.set('name', name);
  },
  cardsIdArray: function() {
    var cardsArr = [],
        cards = this.get('cards');

    cards.each(function(card) {
      cardsArr.push(card.get('id'));
    });
    return cardsArr;
  },
  toJSON: function() {
    return {
      id: this.get('id'),
      name: this.get('name'),
      cards: this.cardsIdArray()
    }
  },
  newCard: function(options) {
    var title = options.title;
    var card = {
      id: options.id,
      title: options.title
    };
    this.get('cards').add(card);
    App.cardsColl.add(card);
  },
  initialize: function(json) {
    this.set('name', this.get('name') || json.name);
    this.createCards(this.get('cards') || json.cards);
  }
});