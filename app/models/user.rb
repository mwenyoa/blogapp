class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_one_attached :photo
  has_secure_password

  email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: email_regex }
  validates :bio, :firstname, :lastname, :password, presence: true

  def recent_three_posts
    posts.order('created _at desc').limit(3)
  end
end
