JA.Views.ArticlesListView = Backbone.View.extend({
	initialize: function() {
		var that = this;
		
		var renderCallback = that.render.bind(that);
		 that.collection.on("add", renderCallback);
		 that.collection.on("change", renderCallback);
		 that.collection.on("remove", renderCallback);
	},
	render: function(){
		var that = this;

		var renderedContent = JST["articles/list"]({
			articles: that.collection
		});
		
		that.$el.html(renderedContent);
		
		
		return that;
	}
});


// var ul = $("<ul></ul>");
// _(that.collection).each(function (article) {
// 	ul.append(
// 		$("<li></li>").text(article.title)
// 	)
// });
// 
// that.$el.html(ul);