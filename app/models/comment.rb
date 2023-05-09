class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post
  has_many :likes, dependent: :destroy

  validates :text, presence: true, length: { minimum: 3, maximum: 500 }
  validates :user_id, :post_id, presence: true

  after_save :update_comments_counter
  after_destroy :decrement_comments_counter

  def update_comments_counter
    post.increment!(:comments_counter)
  end

  def decrement_comments_counter
    post.decrement!(:comments_counter)
  end
end
