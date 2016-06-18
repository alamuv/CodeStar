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
    'submit': 'handleSubmit'
  },

  initialize: function() {
    this.render();
    this.on('submit', this.handleSubmit, this);
  },

  render: function() {
   return this.$el.html(this.template);
  },
  //upon submission of image title & url, add to photos collection
  handleSubmit: function(event) {
    event.preventDefault();
    var imgTitle = $('[id="imageTitle"]').val();
    var imgURL = $('[id="imageURL"]').val();
    // console.log(imgTitle, imgURL);
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