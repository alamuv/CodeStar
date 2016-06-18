CodeStars.Views.ReposListView = Backbone.View.extend({

  tagName: 'ul',
  
  initialize: function() {
    this.render();

  },

  render: function() {
    this.$el.children().detach();
    var totalStars = 0;
    return this.$el.addClass('reposList').append(this.collection.map(function(repo) {
      totalStars += repo.attributes.stargazers_count;
      return new CodeStars.Views.RepoView({ model: repo }).render();
    }));
  }

});