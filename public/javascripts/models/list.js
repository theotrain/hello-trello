var ListModel = Backbone.Model.extend({
  createCards: function(cardsArray) {
    this.cardsArray = cardsArray;
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
  toJSON: function() {
    // return 7;
    return {name: this.get('name'), cards: this.cardsArray}
  },
  newCard: function(options) {
    var title = options.title;
    this.get('cards').add({
      id: options.id,
      title: options.title
    });
  },
  initialize: function(json) {
    this.set('name', json.name);
    // this.set('cards', new CardCollection({array: json.cards}));
    this.cardsArray = json.cards;
    this.createCards(json.cards);
  }
});