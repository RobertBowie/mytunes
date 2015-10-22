// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
//this is where the enqueue gets triggered from
  events: {
    'click': function() {
      this.model.enqueue(); // this.model.play();
      console.log(this.model.attributes);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
