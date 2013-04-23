JA.Routers.ArticlesRouter = Backbone.Router.extend({
	initialize: function($rootEl, articles){
		this.$rootEl = $rootEl;
		this.articles = articles;
	},
	routes: {
		"": "index",
		"articles/new": "new",
		"articles/:id": "show"
	},
	index: function() {
		var that = this;
				// 
		// var articlesListView = new JA.Views.ArticlesListView({
		// 	collection: that.articles
		// });
		// console.log(that.$rootEl);
		// $(that.$rootEl).html(articlesListView.render().$el);
		that.$rootEl.empty();
	},
	
	new: function(){
		
	},
	
	show: function(id) {
		var that = this;
		
		var article = that.articles.get(id);
		var articleDetailView = new JA.Views.ArticleDetailView({
			model: article
		});
		
		that.$rootEl.html(articleDetailView.render().$el);
	}
	
});