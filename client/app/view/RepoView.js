CodeStars.Views.PhotoListEntryView = Backbone.View.extend({
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
    var listEntry = this.template({ name: this.model.get('name')});
    // this.$el.text('I am a picture please click on me');
    // return this.$el;
    return this.$el.html(listEntry);
  }
});