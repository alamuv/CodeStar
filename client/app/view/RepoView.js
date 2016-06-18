CodeStars.Views.RepoView = Backbone.View.extend({
  //model is photo
  className: 'repo',
  tagName: 'li',
  template: _.template('<%= name %>   StarCount:<%= starCount %>'),
  // events: {
  //   click: function() {
  //     this.model.setCurrentPhoto();
  //   }
  // },

  render: function(){
    // console.log(this.model.get('name'));
    var listEntry = this.template({ name: this.model.get('name'), starCount: this.model.get('stargazers_count')});
    return this.$el.html(listEntry);
  }
});