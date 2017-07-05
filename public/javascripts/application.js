var App = {
  templates: JST,
  boardView: function() {
    // this.board = new BoardView(this.boardJSON);
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
        return el.className === 'nodrag';
      }
    })
      .on('drop', function(el, target, source, sibling) {
        console.log('=======dropped list======');
        this.boardMdl.updateAfterDrop();
        // console.log(el);
        // console.log(target);
        // console.log(source);
        // console.log(sibling);
        // on drop:
        // reorder source list and target list
      }.bind(this));

    this.dragCards = dragula([].slice.apply(document.querySelectorAll('.list-cards')), {
      invalid: function (el, handle) {
        return el.className === 'card-composer';
      }
    })
      .on('drop', function(el, target, source, sibling) {
          console.log('=======dropped card======');
          console.log(el);
          console.log(target);
          console.log(source);
          console.log(sibling);
          // console.log('from list: ' + $(source).parent.attr('data-id'));
          // console.log('from list: ' + source.parentElement.getAttribute('data-id'));
          // console.dir($(source));
          // console.log('into list: ' + target.parentElement.getAttribute('data-id'));
          var sourceListId = source.parentElement.getAttribute('data-id');
          var targetListId = target.parentElement.getAttribute('data-id');
          console.log('sourceId: ' + sourceListId);
          console.log('targetId: ' + targetListId);
          this.boardMdl.get('lists').get(+sourceListId).updateAfterDrop($(source));
          this.boardMdl.get('lists').get(+targetListId).updateAfterDrop($(target));
          // this.updateList(source);
          // this.updateList(target);
          // on drop:
          // reorder source list and target list
        }.bind(this));
  },
  // makeListDraggable: function(el) {
  //   this.dragLists.containers.push(el);
  // },
  // makeCardDraggable: function(el) {
  //   this.dragCards.containers.push(el);
  // },
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

  init: function(boardJSON) {
    // console.log(boardJSON);   
    // this.boardJSON = boardJSON;
    this.cardsColl = new CardCollection(boardJSON.cards.collection);
    this.listsColl = new ListCollection(boardJSON.lists);
    this.nextCardId = boardJSON.cards.nextId;
    this.boardMdl = new BoardModel(boardJSON.board);
    this.boardView();
    this.initDraggable();
    this.initEvents();
  }
}



