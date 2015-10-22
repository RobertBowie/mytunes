// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function(){
    //when add is called run this enqueue function
    //model.on('change', this.render, this) or model.on({change: this.render}, this).
    this.on('add', this.enqueue, this);
  },

  //enqueue function
  enqueue: function() {
    this.push();
  }
  //this.pop
  // Write an enqueue function, which 
    // take 'this' song and  into the song queue
});