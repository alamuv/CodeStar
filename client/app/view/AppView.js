CodeStars.Views.AppView = Backbone.View.extend({

  initialize: function(params) {
    this.user1 = new CodeStars.Views.InputView();
  //   this.photosListView = new PhotoListView({ collection: this.model.get('photos') });
  //   this.photoDisplayView = new PhotoDisplayView({ model: this.model.get('currentPhoto') });

  //   this.model.on('change:currentPhoto', function(model) {
  //     // console.log('change current photo in app view');
  //     this.photoDisplayView.displayPhoto(model.get('currentPhoto')) }, this);
  },

  render: function(){
    console.log(this.user1.$el)
    // this.$el.html("This is my home page!!");       
    //     return this;
   //  var row = $('<div class="row container"></div>').append([this.photosListView.$el, this.photoDisplayView.$el]);
   return this.$el.html([
      this.user1.$el
      // row
      // this.photosListView.$el,
      // this.photoDisplayView.$el
    ]);
  }

});