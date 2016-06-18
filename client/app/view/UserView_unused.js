CodeStars.Views.UserView = Backbone.View.extend({
  //model is user
  
  className: 'user',

  initialize: function() {
    this.input = new CodeStars.Views.InputView();
    this.reposList = new CodeStars.Views.ReposListView({});
    this.render();
  },

  render: function(){

    return this.$el.html([
      this.user1.$el
      // this.reposList.$el
    ]);
    // var listEntry = this.template({ title: this.model.get('title')});
    // // this.$el.text('I am a picture please click on me');
    // // return this.$el;
    // return this.$el.html(listEntry);
  }
})