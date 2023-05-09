class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :firstname, :lastname, :email, :bio, :posts_counter, :created_at, :photo

  has_many :posts
  has_many :comments

  def photo
    return unless object.photo.attached?

    rails_blob_path(object.photo, only_path: true)
  end
end
