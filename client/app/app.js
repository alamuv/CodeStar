var CodeStars = {

    Views: {},
    Models: {},
    Collections: {}
}

$(function() {
  'use strict';

  // kick things off by creating the `App`
  var app = new CodeStars.Views.AppView();
  $('#app').html(app.render().el);
});