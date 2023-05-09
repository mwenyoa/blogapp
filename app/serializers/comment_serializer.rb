class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :post_id, :user_id

  has_many :likes
  belongs_to :post
  belongs_to :user
end
