var App = {
  templates: JST,
  boardView: function() {
    this.board = new BoardView(this.boardMdl.toJSON());
    this.lists = new ListsView({ collection: this.boardMdl.get('lists') });
  },
  initDraggable: function() {
    if (this.dragLists) { this.dragLists.destroy() }
    if (this.dragCards) { this.dragCards.destroy() }

    this.dragLists = dragula([document.querySelector('#list-container')], {
      moves: function(el, container, handle) {
        return !handle.classList.contains('card');
      },
      invalid: function (el, handle) {
        return el.className === 'add-list';
      }
    })
      .on('drop', function(el, target, source, sibling) {
        this.boardMdl.updateAfterDrop();
        this.save();
      }.bind(this));

    this.dragCards = dragula([].slice.apply(document.querySelectorAll('.list-cards')), {
      invalid: function (el, handle) {
        return el.className === 'card-composer';
      }
    })
      .on('drop', function(el, target, source, sibling) {
          var sourceListId = source.parentElement.getAttribute('data-id');
          var targetListId = target.parentElement.getAttribute('data-id');
          this.boardMdl.get('lists').get(+sourceListId).updateAfterDrop($(source));
          this.boardMdl.get('lists').get(+targetListId).updateAfterDrop($(target));
          this.save();
        }.bind(this));
  },
  addList: function() {
    console.log('add list in application');
    this.boardMdl.addList();
  },
  getHighestListId: function() {
    var ids = [];
    this.listsColl.each(function(list){
      ids.push(list.get('id'));
    });
    return ids.sort()[ids.length-1] + 1;
  },
  initEvents: function() {
    $(document)
      .on('focus.autoExpand', 'textarea.autoExpand', function(){
          var savedValue = this.value;
          this.value = '';
          this.baseScrollHeight = this.scrollHeight;
          this.value = savedValue;
      })
      .on('input.autoExpand', 'textarea.autoExpand', function(){
          var minRows = this.getAttribute('data-min-rows')|0, rows;
          this.rows = minRows;
          rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
          this.rows = minRows + rows;
      });
  }, 
  toJSON: function() {
    return {
      board: this.boardMdl.toJSON(),
      lists: this.boardMdl.get('lists').toJSON(),
      cards: {
        nextId: this.nextCardId,
        collection: this.cardsColl.toJSON()
      }
    }
  },
  setupAutosave: function() {
    this.cardsColl.on({
      'add remove': this.save
    });
    this.listsColl.on({
      'add remove': this.save
    });
  },       
  save: function() {
    console.log('saving .... ');
    $.ajax({
      type: 'post',
      url: '/save',
      dataType: 'json',
      crossDomain: true,
      data: JSON.stringify(App.toJSON()),
      contentType: 'application/json',
      success: function(data){
        // console.log("saved success");
      }
    });
  },
  init: function(boardJSON) {
    _.extend(this, Backbone.Events);
    this.boardJSON = boardJSON;
    this.cardsColl = new CardCollection(boardJSON.cards.collection, { silent: true });
    this.listsColl = new ListCollection(boardJSON.lists, { silent: true });
    this.nextCardId = boardJSON.cards.nextId;
    this.nextListId = this.getHighestListId() + 1;
    this.boardMdl = new BoardModel(boardJSON.board, { silent: true });
    this.setupAutosave();
    this.boardView();
    this.listenTo(this.board, 'addList', this.addList);
    this.initDraggable();
    this.initEvents();
  }
}