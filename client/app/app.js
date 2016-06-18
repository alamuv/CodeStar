var CodeStars = {

    Views: {},
    Models: {},
    Collections: {},
    githubApiUrl: 'https://api.github.com/'
}

$(function() {
  'use strict';

  // kick things off by creating the `App`
  var app = new CodeStars.Views.AppView();
  $('#app').html(app.render().el);
});