CodeStars.Views.UserView = Backbone.View.extend({
  //model is photo
  
  className: 'user',
  tagName: 'div',
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

  render: function(){
    // var listEntry = this.template({ title: this.model.get('title')});
    // // this.$el.text('I am a picture please click on me');
    // // return this.$el;
    // return this.$el.html(listEntry);
  }
})