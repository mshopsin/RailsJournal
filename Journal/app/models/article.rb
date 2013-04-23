class Article < ActiveRecord::Base
  attr_accessible :body, :title
  
  validates :body, :title, { :presence => true }
end
