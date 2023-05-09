class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_one_attached :photo

  validates :title, presence: true, length: { minimum: 5, maximum: 50 }
  validates :text, presence: true, length: { minimum: 5, maximum: 500 }
  validates :user_id, presence: true

  after_save :update_posts_counter
  after_destroy :decrement_posts_counter

  def update_posts_counter
    user.increment!(:posts_counter)
  end

  def decrement_posts_counter
    user.decrement!(:posts_counter)
  end
end
