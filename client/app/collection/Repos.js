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

    // displayRepos: function(repos) {
    //     console.log(repos.models);
    //     var repositories = repos.models;
    //     var repos = new CodeStars.Collections.Repos({repositories});
    //     repos.add(repositories);
    // }
});