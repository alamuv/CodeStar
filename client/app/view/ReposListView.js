CodeStars.Views.ReposListView = Backbone.View.extend({

  tagName: 'ul',
  className: 'col-md-6',
  
  initialize: function() {
    this.collection.on('add', this.render, this);
    this.render();

  },

  render: function() {
    console.log('in reposList render')
    this.$el.children().detach();

    return this.$el.addClass('reposList').html('<h3>List of Repositories</h3>').append(this.collection.map(function(repo) {
      return new RepoView({ model: Repo }).render();
    }));
  }

});