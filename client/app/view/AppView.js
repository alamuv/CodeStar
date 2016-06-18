CodeStars.Views.AppView = Backbone.View.extend({

  initialize: function(params) {
    this.user1 = new CodeStars.Views.UserView({model: CodeStars.Models.User});
    this.user2 = new CodeStars.Views.UserView({model: CodeStars.Models.User});
  
  //   this.model.on('change:currentPhoto', function(model) {
  //     // console.log('change current photo in app view');
  //     this.photoDisplayView.displayPhoto(model.get('currentPhoto')) }, this);
  },

  render: function(){
   //  var row = $('<div class="row container"></div>').append([this.photosListView.$el, this.photoDisplayView.$el]);
   return this.$el.html([
      this.user1.$el,
      this.user2.$el
      // row
    ]);
  }

});