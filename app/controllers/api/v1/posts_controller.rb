class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[update destroy]

  def index
    @posts = Post.includes(:comments, :likes, :user)
                 .where(user_id: params[:user_id])
                 .order(created_at: :desc)
                 .paginate(page: params[:page])

    if @posts.any?
      render json: {
        posts: @posts,
        total_pages: @posts.total_pages,
        current_page: @posts.current_page,
        next_page: @posts.next_page,
        total_entries: @posts.total_entries
      }, status: 200
    else
      render json: { error: @posts.errors.full_messages.to_sentence }, status: 404
    end
  end

  def show
    @post = Post.includes(:comments, :likes)
                .find_by(id: params[:id], user_id: params[:user_id])

    if @post
      render json: @post, status: 200
    else
      render json: { error: 'Post not found' }, status: 404
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: 201
    else
      render json: { error: @post.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post, status: 200
    else
      render json: { error: @post.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    if @post.destroy
      render json: { message: 'Post has been deleted' }, status: 200
    else
      render json: { error: @post.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :text, :user_id)
  end
end
