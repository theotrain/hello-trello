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
    'blur header textarea'         : 'finishEditName',
    'click .more'           : 'renderListMenu'
  },
  processKey: function(e) {
    if (e.which === 13) {
      if (this.$el.find('header textarea').is(":focus")) {
        this.finishEditName();
      }
      if (this.$el.find('.card-composer textarea').is(":focus")) {
        this.addCard();
      }
    }
  },
  renderListMenu: function(e) {
    var el = e.target,
        top = el.getBoundingClientRect().top,
        left = el.getBoundingClientRect().left;

    var list_menu = new listMenuView({
      model: this.model,
      parentView: this,
      x: left + 1,
      y: top + 31
    });
  },
  editName: function(e) {
    e.preventDefault();
    this.$el.find('header form').show();
    this.$el.find('header .list-name').hide();
    App.expandableTextUpdate();
  },
  finishEditName: function() {
    var textarea = this.$el.find('header textarea');
    var text = textarea.val().trim();

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
