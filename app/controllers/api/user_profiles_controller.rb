class Api::UserProfilesController < ApplicationController

  def create
    @user_profile = UserProfile.new(user_profile_params)

    if @user_profile.save
      render :show
    else
      render json: @user_profile.errors.full_messages, status: 422
    end
  end

  def show
    @user_profile = UserProfile.find(params[:id])
  end

  def update
    if current_user.update(user_profile_params)
      @user_profile = current_user.user_profile
      render :show
    else
      render json: @user_profile.errors.full_messages, status: 422
    end
  end

  private

  def user_profile_params
    params.require(:user_profile).permit(:user_id, :lat, :lng, :bio, :work, :education)
  end
end
