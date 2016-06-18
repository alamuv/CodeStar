CodeStars.Collections.Repos = Backbone.Collection.extend({

    initialize: function(options){
        if (options.user)
            this.user = options.user;
    },

    url: function()
    {
        return CodeStars.githubApiUrl+this.user;
    },

    parse: function(response)
    {
        return response.Search;
    }
});