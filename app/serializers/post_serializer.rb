class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :title, :comments_counter, :likes_counter, :user_id
  belongs_to :user
  has_many :comments
  has_many :likes
end
