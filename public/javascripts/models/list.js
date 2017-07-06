var ListModel = Backbone.Model.extend({
  defaults: {
    name: 'New List',
    cards: []
  },
  createCards: function(cardsArray) {
    // this.cardsArray = cardsArray;
    var cc = new CardCollection();
    cardsArray.forEach(function(idx) {
      cc.add(App.cardsColl.findWhere({ id: idx }));
    });
    this.set('cards', cc);
    this.storeJSON = this.toJSON();
  },
  updateAfterDrop: function($el) {
    console.log('ud after drop');
    var cardsArray = [];
    $el.children().each(function(idx,div){
      // console.log(cardDiv.attr('data-id'));
      cardsArray.push(+$(div).attr('data-id'));
    });
    console.log(cardsArray);
    this.unset('cards');
    this.createCards(cardsArray);
  },
  cardsArray: function() {
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
      cards: this.cardsArray()
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
    // this.set('cards', new CardCollection({array: json.cards}));
    // this.cardsArray = json.cards;
  }
});