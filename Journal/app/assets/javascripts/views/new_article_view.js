JA.Views.NewArticleView = Backbone.View.extend({
	events: {
		"click button.submit": "submit",
		"click button.cancel": "cancel"
	},
	
	render: function(){
		var that = this;
		
		var renderedContent = JST["articles/new"]();
		that.$el.html(renderedContent);
		return that;
	},
	
	submit: function() {
		var that = this;
		
		var article = new JA.Models.Article({
			title: that.$("input[name=article\\[title\\]]").val(),
			body: that.$("input[name=article\\[body\\]]")
		});
		
		that.collection.add(article);
		article.save();
		Backbone.history.navigate("#/");
	},
	
	cancel: function(){
		Backbone.history.navigate("#/");
	}


	
});