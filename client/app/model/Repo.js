var Repo = Backbone.Model.extend({
  defaults: {
    starCount: 0,
    name: '',
    url: ''
  },

  initialize: function(options) {
    // console.log(options);
  }
});