CodeStars.Collections.Repos = Backbone.Collection.extend({

    model: Repo,

    initialize: function(options) {
        if (options.user)
            this.user = options.user;
    },

    url: function() {
        return CodeStars.githubApiUrl+this.user+'&sort=stars&order=desc';
    },

    parse: function(response) {
        console.log(response)
        return response.items;
    },

});