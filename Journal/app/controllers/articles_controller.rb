class ArticlesController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]
  
  def create
    @article = Article.new(params[:article])
  
    if @article.save
      render :json => @article
    else
      render :json => @article.errors, :status => 422
    end
  end

  def index
    @articles = Article.all
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @articles }
    end
  end
end
