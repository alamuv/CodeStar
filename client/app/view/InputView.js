CodeStars.Views.InputView = Backbone.View.extend({
  // model: User, 
  className: 'submitUser',
  // tagName: 'div',
  // template: '<input type="text" placeholder="type in url"></input><input type="submit" id="submit">Submit</input>',
  template: '<form class="form-inline">'+
  '<div class="form-group">' +
    '<label for="user">Github Username</label>' +
    '<input type="text" class="form-control" id="handle" placeholder="Type in Github UserHandle Here">' +
  '</div>' +
  '<button type="submit" class="btn btn-default">Submit</button>' +
  '</form>',

  events: {
    'submit': 'getRepos'
  },

  initialize: function() {
    this.render();
    this.on('submit', this.getRepos, this);
  },

  render: function() {
   return this.$el.html(this.template);
  },

  //upon submission of github username, get repos for that user
  getRepos: function(event) {
    event.preventDefault();
    var githubHandle = $('[id="handle"]').val();
    // console.log(githubHandle);

    var repos = new CodeStars.Collections.Repos({user: githubHandle});
    // var reposView = new CodeStars.Views.ReposListView({collection: repos})
    repos.fetch({success: this.displayRepos.bind(this), error: this.handleError.bind(this)});
    // event.value();
    // alert('submit');
    this.resetInput();
  },

  displayRepos: function(repos) {
    console.log(repos);
    var repositories = repos.models;
    var repos = new CodeStars.Collections.Repos(repositories);
    var reposView = new CodeStars.Views.ReposListView({collection: repos});
  },

  handleError: function(err, textStatus) {
    console.log(textStatus);
    alert(textStatus.status + ' ' + textStatus.statusText);
  },

  resetInput: function() {
    $('[id="handle"]').val("");
    $('#handle').attr({placeholder: 'Type in Github UserHandle Here'});
  }
});