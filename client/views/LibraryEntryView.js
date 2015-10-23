// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= playcount %></td><td class="songData">(<%= artist %>)</td><td class="songData"><%= title %></td> \
                      <td><%= voteCount %></td> \
                      <td><button id="upVote">+</button></td><td><button id="downVote">-</button></td>'),
//this is where the enqueue gets triggered from
  events: {
    'click .songData': function() {
      this.model.enqueue();
    },

    'click #upVote': function() {
    this.model.upvote();
    },

    'click #downVote': function() {
    this.model.downvote();
    },
 
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});


// events: {
//     'click': function() {
//       this.model.play();
//     }
//   },

//   render: function(){
//     return this.$el.html(this.template(this.model.attributes));
//   }