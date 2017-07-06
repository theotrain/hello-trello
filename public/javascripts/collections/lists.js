var ListCollection = Backbone.Collection.extend({
  model: ListModel,
  updateAfterDrop: function($el){
    sortOrder = [];
    $el.children().each(function(idx, listWrapper){
      sortOrder.push($(listWrapper).children().eq(0).attr('data-id'));
    });
    this.comparator = function(list1, list2) {
      var idx1 = sortOrder.indexOf(list1.get('id'));
      var idx2 = sortOrder.indexOf(list2.get('id'));
      return idx1 < idx2 ? -1 : 1;
    }
    this.sort();
  }
});
