CodeStars.Collections.Repos = Backbone.Collection.extend({

    initialize: function(options) {
        if (options.user)
            this.user = options.user;
    },

    url: function() {
        return CodeStars.githubApiUrl+'users/'+this.user+'/repos';
    },

    parse: function(response) {
        if(response)
        return response;
    },

    // displayRepos: function(repos) {

    // }
});