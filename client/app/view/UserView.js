CodeStars.Views.UserView = Backbone.View.extend({
  // model: User, 
  className: 'col-md-6 user',
  template: '<div class="submitUser">'+
  '<form class="form-inline">'+
  '<div class="form-group">' +
    '<label for="user">Github Username</label>' +
    '<input type="text" class="form-control" id="handle" placeholder="Type in Github UserHandle Here">' +
  '</div>' +
  '<button type="submit" class="btn btn-default">Submit</button>' +
  '</form>' +
  '</div>' + 
  '<div class="reposList">' +
  '</div>',

  events: {
    'submit': 'getRepos'
  },

  initialize: function() {
    this.render();
    this.on('submit', this.getRepos, this);
  },

  //upon submission of github username, get repos for that user, 
  //pass the github handle to the Repos collection, where we set github API
  getRepos: function(event) {
    event.preventDefault();
    var githubHandle = this.$el.find('input').val();
    console.log(githubHandle)
    var repos = new CodeStars.Collections.Repos({user: githubHandle});
    repos.fetch({success: this.displayRepos.bind(this), error: this.handleError.bind(this)});
    this.resetInput();
  },

  displayRepos: function(repos) {
    console.log(repos)
    var user = repos.user;
    var reposView = new CodeStars.Views.ReposListView({collection: repos});
    this.$el.find('.reposList').children().detach();
    this.$el.find('.reposList').html('<h3>'+ user +' - List of Repositories</h3>').append(reposView.render());
  },

  handleError: function(err, textStatus) {
    console.log(textStatus);
    alert(textStatus.status + ' ' + textStatus.statusText);
  },

  resetInput: function() {
    $('[id="handle"]').val("");
    $('#handle').attr({placeholder: 'Type in Github UserHandle Here'});
  },

  render: function() {
   return this.$el.html(this.template);
  },
});