CodeStars.Views.ReposListView = Backbone.View.extend({

  tagName: 'ul',
  
  initialize: function() {
    this.render();

  },

  render: function() {
    this.$el.children().detach();

    return this.$el.addClass('reposList').html('<h3>List of Repositories</h3>').append(this.collection.map(function(repo) {
      return new CodeStars.Views.RepoView({ model: repo }).render();
    }));
  }

});