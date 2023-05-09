class Api::V1::CommentsController < ApplicationController
  before_action :set_post, only: %i[update destroy]
  before_action :set_comment, only: %i[show update destroy]
  def index
    @Comments = Comment.includes(%i[user post]).order(created_at: :desc)
    if @Comments
      render json: @Comments, status: 200
    else
      render json: { error: 'No commments yet' }, status: 404
    end
  end

  def show
    if @comment
      render json: @comment, status: 200
    else
      render json: { error: @comment.error.full_messages.to_sentence }, status: 404
    end
  end

  def create
    @com = Comment.new(comment_params)
    if @com.save
      render json: @com, status: 201
    else
      render json: { error:  @com.error.full_messages.to_sentence }, status: 422
    end
  end

  def update
       @comment = @author
   end

  def destroy; end

  private

  def set_post
    @post = Post.find_by(id: params[:post_id])
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def set_author
    @author = User.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:text, :post_id, :user_id)
  end
end