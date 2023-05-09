class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[update destroy]
  def index
    @users = User.includes(:posts, :comments, :photo_attachment).order('created_at DESC')
    if @users
      render json: @users, status: 200
    else
      render json: { error: @users.errors.full_messages.to_sentence }, status: 404
    end
  end

  def show
    @profile = User.includes(:posts, :comments, :photo_attachment).find(params[:id])
    if @profile
      render json: @profile, status: :ok
    else
      render json: { error: @profile.errors.full_messages.to_sentence }, status: :not_found
    end
  end

  def create
    @user = User.create(user_params)
    if @user.save
      token = issue_token(@user)
      render json: { user: @user, jwt: token }, status: 201
    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    @profile = @user.update(user_params)
    if @user
      render json: { user: @profile }, status: 200
    else
      render json: { error: @profile.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    if @user.destroy
      render json: { msg: 'User Account deleted Successfully!' }, status: 200
    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :bio, :photo)
  end
end
