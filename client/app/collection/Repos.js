CodeStars.Collections.Repos = Backbone.Collection.extend({

    model: Repo,

    initialize: function(options) {
        if (options.user)
            this.user = options.user;
    },

    url: function() {
        return CodeStars.githubApiUrl+'users/'+this.user+'/repos';
    },

    parse: function(response) {
        console.log(response)
        return response;
    },

});