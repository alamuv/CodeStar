var User = Backbone.Model.extend({
  defaults: {
    totalStars: 0,
    name: '',
    url: ''
  },

  initialize: function(options) {
    console.log(options);
  },

  // listens to a change in ratings!
  updateTotalStars: function(totalStars) {
    this.set('totalStars', totalStars);
    // console.log('new rating ', this.get('rating'));
    //tiggers changeRating
    this.trigger('changeTotalStars', this);
  },
    
});