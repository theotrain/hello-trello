var DateView = Backbone.View.extend({
  el: $('#popup')[0],
  template: App.templates.date,
  events: {
    'click .save'   : 'saveDate',
    'click .remove' : 'removeDate',
    'click .close'  : 'close',
  },
  render: function() {
    this.$el.html(this.template(this.model));
  },
  saveDate: function() {
    var dateString = this.$date.val().trim(),
        timeString = this.$time.val().trim();
        date = new Date(dateString + ' ' + timeString)
    
    if (date == 'Invalid Date') return;
    this.model.set('due', date.getTime());
    this.close();
  },
  removeDate: function() {
    this.model.set('due', null);
    this.close();
  },
  close: function() {
    this.parentView.render();
    this.$el.html('');
  },
  initDatepicker: function() {
    $('.date-picker').datepicker({
      language: 'en',
      onSelect: function (fd, date) {
        this.$date.val(fd);
      }.bind(this),
      onShow: function(instance, animationComplete) {

      }
    })
  },
  position: function() {   
    var $picker = this.$el.find('#date-view');

    if ($(window).height() < (this.y + $picker.height())) {
      this.y = 20;
    };
    if ($(window).width() < (this.x + $picker.width())) {
      this.x = $(window).width() - $picker.width() - 50;
    };
    $picker.css({top: this.y, left: this.x});
  },
  initElements: function() {
    this.$date = this.$el.find('input[name=date]');
    this.$time = this.$el.find('input[name=time]');

    if (this.model.get('due')) {
      var now = new Date(this.model.get('due'));
      this.$time.val(this.toTimeString(now));
    } else {
      var now = new Date();
      this.$time.val('12:00 PM');
    }
    this.$date.val(this.toDateString(now));
  },
  toTimeString: function(date) {
    var timeArray = date.toTimeString().split(':');
    var hours = timeArray[0];
    var minutes = timeArray[1];
    var ampm = 'AM';
    if (hours >= 12) ampm = 'PM';
    if (hours > 12) {
      hours = hours % 12;
    }
    return hours + ':' + minutes + ' ' + ampm;
  },
  toDateString: function(date) {
    return (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear()
  },
  initialize: function(options) {
    this.x = options.x;
    this.y = options.y;
    this.model = options.model;
    this.parentView = options.parentView;
    this.render();
    this.initElements();
    this.initDatepicker();
    this.position();
  }
});