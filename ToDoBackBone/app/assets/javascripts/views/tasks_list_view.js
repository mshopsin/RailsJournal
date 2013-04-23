TD.Views.TasksListView = Backbone.View.extend({
	
	events: {
		"click li.task": "showTask"
	},
	
	initialize: function(){
		var that = this;
		var renderCallback = that.render.bind(that);
		that.collection.on("add",renderCallback);
		that.collection.on("change", renderCallback);
		that.collection.on("remove", renderCallback);
	},
	
	render: function(){

		var that = this;
		var renderedContent = JST["tasks/list"]({
			tasks: that.collection
		});
		
		that.$el.html(renderedContent);
		return that;
	},
	
	showTask: function(el) {
		console.log(
			"You clicked task#" +
			$(el.target).attr("data-id") +
			"! So good a click!"
		);
	}
});
