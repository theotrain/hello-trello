var App = {
  templates: JST,
  boardView: function() {
    this.board = new BoardView(this.boardMdl);
    this.lists = new ListsView({ collection: this.boardMdl.get('lists') });
  },
  editCardWindowView: function(card) {
    this.edit_card = new EditCardWindow({model: card});
  },
  initDraggable: function() {
    if (this.dragLists) { this.dragLists.destroy() }
    if (this.dragCards) { this.dragCards.destroy() }

    this.dragLists = dragula([document.querySelector('#list-container')], {
      moves: function(el, container, handle) {
        return !handle.classList.contains('card');
      },
      invalid: function (el, handle) {
        return el.classList.contains('nodrag');
      }
    })
      .on('drop', function(el, target, source, sibling) {
        this.boardMdl.updateAfterDrop();
        this.save({
          board: this.boardMdl.toJSON()
        });
      }.bind(this));

    this.dragCards = dragula([].slice.apply(document.querySelectorAll('.list-cards')), {
      invalid: function (el, handle) {
        return el.classList.contains('nodrag');
      }
    })
      .on('drop', function(el, target, source, sibling) {
          var sourceListId = source.parentElement.getAttribute('data-id');
          var targetListId = target.parentElement.getAttribute('data-id');
          this.boardMdl.get('lists').get(+sourceListId).updateAfterDrop($(source));
          this.boardMdl.get('lists').get(+targetListId).updateAfterDrop($(target));
          this.setListContainerHeight();
          this.save({
            lists: this.boardMdl.get('lists').toJSON()
          });
        }.bind(this));
  },
  addList: function(name) {
    this.boardMdl.addList(name);
  },
  getHighestListId: function() {
    var ids = [];
    this.listsColl.each(function(list){
      ids.push(list.get('id'));
    });
    return ids.sort()[ids.length-1] + 1;
  },
  expandableTextareas: function() {
    autosize($('textarea'));
  },
  expandableTextUpdate: function() {
    autosize.update($('textarea'));
  },
  autoListContainerHeight: function() {
    this.setListContainerHeight();
    this.setListContainerHeight();
    $(window).resize(this.setListContainerHeight);
  },
  setListContainerHeight: function() {
    var $el = $('#list-container');
    $el.css('height', window.innerHeight - $el.offset().top - 26);

    $('.list').each(function(idx,list) {
      var headerHeight = $(list).find('header').outerHeight();
      var footerHeight = $(list).find('footer').outerHeight();
      var $listCards = $(list).find('.list-cards');
      var listCardsHeight = $listCards[0].scrollHeight;
      var listHeight = $(list).outerHeight();
      var fullMaxHeight = headerHeight + footerHeight + listCardsHeight;

      if (fullMaxHeight < $(list).parent().innerHeight() - 7) {
        $(list).css('height', 'initial');
        $(list).find('.list-cards').css('height', 'initial');
      } else {
        $(list).css('height', $(list).parent().innerHeight() - 8);
        $(list).find('.list-cards').css('height', listHeight - headerHeight - footerHeight);
      }
    });
  },
  initHelpers: function() {
    Handlebars.registerHelper('format_date', function(date) {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          d = new Date(date),
          day = d.getDate(),
          month = months[d.getMonth()],
          hours = d.getHours(),
          minutes = d.getMinutes(),
          ampm = 'AM';

      minutes = (minutes < 10 ? '0' : '') + minutes;
      if (hours >= 12) {
        hours = hours % 12;
        ampm = 'PM';
      }
      if (hours === 0) hours = 12;
      return month + ' ' + day + ' at ' + hours + ':' + minutes + ' ' + ampm;
    });
  },
  respondToChanges: function() {
    this.cardsColl.on({
      'add remove': this.expandableTextUpdate
    });
    this.listsColl.on({
      'add remove': this.expandableTextUpdate
    });
  },  

  save: function(saveObject) {
    if (saveObject.card) {
      saveObject.nextCardId = this.nextCardId;
    }
    $.ajax({
      method: 'post',
      url: '/save',
      data: JSON.stringify(saveObject),
      contentType: 'application/json',
    })
  },
  delete: function(deleteObject) {
    $.ajax({
      method: 'post',
      url: '/delete',
      data: JSON.stringify(deleteObject),
      contentType: 'application/json',
    });
  },
  resetBoard: function() {
    this.boardView();
    this.respondToChanges();
    this.initDraggable();
    this.expandableTextareas();
    this.autoListContainerHeight();
  },
  init: function(boardJSON) {
    _.extend(this, Backbone.Events);
    this.boardJSON = boardJSON;
    this.cardsColl = new CardCollection(boardJSON.cards.collection, { silent: true });
    this.listsColl = new ListCollection(boardJSON.lists, { silent: true });
    this.labelsColl = new LabelCollection(boardJSON.labels.collection, { silent: true });
    this.nextCardId = boardJSON.cards.nextId;
    this.nextListId = this.getHighestListId() + 1;
    this.nextLabelId = boardJSON.labels.nextId;
    this.boardMdl = new BoardModel(boardJSON.board, { silent: true });
    this.initHelpers();
    this.resetBoard();
  }
}