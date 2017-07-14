var EditCardWindow = Backbone.View.extend({
  el: $('#modal'),
  labelTemplate: App.templates.label_in_modal,
  events: {
    'click div.close'                         : 'close',
    'click div.modal'                         : 'close',
    'click .card-detail-description a'        : 'openEditDescription',
    'click .card-detail-description p'        : 'openEditDescription',
    'click .card-detail-description .remove'  : 'closeEditDescription',
    'click .card-detail-description .add'     : 'saveDescription',
    'click .due-link'                         : 'renderDatePicker',
    'click button.due'                        : 'renderDatePicker',
    'keyup .add-comment'                      : 'processKey',
    'click .add-comment button'               : 'saveComment',
    'click header textarea'                   : 'editTitle',
    'keydown header textarea'                 : 'processKey',
    'click .delete'                           : 'deleteCard',
    'click .edit-labels'                      : 'renderLabels',
  },
  render: function() {
    this.$el.html(App.templates.edit_card_window({
      title: this.model.get('title'),
      description: this.model.get('description'),
      due: this.model.get('due'),
      labels: this.model.get('labels'),
      hasLabels: this.model.get('labels').length,
      comments: this.model.get('comments').toJSON(),
    }));

    this.model.get('labels').forEach(function(idx) {
      var label = App.labelsColl.get(idx);
      this.$el.find('.label-list').append(this.labelTemplate(label.toJSON()));
    }.bind(this));

    console.log(this.model.toJSON());
  },
  renderDatePicker: function(e) {
    var el = e.target,
        top = el.getBoundingClientRect().top,
        left = el.getBoundingClientRect().left;

    var date_picker = new DateView({
      model: this.model,
      parentView: this,
      x: left,
      y: top - 100
    });
  },
  renderLabels: function(e) {
    var el = e.target,
        top = el.getBoundingClientRect().top,
        left = el.getBoundingClientRect().left;

    var label_view = new labelsView({
      model: this.model,
      parentView: this,
      x: left,
      y: top - 100
    });
  },
  deleteCard: function() {
    App.cardsColl.remove(this.model, { silent: true });
    this.model.list.get('cards').remove(this.model, { silent: true });

    App.save();
    App.resetBoard();
    this.$el.html('');
  },
  editTitle: function() {
    var textarea = this.$el.find('header textarea');
    textarea.removeClass('disabled');
  },
  saveTitle: function() {
    var textarea = this.$el.find('header textarea'),
        text = textarea.val().trim();

    this.model.set('title', text);
    textarea.val(this.model.get('title'));
    textarea.blur();
    textarea.addClass('disabled');
    this.model.view.render();
  },
  saveComment: function(e) {
    e.preventDefault();
    var text = this.$el.find('.add-comment textarea').val().trim();
    this.model.get('comments').add({body: text, date: new Date().getTime()});
    this.render();
  },
  processKey: function(e) {
    var commentTextarea = this.$el.find('.add-comment textarea'),
        commentSubmit = this.$el.find('.add-comment button'),
        titleTextarea = this.$el.find('header textarea');

    if (commentTextarea.is(":focus")) {
      if (commentTextarea.val() !== '') {
        commentSubmit.removeClass('disabled')
      } else {
        commentSubmit.addClass('disabled')
      }
    }

    if (titleTextarea.is(":focus")) {
      if (e.which === 13) {
        this.saveTitle();
      }
    }
  },
  saveDescription: function(e) {
    e.preventDefault(e);
    var textarea = this.$el.find('.card-detail-description textarea');
    var text = textarea.val().trim()

    this.model.set('description', text);    
    App.cardsColl.add(this.model);
    this.closeEditDescription();
    this.render();
  },
  openEditDescription: function(e) {
    e.preventDefault();
    this.$el.find('.card-detail-description form').show();
    this.$el.find('.card-detail-description p').hide();
    this.$el.find('.card-detail-description a').hide();
    App.expandableTextareas();
  },
  closeEditDescription: function() {
    this.$el.find('.card-detail-description form').hide();
    this.$el.find('.card-detail-description a').show();
    this.$el.find('.card-detail-description p').show();
  },
  close: function(e) {
    if (e.target !== e.currentTarget) return;
    this.$el.html('');
  },
  initialize: function() {
    this.render();
    App.expandableTextareas();
  }
});