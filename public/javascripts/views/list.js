var ListView = Backbone.View.extend({
  className: 'list-wrapper',
  template: App.templates.list,
  addTemplate: App.templates.add_card,
  events: {
    'click .add-card'       : 'renderAdd',
    'click button.add'      : 'addCard',
    'click .remove'         : 'closeAdd',
    'mouseup .list-name'    : 'editName',
    'keydown'               : 'processKey',
    'blur header textarea'  : 'finishEditName',
    'blur header form'  : 'finishEditName'
  },
  processKey: function(e) {
    if (e.which === 13) {
      if (this.$el.find('header textarea').is(":focus")) {
        // xxxformxxx.submit();
        this.finishEditName();
        console.log('we hit return in the name editor');
      }
      if (this.$el.find('.card-composer textarea').is(":focus")) {
        // xxxformxxx.submit();
        console.log('we hit return in the name card editor');
        this.addCard();
      }
    }
  },
  editName: function(e) {
    e.preventDefault();
    console.log('edit name');
    this.$el.find('header form').show();
    this.$el.find('header .list-name').hide();
    App.expandableTextUpdate();
  },
  finishEditName: function() {
    console.log('finish edit name');
    // save trimmed version of list name
    var textarea = this.$el.find('header textarea');
    var text = textarea.val().trim();
    // console.log('enteroing text: ' + text);

    this.$el.find('header form').hide();
    this.$el.find('header .list-name').show();

    this.$el.find('header .list-name').text(text);
    this.model.changeName(text);
  },
  addCard: function() {
    var textarea = this.$el.find('.card-composer textarea');
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

    // App.expandableTextareas();
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
    // App.expandableTextUpdate();
    App.expandableTextareas();
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
