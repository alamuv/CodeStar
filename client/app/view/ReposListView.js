CodeStars.Views.ReposListView = Backbone.View.extend({

  tagName: 'ul',
  
  initialize: function() {
    this.render();

  },

  setStarCount: function(totalStars) {
    
  },

  render: function() {
    console.log(this.collection);
    this.$el.children().detach();
    var user = new CodeStars.Models.User({user: this.collection.user});
    var totalStars = user.totalStars;
    return this.$el.addClass('reposList').html('<h4>Total Star Count'+ totalStars +'</h4>').append(this.collection.map(function(repo) {
      totalStars += repo.attributes.stargazers_count;
      this.model.updateTotalStars(totalStars);
      return new CodeStars.Views.RepoView({ model: repo }).render();
    }));
  }

});