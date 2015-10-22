// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here
  
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
//this is where the enqueue gets triggered from
  events: {
    'click': function() {
      this.model.dequeue(); // this.model.play();
      
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
