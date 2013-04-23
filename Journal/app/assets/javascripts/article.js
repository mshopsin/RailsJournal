window.JA = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	
	initialize: function($sidebar, $content, articleData) {
		// var articlesListView = new JA.Views.ArticlesListView({
// 			collection: articles
// 		});
// 		
// 		$(rootEl).html(articlesListView.render().$el);
		var articles = new JA.Collections.Articles(articleData); 
		
		this.installSidebar($sidebar, articles);
		
		new	JA.Routers.ArticlesRouter($content, articles);
		Backbone.history.start(); 

	},
	
	installSidebar: function ($sidebar, articles) {
		var that = this;
		var articleListView = new JA.Views.ArticlesListView({
			collection: articles
		});
		
		$sidebar.html(articleListView.render().$el);
	}
	
};