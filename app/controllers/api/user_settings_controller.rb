class Api::UserSettingsController < ApplicationController

  def create
    @user_settings = UserSettings.new(user_settings_params)

    if @user_settings.save
      render :show
    else
      render json: @user_settings.errors.full_messages, status: 422
    end
  end

  def show
    @user_settings = UserSettings.find(params[:id])
  end

  def update
    user_settings = UserSettings.find(params[:id])
    if user_settings.update(user_settings_params)
      @user = current_user
      render "api/users/show"
    else
      render json: user_settings.errors.full_messages, status: 422
    end
  end

  private

  def user_settings_params
    params.require(:user_settings).permit(:id, :user_id, :discoverable, :messageable, :suggestable)
  end
end
