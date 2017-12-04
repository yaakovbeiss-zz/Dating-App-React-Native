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
    if current_user.update(user_settings_params)
      @user_settings = current_user.user_settings
      render :show
    else
      render json: @user_settings.errors.full_messages, status: 422
    end
  end

  private

  def user_settings_params
    params.require(:user_settings).permit(:user_id, :discoverable, :messageable, :suggestable)
  end
end
