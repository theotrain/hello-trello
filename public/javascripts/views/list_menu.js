var listMenuView = Backbone.View.extend({
  el: $('#popup')[0],
  template: App.templates.list_menu,
  events: {
    'click .close'  : 'close',
    'click .add'    : 'addCard',
    'click .delete' : 'deleteList'
  },
  render: function() {
    this.$el.html(this.template(this.model));
  },
  addCard: function() {
    this.parentView.renderAdd(new Event('junk'));
    this.close();
  },
  deleteList: function() {
    var id = this.model.get('id');
    App.listsColl.remove(id, { silent: true });
    App.boardMdl.get('lists').remove(id, { silent: true });
    App.save();
    App.resetBoard();
    this.close();
  },
  close: function() {
    this.$el.html('');
  },
  position: function() {   
    var $menu = this.$el.find('#list-menu-view');

    if ($(window).height() < (this.y + $menu.height())) {
      this.y = 20;
    };
    if ($(window).width() < (this.x + $menu.width())) {
      this.x = $(window).width() - $menu.width() - 50;
    };
    $menu.css({top: this.y, left: this.x});
  },
  initialize: function(options) {
    this.x = options.x;
    this.y = options.y;
    this.model = options.model;
    this.parentView = options.parentView;
    this.render();
    this.position();
  }
});