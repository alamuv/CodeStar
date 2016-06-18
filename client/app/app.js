var CodeStars = {

    Views: {},
    Models: {},
    Collections: {},
    githubApiUrl: 'https://api.github.com/search/repositories?q=user:'
}

$(function() {
  'use strict';

  // kick things off by creating the `App`
  var app = new CodeStars.Views.AppView();
  $('#app').append(app.render());
});