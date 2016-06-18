CodeStars.Views.InputView = Backbone.View.extend({
  // collection: Repos, 
  className: 'submitUser',
  // tagName: 'div',
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
    console.log(githubHandle);

    var repos = new CodeStars.Collections.Repos({user: githubHandle});
    repos.fetch();
    // event.value();
    // alert('submit');
    this.resetInput();
    this.addPhoto(imgURL, imgTitle);
  },

  addPhoto: function(url, title) {
    // console.log('calling add new photo');
    // console.log('url :', url, title);
    this.collection.addNewPhoto(url, title);
  },
  resetInput: function() {
    $('[id="imageURL"]').val("");
    $('[id="imageTitle"]').val("");
    $('#imageTitle').attr({placeholder: 'Type in Image URL Here'});
    $('#imageURL').attr({placeholder: 'Type in Image Title Here'});
  }
});