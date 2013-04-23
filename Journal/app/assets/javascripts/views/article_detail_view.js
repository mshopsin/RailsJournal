JA.Views.ArticleDetailView = Backbone.View.extend({
	render: function() {
		var that = this;
		
		var renderedContent = JST["articles/detail"]({
			article: that.model
		});
		
		$(that.$el).html(renderedContent);
		return that;
	}
});