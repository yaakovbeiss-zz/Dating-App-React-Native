class Api::MatchesController < ApplicationController

  def create
    match = Match.new(match_params)
    match.matchmaker_id = current_user.id

    if match.save
      @user = current_user
      render "api/users/show"
    else
      render json: match.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = current_user
    match = Match.find(params[:id])
    if match.destroy
      render "api/users/show"
    else
      render json: match.errors.full_messages, status: 422
    end

  end

  private

  def match_params
    params.require(:match).permit(:matchmaker_id, :recipient_id, :suggested_id, :message)
  end

end
