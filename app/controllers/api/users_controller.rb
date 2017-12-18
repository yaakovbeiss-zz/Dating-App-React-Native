class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all.includes(:user_settings, user_profile: :profile_images)
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    if current_user.update(user_params)
      @user = current_user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :gender, :birthday, :password)
  end
end
