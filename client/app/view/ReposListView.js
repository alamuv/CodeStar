CodeStars.Views.ReposListView = Backbone.View.extend({

  tagName: 'ul',
  
  initialize: function() {
    this.render();

  },

  render: function() {
    this.$el.children().detach();
    var totalStars = 0;
    console.log(this.collection);
    return this.$el.addClass('reposList').html('<h3>List of Repositories<%=totalStars%></h3>').append(this.collection.map(function(repo) {
      totalStars += repo.attributes.stargazers_count;
      return new CodeStars.Views.RepoView({ model: repo }).render();
    }));
  }

});