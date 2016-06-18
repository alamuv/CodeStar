CodeStars.Views.RepoView = Backbone.View.extend({
  //model is photo
  className: 'repo',
  tagName: 'li',
  template: _.template('<%= name %>'),
  // events: {
  //   click: function() {
  //     this.model.setCurrentPhoto();
  //   }
  // },

  render: function(){
    // console.log(this.model.get('name'));
    var listEntry = this.template({ name: this.model.get('name')});
    return this.$el.html(listEntry);
  }
});