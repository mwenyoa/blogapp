class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by_email(session_params[:email])
    if user&.authenticate(session_params[:password])
      token = issue_token(user)
      render json: { user: UserSerializer.new(user), jwt: token }, status: 201
    else
      render json: { error: 'Incorrect email or password.' }, status: :unauthorized
    end
  end

  def show
    if logged_in?
      render json: current_user, status: 200
    else
      render json: { error: 'User is not logged in/could not be found.' }, status: 401
    end
  end

  private

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
