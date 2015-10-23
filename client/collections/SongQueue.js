// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  
  initialize: function(){
    //when add is called run this enqueue function
    //model.on('change', this.render, this) or model.on({change: this.render}, this).
    this.on('add', this.enqueue, this);
    this.on('ended', this.ended, this);
    this.on('dequeue', this.dequeue, this);
  },

  //enqueue function
  enqueue: function() {

    if(this.length === 1){
      this.playFirst();
    }

  },
  
  playFirst: function(){
    this.at(0).play();
  },

  ended: function(){
    this.remove(this.at(0));
    if(this.at(0)){
      this.playFirst();
    }
  },

  dequeue: function(song){
    this.remove(song);
  }

});